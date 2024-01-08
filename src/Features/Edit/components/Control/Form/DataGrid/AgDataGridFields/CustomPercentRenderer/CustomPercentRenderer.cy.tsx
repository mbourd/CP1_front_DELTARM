// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomPercentRenderer/CustomPercentRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { CustomPercentRenderer } from './CustomPercentRenderer';

describe('<CustomPercentRenderer />', () => {
  it('should render', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer');
  });

  it('Should render the value', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6');
  });

  it('should not format decimal digit', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
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
    const props = {
      column: { colDef: { decimal_digit: 0 }, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
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
      column: { colDef: { decimal_digit: decimalDigit }, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
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
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6000');
  });

  it('should not format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: false }, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6000');
  });

  it('should format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6,000');
  });

  it('should format thousand separator + decimal digit', () => {
    const props = {
      column: {
        colDef: { thousand_separator: true, decimal_digit: 2 },
        getId: () => 'a.b',
      },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomPercentRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomPercentRenderer').contains('6,000.00');
  });
});
