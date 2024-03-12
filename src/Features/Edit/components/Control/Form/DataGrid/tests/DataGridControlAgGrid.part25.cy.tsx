// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part25.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertRegexValidation } from './helpers/_assertRegexValidation';
import { generateRegex } from './helpers/generateRegex';
import { listChars } from './helpers/listChars';
import { _getRandomNumberBetween } from '../../../../../../../../cypress/utils';

describe('<DataGridControlAgGrid /> - part 25', function () {
  // text,comment,long_text
  let controlExample4: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-4.json').then(
      (d) => (controlExample4 = d),
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

  // TODO: sometime fails on github actions
  // it('Should render an error message if value dont match with control_regex & no error message if match - controlExample4', function () {
  //   const _control = {
  //     ...structuredClone(controlExample4),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample4.data_grid_detail),
  //       rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
  //         (row) => {
  //           for (const index in Object.keys(row)) {
  //             if (
  //               typeof row[Object.keys(row)[index]] === 'object' &&
  //               !Array.isArray(row[Object.keys(row)[index]])
  //             ) {
  //               if ([0, 1].includes(parseInt(index))) {
  //                 row[Object.keys(row)[index]].control_regex = new RegExp(
  //                   '^-?((180(\\.0+)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d+)?))$',
  //                 );
  //               } else
  //                 row[Object.keys(row)[index]].control_regex = new RegExp(
  //                   '^-?(90(\\.0+)?|[1-8]?\\d(\\.\\d+)?)$',
  //                 );

  //               row[Object.keys(row)[index]].control_regex_msg =
  //                 'The value dont match with the regex';
  //             }
  //           }

  //           return row;
  //         },
  //       ),
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
  //   _assertRegexValidation(_control as any as IApiControl);
  // });
  // it('Should render an error message if value dont match with control_regex & no error message if match - controlExample4', function () {
  //   const _control = {
  //     ...structuredClone(controlExample4),
  //     data_grid_detail: {
  //       ...structuredClone(controlExample4.data_grid_detail),
  //       rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
  //         (row) => {
  //           for (const index in Object.keys(row)) {
  //             if (
  //               typeof row[Object.keys(row)[index]] === 'object' &&
  //               !Array.isArray(row[Object.keys(row)[index]])
  //             ) {
  //               row[Object.keys(row)[index]].control_regex = generateRegex(
  //                 Array.from({
  //                   length: _getRandomNumberBetween(3, 23),
  //                 }).map(() =>
  //                   listChars(_getRandomNumberBetween(30, 2333))(
  //                     _getRandomNumberBetween(6, 23),
  //                   ),
  //                 ),
  //               );

  //               row[Object.keys(row)[index]].control_regex_msg = 'Not valid';
  //             }
  //           }

  //           return row;
  //         },
  //       ),
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
  //   _assertRegexValidation(_control as any as IApiControl);
  // });
});
