// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { DashboardSearch } from './DashboardSearch';

describe('<DashboardSearch />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <DashboardSearch />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('DashboardSearch').should('exist');
  });
});
