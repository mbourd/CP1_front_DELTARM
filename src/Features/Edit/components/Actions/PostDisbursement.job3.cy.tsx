// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/PostwDisbursement.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { PostDisbursement } from './PostDisbursement';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../EditValidationContext';
import { IData, IFileItem } from '../../types';
import { _getRandomNumberBetween } from '../../../../../cypress/utils';

describe('<PostDisbursement />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <PostDisbursement />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Button').contains('Passer en Post-Décaissement').should('exist');
  });

  it('should make one request at a time payload/queries not empty', function () {
    const fileId = 'fileID' + _getRandomNumberBetween(0, 657465);
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
      fileId,
    };
    let reqCount1 = 0;
    let reqCount2 = 0;

    cy.intercept('GET', '/file/dec_link_files\\?*', (req) => {
      reqCount1++;
      req.on('response', (resp) =>
        resp.send({ statusCode: 200, body: { data: [] } }),
      );
    }).as('reqGetFileDisbursement');
    cy.intercept('POST', '/file/post_dec\\?*', (req) => {
      reqCount2++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqPostPostDecFile');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextEdit}>
          <PostDisbursement />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetFileDisbursement').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount1).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.then(() => {
          expect(query.file_id).to.eq(fileId);
        });
      });

      cy.get('button').contains('Passer en Post-Décaissement').realClick();
      cy.get('button').contains('Valider la demande').realClick();
      cy.get('button').contains('Confirmer la demande').realClick();
      cy.wait('@reqPostPostDecFile').then((interception) => {
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
