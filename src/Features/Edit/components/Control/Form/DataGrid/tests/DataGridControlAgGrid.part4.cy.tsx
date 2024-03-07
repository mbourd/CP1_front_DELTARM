// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { RowNode } from 'ag-grid-community';

describe('<DataGridControlAgGrid /> - part 4', function () {
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-2.json').then(
      (d) => (controlExample2 = d),
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

  it('should render "Select All" button & select rows on current pagination - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          select_all_button_display: true,
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
    cy.get('._Button').contains('Select All').click();
    cy.window().then((w) => {
      const api =
        w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
          .gridRef.current.api;
      const currentPage = api.paginationGetCurrentPage() + 1;
      const pageSize = api.paginationGetPageSize();
      const startIndex = currentPage === 0 ? 0 : (currentPage - 1) * pageSize;
      const endIndex = currentPage === 0 ? pageSize : currentPage * pageSize;
      const data: any = [];
      api.forEachNodeAfterFilterAndSort((rowNode: RowNode) => {
        data.push(rowNode);
      });
      const sliced = data.slice(startIndex, endIndex);
      sliced.map((rowNode: RowNode) => {
        if (rowNode?.data?.read_editable === false) {
          return;
        } else {
          expect(
            rowNode.data[
              _control?.data_grid_detail?.datagrid_options
                ?.select_all_button_col_ref as string
            ].value,
          ).to.eq('1');
          cy.get(
            `.ag-cell[col-id^="${_control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}"]`,
          )
            .find('input[type="checkbox"]')
            .each(($ch) => {
              cy.wrap($ch).should('be.checked');
            });
        }
      });
    });
  });
  it('should render "Unselect All" button & rows not selected on current pagination - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          unselect_all_button_display: true,
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
    cy.get('._Button').contains('Unselect All').click();
    cy.window().then((w) => {
      const api =
        w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
          .gridRef.current.api;
      const currentPage = api.paginationGetCurrentPage() + 1;
      const pageSize = api.paginationGetPageSize();
      const startIndex = currentPage === 0 ? 0 : (currentPage - 1) * pageSize;
      const endIndex = currentPage === 0 ? pageSize : currentPage * pageSize;
      const data: RowNode[] = [];
      api.forEachNodeAfterFilterAndSort((rowNode: RowNode) => {
        data.push(rowNode);
      });
      const sliced = data.slice(startIndex, endIndex);
      sliced.map((rowNode: RowNode) => {
        if (rowNode?.data?.read_editable === false) {
          return;
        } else {
          expect(
            rowNode.data[
              _control?.data_grid_detail?.datagrid_options
                ?.select_all_button_col_ref as string
            ].value,
          ).to.eq('0');
          cy.get(
            `.ag-cell[col-id^="${_control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}"]`,
          )
            .find('input[type="checkbox"]')
            .each(($ch) => {
              cy.wrap($ch).should('not.be.checked');
            });
        }
      });
    });
  });

  it('should unselect rows on pagination changed - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          select_all_button_display: true,
          unselect_all_button_display: true,
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
    cy.get('._Button').contains('Select All').click();
    cy.get('.ag-icon.ag-icon-next').click();
    cy.wait(100).then(() => {
      cy.get('.ag-icon.ag-icon-previous').click();
    });
    cy.wait(100).then(() => {
      cy.window().then((w) => {
        const { api } =
          w['Features_Edit_Control_DataGridControlAgGrid' + _control.control_id]
            .gridRef.current;
        const currentPage = api.paginationGetCurrentPage() + 1;
        const pageSize = api.paginationGetPageSize();
        const startIndex = currentPage === 0 ? 0 : (currentPage - 1) * pageSize;
        const endIndex = currentPage === 0 ? pageSize : currentPage * pageSize;
        const data: RowNode[] = [];

        api.forEachNodeAfterFilterAndSort((rowNode: RowNode) => {
          data.push(rowNode);
        });

        const sliced = data.slice(startIndex, endIndex);

        sliced.map((rowNode: RowNode) => {
          if (rowNode?.data?.read_editable === false) {
            return;
          } else {
            expect(
              rowNode.data[
                _control?.data_grid_detail?.datagrid_options
                  ?.select_all_button_col_ref as string
              ].value,
            ).to.eq('0');
            cy.get(
              `.ag-cell[col-id^="${_control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}"]`,
            )
              .find('input[type="checkbox"]')
              .each(($ch) => {
                cy.wrap($ch).should('not.be.checked');
              });
          }
        });
      });
    });
  });
});
