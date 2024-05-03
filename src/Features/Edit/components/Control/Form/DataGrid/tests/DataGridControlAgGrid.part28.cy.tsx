// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part28.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertCellStyle } from './helpers/_assertCellStyle';

describe('<DataGridControlAgGrid /> - part 28', function () {
  // innerHTML,test_alt,date_string,icon,icon,icon
  let controlExample8: IApiControl;

  let originalTimeout: number;

  before(() => {
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

  // it('Should have hidden columns by default - controlExample5', function () {
  //   const _control = {
  //     ...structuredClone(controlExample8),
  //     mandatory: false,
  //     upload_detail: null,
  //     rich_text_detail: null,
  //     control_rejectable: null,
  //   } as any as IApiControl;
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <DataGridControlAgGrid
  //         control={_control}
  //         fileId={''}
  //         hasPagination={false}
  //       />
  //     </SetupTestsComponents>,
  //   );
  //   cy.waitReactApp();
  //   cy.wait(15000)
  //     .then(() => {
  //       cy.get('.ag-cell').eq(2).realClick();
  //       cy.realPress('End');
  //     })
  //     .then(() => {
  //       cy.wait(1000).then(() => {
  //         _assertCellStyle(_control);
  //       });
  //     });
  // });
});
