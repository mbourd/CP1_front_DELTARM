// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { CustomFinancialRenderer } from './CustomFinancialRenderer';

describe('<CustomFinancialRenderer />', () => {
  it('should render', () => {
    const props = { column: { colDef: {} } };
    mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer');
  });

  it('should render the value', () => {
    const props = { column: { colDef: {} }, value: '6' };
    mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').contains('6');
  });

  it('should not format decimal digit', () => {
    const props = { column: { colDef: {} }, value: '6' };
    mount(
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
      column: { colDef: { decimal_digit: 0 } },
      value: '6',
    };
    mount(
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
      column: { colDef: { decimal_digit: decimalDigit } },
      value: '6',
    };
    mount(
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
      column: { colDef: { currency_symbol: currency } },
      value: '23',
    };
    mount(
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
      column: { colDef: { currency_symbol: currency } },
      value: '23',
    };
    mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').find('svg');
  });
  it('should display the default currency', () => {
    const props = {
      column: { colDef: {} },
      value: '23',
    };
    mount(
      <SetupTestsComponents>
        <CustomFinancialRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomFinancialRenderer').find('svg');
  });
});
