// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Dashboard/components/Card/Header/Header.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { Header } from './Header';
import { _hexToRgb } from '../../../../../../cypress/utils';

describe('<Header />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <Header color={''}>children</Header>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Header').should('exist');
  });

  it('should render the children as string', function () {
    cy.mount(
      <SetupTestsComponents>
        <Header color={''}>children</Header>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Header').should('have.text', 'children');
  });

  it('should have the background color applied', function () {
    const bgColor = '#eedd23';
    cy.mount(
      <SetupTestsComponents>
        <Header color={bgColor}>children</Header>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Header').should(
      'have.css',
      'background-color',
      _hexToRgb(bgColor),
    );
  });
});
