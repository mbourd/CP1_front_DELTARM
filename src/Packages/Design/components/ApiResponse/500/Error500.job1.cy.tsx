// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/500/Error500.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { Error500 } from './Error500';

describe('<Error500 />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Error500 />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Error500').should('exist');
  });
});
