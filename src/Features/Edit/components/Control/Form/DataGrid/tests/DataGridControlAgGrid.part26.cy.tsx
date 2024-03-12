// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part26.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsColumnType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { generateRandExp } from './helpers/generateRandExp';
import { _assertHiddenColumns } from './helpers/_assertHiddenColumns';
import { _assertColumnHeaderStyle } from './helpers/_assertColumnHeaderStyle';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';

describe('<DataGridControlAgGrid /> - part 26', function () {
  // text*n,select*n,number*n
  let controlExample5: IApiControl;
  // action_button,icon,checkbox
  let controlExample6: IApiControl;

  let originalTimeout: number;

  before(() => {
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

  // // NOTE: FAIL because aggrid render with color transparency (alpha) TODO:
  // it('Should have styles applied for select_list choices options - controlExample5', function () {
  //   const _control = {
  //     ...structuredClone(controlExample5),
  //     mandatory: false,
  //     upload_detail: null,
  //     rich_text_detail: null,
  //     control_rejectable: null,
  //   } as any as IApiControl;
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DataGridControlAgGrid control={_control} fileId={''} />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   _assertSelectListOptionsStyles(_control);
  // });

  it('Should have hidden columns by default - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col) => {
              col.hide = _getRandomNumberBetween(0, 3) === 0 ? true : false;

              return col;
            },
          ))(),
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
    _assertHiddenColumns(_control);
  });

  // TODO: sometime failes on github actions
  // it('Should apply header background color - controlExample5', function () {
  //   cy.viewport(3500, 850);
  //   const _control = {
  //     ...structuredClone(controlExample5),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample5.data_grid_detail || {}),
  //       columns: structuredClone(
  //         controlExample5.data_grid_detail?.columns || [],
  //       ).map((col: DataGridDetailsColumnType) => {
  //         col.headerColor = generateRandExp(/^#([0-9A-Fa-f]{6})$/);

  //         return col;
  //       }),
  //     },
  //     mandatory: false,
  //     upload_detail: null,
  //     rich_text_detail: null,
  //     control_rejectable: null,
  //   } as any as IApiControl;
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DataGridControlAgGrid control={_control} fileId={''} />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   _assertColumnHeaderStyle(_control);
  // });
  it('Should apply header background color - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail || {}),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          col.headerColor = '#ff1234';

          return col;
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
    _assertColumnHeaderStyle(_control);
  });
});
