// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/EditValidation.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { EditValidation } from './EditValidation';

import '../apiRoutes/edit';
import { editValidationHandlerCallback } from '../apiRoutes/edit';
import { _getRandomNumberBetween, _translate } from '../../../../cypress/utils';
import '../../../Features/Edit/translations';
import { IButtons } from '../../DashboardDynamic/components/types';
import { GridApi, RowNode } from 'ag-grid-community';
import { IEditValidationContext } from '../EditValidationContext';

describe('<Editvalidation />', function () {
  let editValidation1;

  before(() => {
    cy.fixture('editValidation-1.json').then((d) => (editValidation1 = d));
  });

  beforeEach(() => {
    cy.viewport(1800, 800);
  });

  it('should render', function () {
    cy.intercept('GET', '/edit*', {
      statusCode: 200,
      fixture: 'editValidation-1.json',
    });
    cy.intercept('GET', '/comment/file*', { statusCode: 200, body: {} });
    cy.intercept('GET', '/file/audit*', { statusCode: 200, body: {} });
    cy.mount(
      <SetupTestsComponents>
        <EditValidation title={'123456'} apiRouteName={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('EditValidation').should('exist');
  });

  it('should update the menu label of the current section when delete rows', function () {
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const fileId = 'fileId' + _getRandomNumberBetween(4, 6423);
    let reqCount = 0;

    cy.intercept('GET', '/edit*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: editValidation1 });
    }).as('reqGetEditValidation');
    cy.intercept('GET', '/comment/file*', { statusCode: 200, body: {} });
    cy.intercept('GET', '/file/audit*', { statusCode: 200, body: {} });
    cy.mount(
      <SetupTestsComponents>
        <EditValidation title={'123456'} apiRouteName={'edit'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wait('@reqGetEditValidation').then(() => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
      });
    });
    cy.contains('Select All').click();
    cy.window().then((w) => {
      const processedData = editValidationHandlerCallback(
        editValidation1,
        'edit',
      );
      const contrId =
        processedData.currentSection.chapters[0].controls[0].control_id;
      const { api: gridApi }: { api: GridApi } =
        w[
          'Features_Edit_Control_DataGridControlAgGrid' +
            processedData.currentSection.chapters[0].controls[0].control_id
        ].gridRef.current;
      const indexCurrentSection = processedData.sections.findIndex(
        (section) => processedData.currentSection.id === section.id,
      );

      w['Features/Edit/components/EditValidation'].setFileId(fileId);
      cy.fixture('controlDataGridAgGrid-resp-delete_rows-1.json').then(
        (responseModalDeleteRows) => {
          const btnConfirmDel = responseModalDeleteRows.btn.find(
            (d) => d.action.method === 'POST',
          ) as IButtons;
          let reqCount1 = 0;
          let reqCount2 = 0;

          cy.intercept('POST', '/control/data_grid/delete_row\\?*', (req) => {
            reqCount1++;
            req.reply({ statusCode: 200, body: responseModalDeleteRows });
          }).as('reqConfirmDelete');
          cy.intercept(
            'POST',
            btnConfirmDel.action.endpoint + '\\?*',
            (req) => {
              reqCount2++;
              req.reply({
                statusCode: 201,
                body: {
                  origin_fonction_callback: 'delete_row',
                  row_deleted: [
                    '46fba736-8fc4-4183-bd37-1c9bc2a94ecc',
                    '32c428ac-6534-44fa-8cdd-f2e7a16d213a',
                    '04b802b2-bc57-44f7-9303-dd5eea3abd9e',
                    '53932e1a-8bde-4cf9-9f71-9ab13f2475d6',
                  ],
                  row_error: [],
                },
              });
            },
          ).as('callAfterConfirmDeletionBtn');
          cy.then(() => {
            cy.get('._Button')
              .contains(new RegExp(translations.join('|')))
              .click();
            cy.wait('@reqConfirmDelete').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(255).then(() => {
                expect(reqCount1).to.be.eq(1);
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query).should('have.property', 'elm_id');
                cy.wrap(query)
                  .should('have.property', 'source')
                  .then(() => {
                    expect(reqCount1).to.be.eq(1);
                    expect(query.file_id).to.eq(fileId);
                    expect(query.elm_id).to.be.eq(contrId + '');
                    expect(query.source).to.be.eq('TE_tobedeclared');
                  });
              });
            });
          }).then(() => {
            cy.react('ModalDynamic')
              .find('button')
              .contains(btnConfirmDel.btn_lib)
              .click();
            cy.wait('@callAfterConfirmDeletionBtn').then((interception) => {
              const { request } = interception;
              const { query } = request;

              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(255).then(() => {
                expect(reqCount2).to.be.eq(1);
                cy.wrap(query).should('have.property', 'action_date');
                cy.wrap(query).should('have.property', 'action_type');
                cy.wrap(query).should('have.property', 'file_id');
                cy.wrap(query)
                  .should('have.property', 'source')
                  .then(() => {
                    expect(query.action_type).to.be.eq('0');
                    expect(query.source).to.be.eq('TE_tobedeclared');
                    expect(query.file_id).to.be.eq(
                      '5e618715-7f5c-405d-830a-975109f8b5d4',
                    );
                  });
                cy.react('NavItem')
                  .eq(indexCurrentSection)
                  .invoke('text')
                  .then((t) => {
                    const remainingNodes: RowNode[] = [];
                    // @ts-ignore
                    gridApi.forEachNode((n) => remainingNodes.push(n));
                    expect(t).to.eq(
                      t.replace(/\(.*\)$/, `(${remainingNodes.length})`),
                    );
                  });
              });
            });
          });
        },
      );
    });
  });
});
