// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Loaders/TextShineLoader/TextShineLoader.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { TextShineLoader } from './TextShineLoader';

describe('<TextShineLoader />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <TextShineLoader text="Loading..." />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('TextShineLoader').should('exist');
    cy.react('TextShineLoader').contains('Loading...');
  });
});
