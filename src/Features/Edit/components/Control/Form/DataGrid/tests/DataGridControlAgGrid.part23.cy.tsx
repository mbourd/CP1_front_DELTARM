// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part23.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsRow, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertPagination } from './helpers/_assertPagination';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';

describe('<DataGridControlAgGrid /> - part 23', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
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

  it('Should have the correct pagination size - controlExample1', function () {
    const paginationSize = _getRandomNumberBetween(1, 10);
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: {
          ...structuredClone(
            controlExample1.data_grid_detail?.datagrid_options || {},
          ),
          pagination_row_size: paginationSize,
        },
        rows: [
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
        ],
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
    _assertPagination(_control, paginationSize);
  });
  it('Should have the default pagination size - controlExample1', function () {
    const paginationSize = 20;
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: {
          ...structuredClone(
            controlExample1.data_grid_detail?.datagrid_options || {},
          ),
          pagination_row_size: null,
        },
        rows: [
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
        ],
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
    _assertPagination(_control, paginationSize);
  });
  it('Should have the default pagination size - controlExample1', function () {
    const paginationSize = 20;
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: null,
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
    _assertPagination(_control, paginationSize);
  });

  it('should not have pagination - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          const rows = structuredClone(controlExample1.data_grid_detail?.rows);
          const first = controlExample1.data_grid_detail
            ?.rows[0] as DataGridDetailsRow;

          for (let i = 0; i < 233; i++) {
            rows?.push(first);
          }

          return rows;
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={''}
          // @ts-ignore
          hasPagination={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(
      _control,
      _control.data_grid_detail?.rows.length as number,
    );
  });
});
