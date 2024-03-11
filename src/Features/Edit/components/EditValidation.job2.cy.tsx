// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/EditValidation.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { EditValidation } from './EditValidation';

import '../apiRoutes/edit';
import { editValidationHandlerCallback } from '../apiRoutes/edit';
import { _translate } from '../../../../cypress/utils';
import '../../../Features/Edit/translations';
import { IButtons } from '../../DashboardDynamic/components/types';
import { GridApi, RowNode } from 'ag-grid-community';

describe('<Editvalidation />', function () {
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
    cy.contains('Select All').click();
    cy.window().then((w) => {
      cy.fixture('editValidation-1.json').then((d) => {
        const processedData = editValidationHandlerCallback(d, 'edit');
        const { api: gridApi }: { api: GridApi } =
          w[
            'Features_Edit_Control_DataGridControlAgGrid' +
              processedData.currentSection.chapters[0].controls[0].control_id
          ].gridRef.current;
        const indexCurrentSection = processedData.sections.findIndex(
          (section) => processedData.currentSection.id === section.id,
        );

        cy.wait(25).then(() => {
          cy.fixture('controlDataGridAgGrid-resp-delete_rows-1.json').then(
            (responseModalDeleteRows) => {
              const btnConfirmDel = responseModalDeleteRows.btn.find(
                (d) => d.action.method === 'POST',
              ) as IButtons;

              cy.intercept('POST', '/control/data_grid/delete_row?*', {
                statusCode: 200,
                body: responseModalDeleteRows,
              });
              cy.intercept('POST', btnConfirmDel.action.endpoint + '?*', {
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
              }).as('callAfterConfirmDeletionBtn');
              cy.get('._Button')
                .contains(new RegExp(translations.join('|')))
                .click();
              cy.react('ModalDynamic')
                .find('button')
                .contains(btnConfirmDel.btn_lib)
                .click();
              cy.wait('@callAfterConfirmDeletionBtn').then(() => {
                cy.wait(25).then(() => {
                  cy.react('NavItem')
                    .eq(indexCurrentSection)
                    .invoke('text')
                    .then((t) => {
                      const remainingNodes: RowNode[] = [];
                      gridApi.forEachNode((n) => remainingNodes.push(n));
                      expect(t).to.eq(
                        t.replace(/\(.*\)$/, `(${remainingNodes.length})`),
                      );
                    });
                });
              });
            },
          );
        });
      });
    });
  });
});
