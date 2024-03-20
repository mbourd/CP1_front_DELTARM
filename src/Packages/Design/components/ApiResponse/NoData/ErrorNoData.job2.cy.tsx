// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/NoData/ErrorNoData.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { ErrorNoData } from './ErrorNoData';

describe('<ErrorNoData />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ErrorNoData />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ErrorNoData').should('exist');
  });
});
