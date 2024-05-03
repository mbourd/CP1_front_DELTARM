// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Embedded/components/EmbeddedGate/EmbeddedGate.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { EmbeddedGate } from './EmbeddedGate';

describe('<EmbeddedGate />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <EmbeddedGate />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('EmbeddedGate').should('exist');
  });
  it('should render without crash not logged', function () {
    cy.mount(
      <SetupTestsComponents>
        <EmbeddedGate />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('EmbeddedGate').should('have.text', 'La connexion à CP1 a échoué');
  });
});
