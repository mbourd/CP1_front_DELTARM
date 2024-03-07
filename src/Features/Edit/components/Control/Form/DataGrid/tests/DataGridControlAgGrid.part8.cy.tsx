// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part8.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsRow, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import BigNumber from 'bignumber.js';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';
import { _assertSorting } from './helpers/_assertSorting';

describe('<DataGridControlAgGrid /> - part 8', function () {
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
  // innerHTML,test_alt,text_alt,date_string,icon,icon,icon
  let controlExample7: IApiControl;
  // innerHTML,test_alt,date_string,icon,icon,icon
  let controlExample8: IApiControl;

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

  it('Should sort correctly - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
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
  it('Should sort correctly with big numbers - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample1.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].value = `${BigNumber(
                  '900719925474099100000',
                )
                  .plus(_getRandomNumberBetween(1, 40000))
                  .toString()}${
                  row[Object.keys(row)[index]].component !== 'integer'
                    ? `.${_getRandomNumberBetween(1, 99999)}`
                    : ''
                }`;

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
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
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
  it('Should sort correctly with empty cells - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row, indexRow) => {
            if (indexRow === 0 || indexRow === 4)
              for (const index in Object.keys(row))
                if (
                  typeof row[Object.keys(row)[index]] === 'object' &&
                  !Array.isArray(row[Object.keys(row)[index]]) &&
                  [0].includes(parseInt(index))
                )
                  row[Object.keys(row)[index]].value = null;

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
    _assertSorting(_control);
  });
  it('Should sort correctly with empty cells & big numbers - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row, indexRow) => {
            if (indexRow === 0 || indexRow === 4)
              for (const index in Object.keys(row))
                if (
                  typeof row[Object.keys(row)[index]] === 'object' &&
                  !Array.isArray(row[Object.keys(row)[index]]) &&
                  row[Object.keys(row)[index]].component !== 'formula'
                )
                  if ([0].includes(parseInt(index)))
                    row[Object.keys(row)[index]].value = null;
                  else
                    row[Object.keys(row)[index]].value = `${BigNumber(
                      '900719925474099100000',
                    )
                      .plus(_getRandomNumberBetween(1, 40000))
                      .toString()}${
                      row[Object.keys(row)[index]].component !== 'integer'
                        ? `.${_getRandomNumberBetween(1, 99999)}`
                        : ''
                    }`;

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
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
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
  it('Should sort correctly - controlExample5', function () {
    cy.viewport(3500, 750);
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
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample6', function () {
    cy.viewport(3500, 750);
    const _control = {
      ...structuredClone(controlExample6),
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
  it('Should sort correctly - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
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
  it('Should sort correctly - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
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
