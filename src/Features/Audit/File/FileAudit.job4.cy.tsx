// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Audit/File/FileAudit.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { FileAudit } from './FileAudit';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../Edit/EditValidationContext';

describe('<FileAudit />', function () {
  // it('should render without crash', function () {
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <FileAudit />
  //     </SetupTestsComponents>,
  //   ).waitReactApp();
  //   cy.react('FileAudit').should('exist');
  // });

  it('should make one request at a time and payload or queries not empty', function () {
    let reqCount = 0;
    const contextValue: IEditValidationContext = {
      data: null,
      fileId: 'fileId',
    };

    cy.intercept('GET', '/file/audit?*', (req) => {
      reqCount++;
      req.on('response', (resp) => {
        resp.send(200, { data: {} });
      });
    }).as('reqAuditFile');

    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileAudit: { canSend: true },
          },
        }}
      >
        <EditValidationContext.Provider value={contextValue}>
          <FileAudit />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqAuditFile').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query)
          .should('have.property', 'file_id')
          .then(() => {
            expect(query.file_id).to.be.eq(contextValue.fileId);
          });
      });
    });
  });
});
