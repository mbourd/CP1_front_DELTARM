// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/IsLoading.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { IsLoading } from './IsLoading';

describe('<IsLoading />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <IsLoading />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('IsLoading').should('exist');
  });
});
