// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomIntegerRenderer/CustomIntegerRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import { CustomIntegerRenderer } from './CustomIntegerRender';

describe('<CustomIntegerRenderer />', () => {
  it('should render', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').should('exist');
  });

  it('should render the value', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6');
  });

  it('should not format thousand separator', () => {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6000');
  });
  it('should not format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: false }, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6000');
  });

  it('should format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      value: '6000',
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6,000');
  });
});
