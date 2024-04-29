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
import { IDataFileAudit, IFileAudit } from '../types';
import { _getRandomNumberBetween } from '../../../../cypress/utils';

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
    const data = {
      audit: Array.from({ length: 3 }).map((v, i) => {
        const audit = {
          id: i,
          event_id: i,
          event_lib: 'lib' + i,
          event_params: { key1: 'hello', key2: 'world' },
          event_ts: new Date().getTime(),
        };

        return audit;
      }),
      is_audit: true,
      is_audit_xls: true,
    };

    cy.intercept('GET', '/file/audit\\?target=screen*', (req) => {
      reqCount++;
      req.on('response', (resp) => {
        resp.send(200, { data });
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

  it('should be able to download and make one request at a time and payload/queries not empty', function () {
    cy.viewport(1000, 600);

    let reqCount = 0;
    const contextValue: IEditValidationContext = {
      data: null,
      fileId: 'fileId',
    };
    const data = {
      audit: Array.from({ length: 3 }).map((v, i) => {
        const audit = {
          id: i,
          event_id: i,
          event_lib: 'lib' + i,
          event_params: { key1: 'hello', key2: 'world' },
          event_ts: new Date().getTime(),
        };

        return audit;
      }),
      is_audit: true,
      is_audit_xls: true,
    };
    const contentFile = 'dpofjdsfkdsfj' + _getRandomNumberBetween(0, 89897546);

    cy.intercept('GET', '/file/audit\\?target=screen*', (req) => {
      req.on('response', (resp) => {
        resp.send(200, { data });
      });
    }).as('reqAuditFile');
    cy.intercept('GET', '/file/audit\\?target=download_xls*', (req) => {
      reqCount++;
      req.on('response', (resp) => {
        resp.send(200, contentFile);
      });
    }).as('reqDownloadAuditFile');

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

    cy.wait('@reqAuditFile').then(() => {
      cy.get('.open-audits-icon').realClick();
      cy.get('.excel-icon').realClick();
      cy.wait('@reqDownloadAuditFile').then((interception) => {
        const { request } = interception;
        const { query } = request;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(288).then(() => {
          expect(reqCount).to.eq(1);
          cy.wrap(query).should('have.property', 'target');
          cy.wrap(query).should('have.property', 'file_id');
          cy.then(() => {
            expect(query.target).to.eq('download_xls');
            expect(query.file_id).to.eq('fileId');
          });

          cy.readFile('cypress/downloads/undefined.txt').should(
            'contain',
            contentFile,
          );
        });
      });
    });
  });
});
