// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/icons/ArrowRightIcon.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { ArrowRightIcon } from './ArrowRightIcon';

describe('<ArrowRightIcon />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <ArrowRightIcon />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('svg').should('exist');
  });
});
