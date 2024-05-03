// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { IApiControl } from '../../../../../types';
import { AgDataGridStyle } from '../DataGridControl.style';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';

describe('<DataGridControlAgGrid /> - part 2', function () {
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

  it('should have a fixed height - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
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
          heightGrid={'456px'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${AgDataGridStyle.styledComponentId}`).should(
      'have.css',
      'height',
      '456px',
    );
  });
  it('should have a fixed height - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
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
          heightGrid={233}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${AgDataGridStyle.styledComponentId}`).should(
      'have.css',
      'height',
      '233px',
    );
    cy.react('AgGridReact')
      .invoke('height')
      .then((height) => expect(height).to.be.eq(233));
  });
});
