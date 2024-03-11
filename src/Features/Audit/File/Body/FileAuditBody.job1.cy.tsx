// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Audit/File/Body/FileAuditBody.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { FileAuditBody } from './FileAuditBody';
import { IFileAudit } from '../../types';

describe('<FileAuditBody />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <FileAuditBody audits={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileAuditBody').should('exist');
  });

  it('should render the correct number of <FileAuditBodyItem />', function () {
    const audits = Array.from({ length: 3 }).map((v, i) => {
      const audit: IFileAudit = {
        id: i,
        event_id: i,
        lib: 'audit' + i,
        params: {},
        date: '',
      };

      return audit;
    });
    cy.mount(
      <SetupTestsComponents>
        <FileAuditBody audits={audits} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileAuditBody')
      .react('FileAuditBodyItem')
      .should('have.length', audits.length);
  });
});
