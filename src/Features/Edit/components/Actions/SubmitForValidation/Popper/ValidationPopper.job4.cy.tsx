// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/SubmitForValidation/Popper/ValidationPopper.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import { ValidationPopper } from './ValidationPopper';

describe('<ValidationPopper />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ValidationPopper />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('ValidationPopper').should('exist');
  });
});
