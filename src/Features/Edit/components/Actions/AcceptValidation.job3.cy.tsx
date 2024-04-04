// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/AcceptValidation.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { AcceptValidation } from './AcceptValidation';

describe('<AcceptValidation />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <AcceptValidation />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Button').should('exist');
  });
});
