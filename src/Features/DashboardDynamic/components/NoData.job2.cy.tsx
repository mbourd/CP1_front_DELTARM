// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/NoData.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { NoData } from './NoData';

describe('<NoData />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <NoData />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('NoData').should('exist');
  });
});
