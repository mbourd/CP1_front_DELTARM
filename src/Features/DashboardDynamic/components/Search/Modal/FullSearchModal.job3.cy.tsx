// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/Search/Modal/FullSearchModal.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FullSearchModal } from './FullSearchModal';

describe('<FullSearchModal />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('not.exist');
  });
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search="hello" />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('exist');
  });
});
