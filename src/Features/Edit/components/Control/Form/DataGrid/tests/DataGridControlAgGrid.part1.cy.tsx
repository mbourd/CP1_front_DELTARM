// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';

describe('<DataGridControlAgGrid /> - part 1', function () {
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

  it('should render - controlExample1', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample3', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample4', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample5', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample6', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample7', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample8', function () {
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
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });

  it('should make on request at a time and payload/queries not empty when call method refresh_grid - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample1.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
        source: 'source',
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: '9865435',
    } as IApiControl;
    const fileid = 'fileid' + _getRandomNumberBetween(113, 58735);
    let reqCount = 0;

    cy.intercept('GET', '/control/data_grid/refresh_values\\?*', (req) => {
      reqCount++;
      req.reply({
        statusCode: 200,
        fixture: 'controlDataGridAgGrid-1-refresh_grid.json',
      });
    }).as('reqGetRefreshValues');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileid} />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.window()
      .then((w) => {
        w[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].refresh_grid();
      })
      .then(() => {
        cy.wait('@reqGetRefreshValues').then((interception) => {
          const { request } = interception;
          const { query } = request;

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(300).then(() => {
            expect(reqCount).to.eq(1);
            cy.wrap(query).should('have.property', 'file_id');
            cy.wrap(query).should('have.property', 'control_id');
            cy.wrap(query).should('have.property', 'source');
            cy.then(() => {
              expect(query.file_id).to.eq(fileid);
              expect(query.control_id).to.eq(_control.control_id);
              expect(query.source).to.eq(_control.data_grid_detail?.source);
            });
          });
        });
      });
  });
});
