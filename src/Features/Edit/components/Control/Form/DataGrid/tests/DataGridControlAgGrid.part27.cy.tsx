// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part27.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertRequestPayloadQueries } from './helpers/_assertRequestPayloadQuery';

describe('<DataGridControlAgGrid /> - part 27', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // text*n,select*n,number*n
  let controlExample5: IApiControl;
  // action_button,date,icon,checkbox
  let controlExample6: IApiControl;
  let controlExample7: IApiControl;
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

  it('should make one request at a time and payload or queries not empty when editing cells - controlExample1', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample2', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample3', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample4', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  //// TODO:
  // it('should make one request at a time and payload or queries not empty when editing cells - controlExample5', function () {
  //   const fileId = 'fileId';
  //   const _control = {
  //     ...structuredClone(controlExample5),
  //     mandatory: false,
  //     upload_detail: null,
  //     rich_text_detail: null,
  //     control_rejectable: null,
  //   } as any as IApiControl;
  //   const _reqTest = { count: 0 };

  //   cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
  //     _reqTest.count++;
  //     req.on('response', (resp) => {
  //       resp.send(200, { data: {} });
  //     });
  //   }).as('reqSaveCellValue');

  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DataGridControlAgGrid
  //         control={_control}
  //         fileId={fileId}
  //         hasPagination={false}
  //       />
  //     </SetupTestsComponents>,
  //   )
  //     .waitReactApp()
  //     .then(() => {
  //       _assertRequestPayloadQueries(_control, _reqTest, fileId);
  //     });
  // });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample6', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample6),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample7', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample7),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
  it('should make one request at a time and payload or queries not empty when editing cells - controlExample8', function () {
    const fileId = 'fileId';
    const _control = {
      ...structuredClone(controlExample8),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    const _reqTest = { count: 0 };

    cy.intercept('POST', '/control/data_grid/save_value?*', (req) => {
      _reqTest.count++;
      req.reply({ statusCode: 200, body: { data: {} } });
    }).as('reqSaveCellValue');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={fileId}
          hasPagination={false}
        />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() => {
        _assertRequestPayloadQueries(_control, _reqTest, fileId);
      });
  });
});
