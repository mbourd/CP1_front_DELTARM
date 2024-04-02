// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Tooltip/BPITooltip.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { BPITooltip } from './BPITooltip';

describe('<BPITooltip />', () => {
  it('Should render', () => {
    const title = 'Tooltip title';
    const placement = 'bottom';
    cy.mount(
      <SetupTestsComponents>
        <BPITooltip title={title} placement={placement}>
          <div id="child">Children</div>
        </BPITooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPITooltip');
    cy.get('#child');
  });

  it('Should have text tooltip', () => {
    const title = 'Tooltip title';
    const placement = 'bottom';
    cy.mount(
      <SetupTestsComponents>
        <BPITooltip title={title} placement={placement}>
          <div id="child">Children</div>
        </BPITooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wait(1);
    cy.get('#child').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should('have.text', title);
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });

  it('Should have placement at bottom', () => {
    const title = 'Tooltip title';
    const placement = 'bottom';
    cy.mount(
      <SetupTestsComponents>
        <div style={{ height: '50px', display: 'block' }}></div>
        <div>
          <BPITooltip title={title} placement={placement}>
            <div id="child">Children</div>
          </BPITooltip>
        </div>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.realPress('PageUp');
    cy.get('#child').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should(
        'have.attr',
        'data-popper-placement',
        placement,
      );
      cy.wrap($el).trigger('mouseout');
    });
  });

  it('Should have placement at top', () => {
    const title = 'Tooltip title';
    const placement = 'top';
    cy.mount(
      <SetupTestsComponents>
        <div style={{ height: '50px', display: 'block' }}></div>
        <div>
          <BPITooltip title={title} placement={placement}>
            <div id="child">Children</div>
          </BPITooltip>
        </div>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.realPress('PageUp');
    cy.get('#child').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.get('[role="tooltip"]').should(
        'have.attr',
        'data-popper-placement',
        placement,
      );
    });
  });
});
