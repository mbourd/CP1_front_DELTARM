// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridUpload } from './DataGridUpload';

describe('<DataGridControlAgGrid /> - part 1', function () {
  before(() => {});

  beforeEach(() => {
    // Check if Cypress is running from the CLI or open interface
    // if (!Cypress.config('isTextTerminal')) cy.viewport(1600, 720);
    cy.viewport(1600, 720);
  });

  afterEach(() => {});

  it('should render - controlExample1', function () {
    cy.mount(
      <SetupTestsComponents>
        <DataGridUpload
          value={[]}
          fileId={''}
          controlId={''}
          columnId={0}
          rowNum={0}
          editable={true}
          mandatory={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
  });
});
