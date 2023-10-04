// @ts-check
/// <reference types="cypress" />

import '../../../../cypress/support/commands';

import React, { useEffect, useRef, useState } from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { _getEnv, _requestJWT } from '../../../../cypress/utils';
import { FileAuditRender } from './FileAuditRender';
import { IDataFileAudit } from '../types';

describe('<FileAuditRender />', () => {
  it('should render', () => {
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          handleDownloadExcelAudit={function (e: any): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={errorMessage}
        />
      );
    };
    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC');
  });

  it('should render if is_audit', () => {
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

      return (
        <div>
          <FileAuditRender
            data={data}
            iconRef={iconRef}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDownloadExcelAudit={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    mount(
      <SetupTestsComponents>
        <DummyFC />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DummyFC').get('.audit-icon');
  });

  it('should render if is_audit_xls', () => {
    const DummyFC: React.FC = () => {
      const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(
        null,
      );
      const iconRef = useRef<Element | null>(null);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
            handleDownloadExcelAudit={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    mount(
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
            handleDownloadExcelAudit={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            errorMessage={errorMessage}
          />
        </div>
      );
    };
    mount(
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
