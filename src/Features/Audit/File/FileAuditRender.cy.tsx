// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Audit/File/FileAuditRender.cy.tsx"

import React, { useEffect, useRef, useState } from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { FileAuditRender } from './FileAuditRender';
import { IDataFileAudit } from '../types';

describe('<FileAuditRender />', () => {
  it('should render', () => {
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage] = useState<string | null>(null);

      const data: IDataFileAudit = {
        audits: [],
        is_audit: false,
        is_audit_xls: false,
      };

      return (
        <FileAuditRender
          data={data}
          iconRef={iconRef}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleDownloadExcelAudit={function (): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={errorMessage}
        />
      );
    };
    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
  });

  it('should render if is_audit', () => {
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage] = useState<string | null>(null);

      const data: IDataFileAudit = {
        audits: [],
        is_audit: true,
        is_audit_xls: false,
      };

      return (
        <div>
          <FileAuditRender
            data={data}
            iconRef={iconRef}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDownloadExcelAudit={function (): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').find('.audit-icon');
  });

  it('should render if is_audit_xls', () => {
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage] = useState<string | null>(null);

      const data: IDataFileAudit = {
        audits: [],
        is_audit: false,
        is_audit_xls: true,
      };

      return (
        <div>
          <FileAuditRender
            data={data}
            iconRef={iconRef}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDownloadExcelAudit={function (): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC');
  });

  it('should render errormessage', () => {
    const error = 'Error';
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);

      const data: IDataFileAudit = {
        audits: [],
        is_audit: true,
        is_audit_xls: false,
      };
      useEffect(() => {
        setErrorMessage(error);
      }, []);

      return (
        <div>
          <FileAuditRender
            data={data}
            iconRef={iconRef}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDownloadExcelAudit={function (): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    cy.mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').react('BPIBadge').find('svg').realClick();
    cy.wait(1);
    cy.react('DummyFC').get('._FormError').contains(error);
  });
});
