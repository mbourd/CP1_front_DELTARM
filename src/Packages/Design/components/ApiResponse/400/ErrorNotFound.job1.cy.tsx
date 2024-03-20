// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/400/ErrorNotFound.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { ErrorNotFound } from './ErrorNotFound';

describe('<ErrorNotFound />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ErrorNotFound />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ErrorNotFound').should('exist');
  });
});
