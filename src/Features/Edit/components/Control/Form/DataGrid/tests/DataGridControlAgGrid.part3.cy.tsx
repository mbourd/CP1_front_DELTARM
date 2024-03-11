// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';

describe('<DataGridControlAgGrid /> - part 3', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // text*n,select*n,number*n
  let controlExample5: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
    );
    cy.fixture('controlDataGridAgGrid-2.json').then(
      (d) => (controlExample2 = d),
    );
    cy.fixture('controlDataGridAgGrid-3.json').then(
      (d) => (controlExample3 = d),
    );
    cy.fixture('controlDataGridAgGrid-4.json').then(
      (d) => (controlExample4 = d),
    );
    cy.fixture('controlDataGridAgGrid-5.json').then(
      (d) => (controlExample5 = d),
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

  it('Should have the correct number of columns - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('be.visible')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('be.visible')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample3', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample4', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample5', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
});
