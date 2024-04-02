// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/icons/CheckIcon.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { CheckIcon } from './CheckIcon';

describe('<CheckIcon />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CheckIcon />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('svg').should('exist');
    // cy.get('#main-content')
    //   .find('*:not(svg):not(path)')
    //   .should('have.length', 0);
  });
});
