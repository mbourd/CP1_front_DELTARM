// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/NoData.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { NoData } from './NoData';

describe('<NoData />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <NoData />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NoData').should('exist');
  });
});
