// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/Maintenance/Maintenance.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { Maintenance } from './Maintenance';

describe('<Maintenance />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Maintenance />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Maintenance').should('exist');
  });
});
