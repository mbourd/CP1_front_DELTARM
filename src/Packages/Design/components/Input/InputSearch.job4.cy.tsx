// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Input/InputSearch.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { InputSearch } from './InputSearch';

describe('<InputSearch />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <InputSearch />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('InputSearch').should('exist');
    cy.react('InputSearch').find('input').should('exist');
  });
});
