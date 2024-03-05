// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Loaders/StairsLoader/StairsLoader.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';
import { StairsLoader } from './StairsLoader';
import { _hexToRgb } from '../../../../../../cypress/utils';

describe('<StairsLoader />', function () {
  it('Should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <StairsLoader />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('StairsLoader').should('exist');
  });

  it('Should apply the correct bar color', function () {
    const color = '#AACCDD';
    cy.mount(
      <SetupTestsComponents>
        <StairsLoader barsColor={color} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('StairsLoader')
      .find('._LoaderStairsBar')
      .should('have.css', 'background-color', _hexToRgb(color));
  });

  it('Should apply the correct ball color', function () {
    const color = '#AACCDD';
    cy.mount(
      <SetupTestsComponents>
        <StairsLoader ballColor={color} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('StairsLoader')
      .find('._LoaderStairsBall')
      .should('have.css', 'background-color', _hexToRgb(color));
  });
});
