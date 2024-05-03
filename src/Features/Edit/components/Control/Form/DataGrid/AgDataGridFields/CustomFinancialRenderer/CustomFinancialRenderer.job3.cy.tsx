// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomFinancialRenderer/CustomFinancialRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { CustomFinancialRenderer } from './CustomFinancialRenderer';

describe('<CustomFinancialRenderer />', () => {
  it('should render', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').should('exist');
  });

  it('should render the value', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').contains('6');
  });

  it('should not format decimal digit', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer')
      .invoke('text')
      .and('match', new RegExp(/^-?\d+$/g));
  });
  it('should not format decimal digit', () => {
    const props = {
      column: { colDef: { decimal_digit: 0 }, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer')
      .invoke('text')
      .and('match', new RegExp(/^-?\d+$/g));
  });

  it('should format decimal digit', () => {
    const decimalDigit = 2;
    const props = {
      column: { colDef: { decimal_digit: decimalDigit }, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer')
      .invoke('text')
      .and('match', new RegExp(`^-?\\d+\\.(\\d+){${decimalDigit}}$`, 'g'));
  });

  it('should display the currency $', () => {
    const currency = '$';
    const props = {
      column: { colDef: { currency_symbol: currency }, getId: () => 'a.b' },
      value: '23',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').contains(currency);
  });

  it('should display the default currency', () => {
    const currency = null;
    const props = {
      column: { colDef: { currency_symbol: currency }, getId: () => 'a.b' },
      value: '23',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').find('svg');
  });
  it('should display the default currency', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '23',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').find('svg');
  });
});
