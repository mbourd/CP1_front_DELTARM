// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/Close.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Close } from './Close';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../EditValidationContext';
import { _getRandomNumberBetween } from '../../../../../cypress/utils';
import { IData, IFileItem } from '../../types';

describe('<Close />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Close />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('button').contains('Clôturer le dossier').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contextEdit: IEditValidationContext = {
      data: {
        number: 'fileName/654',
        file: Array.from({ length: 7 }).map((v, i) => {
          const file: IFileItem = {
            key: 'fileItem' + i,
            type: 'fileType' + i,
            value: i === 5 ? '2023-03-23' : 'valueFile' + i,
          };

          return file;
        }),
      } as IData,
      fileId: 'fileID' + _getRandomNumberBetween(0, 657465),
    };
    let reqCount1 = 0;
    let reqCount2 = 0;

    cy.intercept('GET', '/file/dec_link_files\\?*', (req) => {
      reqCount1++;
      req.reply({
        statusCode: 200,
        body: {
          data: [
            // {
            //   linkable_files: Array.from({ length: 3 }).map((v, i) => {
            //     return {
            //       file_avenant: contextEdit.data?.number?.split('/')[1],
            //       file_name: contextEdit.data?.number?.split('/')[0],
            //       file_selected: 1,
            //       file_uuid:
            //         i === 0
            //           ? contextEdit.fileId
            //           : 'fileID' + _getRandomNumberBetween(0, 657465),
            //       file_creation_by: contextEdit.data?.file[6].value,
            //       file_creation_date: contextEdit.data?.file[5].value,
            //     };
            //   }),
            // },
          ],
        },
      });
    }).as('reqGetFileDecLinkFiles');
    cy.intercept('POST', '/file/close\\?*', (req) => {
      reqCount2++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqPostCloseFile');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextEdit}>
          <Close />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetFileDecLinkFiles').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount1).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.then(() => {
          expect(query.file_id).to.eq(contextEdit.fileId);
        });
      });

      cy.get('button').contains('Clôturer le dossier').realClick();
      cy.get('button').contains('Valider la demande').realClick();
      cy.get('button').contains('Confirmer la demande').realClick();
      cy.wait('@reqPostCloseFile').then((interception) => {
        const { request } = interception;
        const { query } = request;

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(255).then(() => {
          expect(reqCount2).to.eq(1);
          cy.wrap(request.body).should('have.property', 'selectedFiles');
          cy.wrap(query).should('have.property', 'file_id');
          cy.then(() => {
            expect(request.body.selectedFiles[0]).to.eq(contextEdit.fileId);
            expect(query.file_id).to.eq(contextEdit.fileId);
          });
        });
      });
    });
  });
});
