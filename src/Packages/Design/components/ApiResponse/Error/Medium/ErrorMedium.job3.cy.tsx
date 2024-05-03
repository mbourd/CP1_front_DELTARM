// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/Error/Medium/ErrorMedium.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { ErrorMedium } from './ErrorMedium';

describe('<ErrorMedium />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ErrorMedium />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ErrorMedium').should('exist');
  });

  it('should render the title', function () {
    cy.mount(
      <SetupTestsComponents>
        <ErrorMedium title={'Hello'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ErrorMedium').find('._ErrorTitle').should('have.text', 'Hello');
  });

  it('should render the icon', function () {
    cy.mount(
      <SetupTestsComponents>
        <ErrorMedium icon={'./hello'} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ErrorMedium').find('._ErrorIcon').should('exist');
    cy.react('ErrorMedium')
      .find('._ErrorIcon')
      .find('img._ErrorPicture')
      .should('exist');
  });
});
