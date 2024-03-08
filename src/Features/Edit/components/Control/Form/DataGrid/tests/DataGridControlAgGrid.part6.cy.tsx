// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part6.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { RowNode } from 'ag-grid-community';
import { _translate } from '../../../../../../../../cypress/utils';
import { IButtons } from '../../../../../../DashboardDynamic/components/types';

describe('<DataGridControlAgGrid /> - part 6', function () {
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
  let controlExample9: IApiControl;

  let responseModalDeleteRows;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-2.json').then(
      (d) => (controlExample2 = d),
    );
    cy.fixture('controlDataGridAgGrid-9.json').then(
      (d) => (controlExample9 = d),
    );

    cy.fixture('controlDataGridAgGrid-resp-delete_rows-1.json').then(
      (d) => (responseModalDeleteRows = d),
    );

    // Store the original timeout value
    originalTimeout = Cypress.config('defaultCommandTimeout');
  });

  beforeEach(() => {
    // Check if Cypress is running from the CLI or open interface
    // if (!Cypress.config('isTextTerminal')) cy.viewport(1600, 720);
    cy.viewport(1600, 720);
  });

  afterEach(() => {
    // Reset the timeout to its original value
    Cypress.config('defaultCommandTimeout', originalTimeout);
  });

  it('should render modal confirmation when click on "Add row" - controlExample9', function () {
    const fileId = 'dsqds-qsfdqf5-qsdqs54554-4556465';
    const trans_FR = _translate('fr', 'Edit', 'addLine');
    const trans_EN = _translate('en', 'Edit', 'addLine');
    const trans_DE = _translate('de', 'Edit', 'addLine');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample9),
      data_grid_detail: {
        ...structuredClone(controlExample9.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample9.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
        source: 'source-test',
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: '9865435',
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileId} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/add_row?*', {
        statusCode: 200,
        body: {},
      }).as('addRowConfirmRequest');
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.react('ModalDynamic').should('exist');
      cy.window().then((/*w*/) => {
        cy.wait('@addRowConfirmRequest').then((intercept) => {
          const { request } = intercept;
          const { query } = request;
          cy.wrap(query).should('have.property', 'file_id');
          expect(query.file_id).to.eq(fileId);
          cy.wrap(query).should('have.property', 'elm_id');
          expect(query.elm_id).to.eq(_control.control_id);
          cy.wrap(query).should('have.property', 'source');
          expect(query.source).to.eq(_control.data_grid_detail?.source);
        });
      });
    });
  });

  it('should render modal confirmation when click on delete rows and payload rows not empty - controlExample9', function () {
    const fileId = 'dsqds-qsfdqf5-qsdqs54554-4556465';
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample9),
      data_grid_detail: {
        ...structuredClone(controlExample9.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample9.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
        source: 'source-test',
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: '9865435',
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileId} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/delete_row?file_id=*', {
        statusCode: 200,
        body: responseModalDeleteRows,
      }).as('deleteRowsConfirmRequest');
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.react('ModalDynamic').should('exist');
      cy.window().then((w) => {
        const { api: gridApi } =
          w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
            .gridRef.current;

        cy.wait('@deleteRowsConfirmRequest').then((intercept) => {
          const { request } = intercept;
          const { query } = request;
          const selected: any[] = [];
          gridApi.forEachNode((node) => {
            if (
              node.data[
                _control.data_grid_detail?.datagrid_options
                  ?.select_all_button_col_ref as string
              ]?.value === '1'
            ) {
              selected.push(node);
            }
          });
          expect(request.body.rows.length).to.be.eq(selected.length);
          expect(request.body.rows.length).to.be.gt(0);
          selected.forEach((node: RowNode) => {
            expect(request.body.rows).to.include(node.data.row_uuid);
          });
          cy.wrap(query).should('have.property', 'file_id');
          expect(query.file_id).to.eq(fileId);
          cy.wrap(query).should('have.property', 'elm_id');
          expect(query.elm_id).to.eq(_control.control_id);
          cy.wrap(query).should('have.property', 'source');
          expect(query.source).to.eq(_control.data_grid_detail?.source);
        });
      });
    });
  });

  it('should match the endpoint after confirm delete rows modal and rows payload not empty - controlExample9', function () {
    const fileId = '5e618715-7f5c-405d-830a-975109f8b5d4';
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample9),
      data_grid_detail: {
        ...structuredClone(controlExample9.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample9.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
        source: 'TE_tobedeclared',
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: '9865435',
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileId} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/delete_row?file_id=*', {
        statusCode: 200,
        body: responseModalDeleteRows,
      });
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.wait(100).then(() => {
        cy.window().then((w) => {
          const { api: gridApi } =
            w[
              'Features_Edit_Control_DataGridControlAgGrid' +
                _control.control_id
            ].gridRef.current;
          const btnConfirmDel = responseModalDeleteRows.btn.find(
            (d) => d.action.method === 'POST',
          ) as IButtons;

          cy.intercept('POST', btnConfirmDel.action.endpoint + '?*', {
            statusCode: 201,
            body: {},
          }).as('callAfterConfirmDeletionBtn');
          cy.react('ModalDynamic')
            .find('button')
            .contains(btnConfirmDel.btn_lib)
            .click();
          cy.wait('@callAfterConfirmDeletionBtn').then((intercepted) => {
            const { request } = intercepted;
            const reqBody = parseMultipartFormData(request.body);
            const { query } = request;
            const selected: any[] = [];

            expect(request.url).to.match(
              new RegExp(btnConfirmDel.action.endpoint),
            );
            gridApi.forEachNode((node) => {
              if (
                node.data[
                  _control.data_grid_detail?.datagrid_options
                    ?.select_all_button_col_ref as string
                ]?.value === '1'
              ) {
                selected.push(node);
              }
            });
            expect(JSON.parse(reqBody).rows.length).to.be.eq(selected.length);
            expect(JSON.parse(reqBody).rows.length).to.be.gt(0);
            selected.forEach((node: RowNode) => {
              expect(JSON.parse(reqBody).rows).to.include(node.data.row_uuid);
            });
            cy.wrap(query).should('have.property', 'file_id');
            expect(query.file_id, 'query.file_id').to.eq(fileId);
            cy.wrap(query).should('have.property', 'action_date');
            // expect(query.action_date, 'query.action_date').to.eq();
            cy.wrap(query).should('have.property', 'action_type');
            // expect(query.action_type, 'query.action_type').to.eq();
            cy.wrap(query).should('have.property', 'source');
            expect(query.source, 'query.source').to.eq(
              _control.data_grid_detail?.source,
            );
          });
        });
      });
    });
  });

  it('should delete selected rows - controlExample2', function () {
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/delete_row?*', {
        statusCode: 200,
        body: responseModalDeleteRows,
      });
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.window().then((w) => {
        // const selected: string[] = [];
        const { api: gridApi } =
          w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
            .gridRef.current;
        const btnConfirmDel = responseModalDeleteRows.btn.find(
          (d) => d.action.method === 'POST',
        ) as IButtons;

        // gridApi.forEachNode((node: RowNode) => {
        //   if (
        //     node.data[
        //       _control.data_grid_detail?.datagrid_options
        //         ?.select_all_button_col_ref as string
        //     ]?.value === '1'
        //   ) {
        //     selected.push(node.data?.row_uuid);
        //   }
        // });
        cy.intercept('POST', btnConfirmDel.action.endpoint + '?*', {
          statusCode: 201,
          fixture: 'controlDataGridAgGrid-resp-confirm-delete_rows-1.json',
        }).as('callAfterConfirmDeletionBtn');
        cy.react('ModalDynamic')
          .find('button')
          .contains(btnConfirmDel.btn_lib)
          .click();
        cy.wait('@callAfterConfirmDeletionBtn').then((intercepted) => {
          const { response } = intercepted;

          cy.wait(500).then(() => {
            const remainingNode: string[] = [];

            gridApi.forEachNode((node: RowNode) => {
              remainingNode.push(node.data?.row_uuid);
            });
            // selected.forEach((uuid) => {
            //   expect(remainingNode).not.include(uuid);
            // });
            // @ts-ignore
            (response.body.row_deleted as string[]).forEach((uuid) => {
              expect(remainingNode).not.include(uuid);
            });
            cy.react('ModalDynamic').should('not.exist');
          });
        });
      });
    });
  });
  it('should NOT delete the row if the response includes some row_error - controlExample2', function () {
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/delete_row?*', {
        statusCode: 200,
        body: responseModalDeleteRows,
      });
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.window().then((w) => {
        const { api: gridApi } =
          w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
            .gridRef.current;
        const btnConfirmDel = responseModalDeleteRows.btn.find(
          (d) => d.action.method === 'POST',
        ) as IButtons;

        cy.intercept('POST', btnConfirmDel.action.endpoint + '?*', {
          statusCode: 201,
          fixture: 'controlDataGridAgGrid-resp-confirm-delete_rows-2.json',
        }).as('callAfterConfirmDeletionBtn');
        cy.react('ModalDynamic')
          .find('button')
          .contains(btnConfirmDel.btn_lib)
          .click();
        cy.wait('@callAfterConfirmDeletionBtn').then((intercepted) => {
          const { response } = intercepted;

          cy.wait(500).then(() => {
            const remainingNode: string[] = [];

            gridApi.forEachNode((node: RowNode) => {
              remainingNode.push(node.data?.row_uuid);
            });
            // @ts-ignore
            (response.body.row_error as Record<any, any>[]).forEach((data) => {
              expect(remainingNode).include(data.row);
              cy.react('ModalDynamic').formErrorShouldBeVisible([data.error]);
            });
            cy.react('ModalDynamic').should('be.visible');
          });
        });
      });
    });
  });
});

function parseMultipartFormData(multipartFormData) {
  if (!multipartFormData.includes('------WebKitFormBoundary'))
    return multipartFormData;

  const formDataObject = {};

  // Split the multipart content into individual parts
  const parts = multipartFormData.split(/------WebKitFormBoundary.*/);

  // Remove the first and last empty parts
  parts.shift();
  parts.pop();

  // Iterate over each part to extract key-value pairs
  parts.forEach((part) => {
    const match = /name="([^"]+)"(?:\r\n|\r|\n)([\s\S]*)/.exec(part);
    if (match) {
      const key = match[1].replace(/\[\]$/, '');
      const value = match[2].trim();

      // If the key already exists, convert the value to an array
      if (Object.hasOwnProperty.call(formDataObject, key)) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    }
  });

  return JSON.stringify(formDataObject);
}
