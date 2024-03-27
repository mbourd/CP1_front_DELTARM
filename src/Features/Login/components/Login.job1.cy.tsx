// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Login/components/Login.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { Login } from './Login';

describe('<Login />', function () {
  //// TODO: unable
  // it('should render without crash', function () {
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <Login />
  //     </SetupTestsComponents>,
  //   ).waitReactApp();
  //   cy.react('Login').should('exist');
  // });
});
