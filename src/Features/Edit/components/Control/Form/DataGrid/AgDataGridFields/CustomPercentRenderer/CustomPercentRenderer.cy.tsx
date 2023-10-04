// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../../../../../cypress/utils';

import { CustomPercentRenderer } from './CustomPercentRenderer';

describe('<CustomPercentRenderer />', () => {
  it('should render', () => {
    const props = { column: { colDef: {} } };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer');
  });

  it('Should render the value', () => {
    const props = { column: { colDef: {} }, value: '6' };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6');
  });

  it('should not format decimal digit', () => {
    const props = { column: { colDef: {} }, value: '6' };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer')
      .invoke('text')
      .and('match', new RegExp(/^(%\s)?-?\d+$/g));
  });

  it('should not format decimal digit', () => {
    const props = { column: { colDef: { decimal_digit: 0 } }, value: '6' };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer')
      .invoke('text')
      .and('match', new RegExp(/^(%\s)?-?\d+$/g));
  });

  it('should format decimal digit', () => {
    const decimalDigit = 2;
    const props = {
      column: { colDef: { decimal_digit: decimalDigit } },
      value: '6',
    };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer')
      .invoke('text')
      .and(
        'match',
        new RegExp(`^(%\\s)?-?\\d+\\.(\\d+){${decimalDigit}}$`, 'g'),
      );
  });

  it('should not format thousand separator', () => {
    const props = { column: { colDef: {} }, value: '6000' };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6000');
  });

  it('should not format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: false } },
      value: '6000',
    };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6000');
  });

  it('should format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: true } },
      value: '6000',
    };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6,000');
  });

  it('should format thousand separator + decimal digit', () => {
    const props = {
      column: { colDef: { thousand_separator: true, decimal_digit: 2 } },
      value: '6000',
    };
    mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6,000.00');
  });
});
