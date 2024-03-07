// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part20.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsColumnType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { generateRandExp } from './helpers/generateRandExp';
import { _assertCellStyle } from './helpers/_assertCellStyle';

describe('<DataGridControlAgGrid /> - part 20', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
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

  it('Should apply cell styles with track modification - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

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
    _assertCellStyle(_control);
  });
  it('Should apply cell styles with track modification - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: '',
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: '{"background-color": "", "color": ""}',
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

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
    _assertCellStyle(_control);
  });

  it('Should apply cell styles with track modification - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

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
    _assertCellStyle(_control);
  });
  it('Should apply cell styles with track modification - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample5.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

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
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail || {}),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: '#ff0000',
            borderRightWidth: '5',
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
    _assertCellStyle(_control);
  });
});
