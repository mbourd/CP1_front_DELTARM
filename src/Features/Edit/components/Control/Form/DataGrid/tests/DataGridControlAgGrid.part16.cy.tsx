// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part16.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsColumnType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertTrackModifTooltip } from './helpers/_assertTrackModifTooltip';

describe('<DataGridControlAgGrid /> - part 16', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
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

  it('Should render tooltip when cell modified - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
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
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail || {}),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample2.data_grid_detail?.rows || []).map(
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
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
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
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          col.track_modification = true;
          col.track_modification_tooltip = true;

          return col;
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
    _assertTrackModifTooltip(_control);
  });
});
