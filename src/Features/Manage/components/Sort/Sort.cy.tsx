// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Sort/Sort.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Sort } from './Sort';

describe('<Sort />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Sort />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('svg').should('exist').should('be.visible');
  });
});
