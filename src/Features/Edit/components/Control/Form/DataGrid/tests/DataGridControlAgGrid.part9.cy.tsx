// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part9.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsColumnType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertSorting } from './helpers/_assertSorting';

describe('<DataGridControlAgGrid /> - part 9', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // innerHTML,test_alt,text_alt,date_string,icon,icon,icon
  let controlExample7: IApiControl;
  // innerHTML,test_alt,date_string,icon,icon,icon
  let controlExample8: IApiControl;

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
    cy.fixture('controlDataGridAgGrid-7.json').then(
      (d) => (controlExample7 = d),
    );
    cy.fixture('controlDataGridAgGrid-8.json').then(
      (d) => (controlExample8 = d),
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

  it('Should NOT sort - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: structuredClone(
          controlExample7.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: structuredClone(
          controlExample8.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
});
