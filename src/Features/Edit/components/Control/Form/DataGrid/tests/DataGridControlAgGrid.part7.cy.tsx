// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part7.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsRow, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertFormatAndEvalFormula } from './helpers/_assertFormatAndEvalFormula';

describe('<DataGridControlAgGrid /> - part 7', function () {
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-3.json').then(
      (d) => (controlExample3 = d),
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

  it('Should evaluate and format formula type correctly - controlExample3', function () {
    // @ts-ignore
    const _control: IApiControl = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertFormatAndEvalFormula(_control);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0, 1].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0, 2].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [2].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  // // NOTE: FAIL because the formula is not correct therefore the component bugs TODO: prevent bug, display empty string ?
  // it('Should FAIL (until fix) - controlExample3', function () {
  //   const _control = {
  //     ...structuredClone(controlExample3),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample3.data_grid_detail),
  //       rows: (() => {
  //         return structuredClone(
  //           controlExample3.data_grid_detail
  //             ?.rows as any as DataGridDetailsRow[],
  //         ).map((row) => {
  //           for (const index in Object.keys(row))
  //             if (
  //               row[Object.keys(row)[index]].component === 'formula' &&
  //               [3].includes(parseInt(index))
  //             )
  //               row[Object.keys(row)[index]].value = '(# * #7925)';

  //           return row;
  //         });
  //       })(),
  //     },
  //     mandatory: false,
  //     upload_detail: null,
  //     rich_text_detail: null,
  //     control_rejectable: null,
  //   };
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DataGridControlAgGrid
  //         control={_control as any as IApiControl}
  //         fileId={''}
  //       />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   _assertFormatAndEvalFormula(_control as any as IApiControl);
  // });
});
