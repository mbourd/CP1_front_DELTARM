// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/icons/CheckboxIcon.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { CheckboxIcon } from './CheckboxIcon';

describe('<CheckboxIcon />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxIcon />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('svg').should('exist');
  });
});
