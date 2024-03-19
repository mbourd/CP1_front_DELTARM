// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Select/Container/SelectContainer.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { SelectContainer } from './SelectContainer';

describe('<SelectContainer />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('._SelectContainer').should('exist');
  });
});
