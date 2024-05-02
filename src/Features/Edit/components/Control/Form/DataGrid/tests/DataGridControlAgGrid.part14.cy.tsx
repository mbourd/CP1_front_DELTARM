// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part14.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertResizableColumns } from './helpers/_assertResizableColumns';

describe('<DataGridControlAgGrid /> - part 14', function () {
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

  it('Should be able to resize column - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  //// TODO: fail because width fixed for some cols
  // it('Should be able to resize column - controlExample2', function () {
  //   const _control = {
  //     ...structuredClone(controlExample2),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample2.data_grid_detail),
  //       columns: (() =>
  //         structuredClone(controlExample2.data_grid_detail?.columns || []).map(
  //           (col) => {
  //             col.resizable = true;

  //             return col;
  //           },
  //         ))(),
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
  //   _assertResizableColumns(_control);
  // });
  it('Should be able to resize column - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample3.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  it('Should be able to resize column - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample4.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  //// TODO: fail because width fixed for some cols
  // it('Should be able to resize column - controlExample5', function () {
  //   const _control = {
  //     ...structuredClone(controlExample5),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample5.data_grid_detail),
  //       columns: (() =>
  //         structuredClone(controlExample5.data_grid_detail?.columns || []).map(
  //           (col) => {
  //             col.resizable = true;

  //             return col;
  //           },
  //         ))(),
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
  //   _assertResizableColumns(_control);
  // });
  it('Should be able to resize column - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample6.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  it('Should be able to resize column - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample7.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  it('Should be able to resize column - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample8.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample2.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample3.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample4.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample6.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample7.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;
              // @ts-ignore
              col.triggerAction = () => undefined;

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
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample8.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
        rows: [controlExample8.data_grid_detail?.rows[0]],
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
    _assertResizableColumns(_control);
  });
});
