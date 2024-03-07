// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part22.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsColumnType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { listChars } from './helpers/listChars';
import { _assertColHeaderTooltip } from './helpers/_assertColHeaderTooltip';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';

describe('<DataGridControlAgGrid /> - part 22', function () {
  // text*n,select*n,number*n
  let controlExample5: IApiControl;

  let originalTimeout: number;

  before(() => {
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

  it('Should render header tooltip if column.col_header_display_tooltip=true - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
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
    _assertColHeaderTooltip(_control);
  });
  it('Should render header tooltip and text tooltip from api - controlExample5', function () {
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
            col_header_display_tooltip: true,
            col_header_tooltip: listChars()(_getRandomNumberBetween(6, 23)),
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
    _assertColHeaderTooltip(_control);
  });
  it('Should NOT render header tooltip - controlExample5', function () {
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
            col_header_display_tooltip: false,
            col_header_tooltip: 'azd',
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
    _assertColHeaderTooltip(_control);
  });
});
