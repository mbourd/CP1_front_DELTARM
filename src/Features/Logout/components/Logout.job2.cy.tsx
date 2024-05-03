// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Logout/components/Logout.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { Logout } from './Logout';

describe('<Logout />', function () {
  it('should render without crash', function () {
    cy.viewport(1920, 1080);
    cy.mount(
      <SetupTestsComponents>
        <Logout />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Logout').should('exist');
  });
});
