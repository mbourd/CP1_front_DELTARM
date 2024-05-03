// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Tooltip/Tooltip.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Tooltip } from './Tooltip';

describe('<Tooltip />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Tooltip title={''}>Hello world</Tooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Tooltip').should('exist');
  });
  it('should have text', function () {
    cy.mount(
      <SetupTestsComponents>
        <Tooltip title={''}>Hello world</Tooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Tooltip').should('have.text', 'Hello world');
  });
  it('should render text title tooltip', function () {
    const title = 'tite tooltip';
    cy.mount(
      <SetupTestsComponents>
        <Tooltip title={title}>Hello world</Tooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('Tooltip')
      .should('have.attr', 'aria-label', title)
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should('have.text', title);
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
