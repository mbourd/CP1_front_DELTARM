// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part21.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsRow, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertCellEditable } from './helpers/_assertCellEditable';

describe('<DataGridControlAgGrid /> - part 21', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // text*n,select*n,number*n
  let controlExample5: IApiControl;
  // action_button,icon,checkbox
  let controlExample6: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
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
    cy.fixture('controlDataGridAgGrid-6.json').then(
      (d) => (controlExample6 = d),
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

  it('Should not be able to edit if row_editable=false - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample1.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
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
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
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
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control as any as IApiControl);
  });
  it('Should not be able to edit if row_editable=false and every cell.control_editable=true - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        rows: structuredClone(
          controlExample5.data_grid_detail?.rows as any as DataGridDetailsRow[],
        ).map((row) => {
          for (const index in Object.keys(row)) {
            if (
              typeof row[Object.keys(row)[index]] === 'object' &&
              !Array.isArray(row[Object.keys(row)[index]])
            )
              row[Object.keys(row)[index]].control_editable = true;
          }

          row.row_editable = false;

          return row;
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
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false and every cell.control_editable=true - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        rows: structuredClone(controlExample6.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = true;
            }

            row.row_editable = false;

            return row;
          },
        ),
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
    _assertCellEditable(_control);
  });
});
