// @ts-check
/// <reference types="cypress" />

import '../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../cypress/utils';

import { BPITooltip } from './BPITooltip';

describe('<BPITooltip />', () => {
  it('Should render', () => {
    const title = 'Tooltip title';
    const placement = 'bottom';
    mount(
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

  it('Should have attr title', () => {
    const title = 'Tooltip title';
    const placement = 'bottom';
    mount(
      <SetupTestsComponents>
        <BPITooltip title={title} placement={placement}>
          <div id="child">Children</div>
        </BPITooltip>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.wait(1);
    cy.react('BPITooltip').should('have.attr', 'title', title);
    cy.get('#child').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[role="tooltip"]').should('exist').should('be.visible');
      cy.wrap($el).trigger('mouseout');
      cy.get('[role="tooltip"]').should('not.exist');
    });
  });
});
