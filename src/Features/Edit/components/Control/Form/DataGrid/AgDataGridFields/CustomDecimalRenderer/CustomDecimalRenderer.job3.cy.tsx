// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomDecimalRenderer/CustomDecimalRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { CustomDecimalRenderer } from './CustomDecimalRenderer';

describe('<CustomDecimalRenderer />', function () {
  it('Should render', function () {
    const props = {
      column: { colDef: {}, getId: () => 'a.b' },
      data: { a: {} },
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('exist');
  });

  it('Should format correctly with decimal_digit', function () {
    const props = {
      column: { colDef: { decimal_digit: 3 }, getId: () => 'a.b' },
      data: { a: {} },
      value: '19.65',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '19.650');
  });
  it('Should format correctly with decimal_digit', function () {
    const props = {
      column: { colDef: { decimal_digit: 3 }, getId: () => 'a.b' },
      data: { a: {} },
      value: '19.65986',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '19.660');
  });
  it('Should format correctly with decimal_digit', function () {
    const props = {
      column: { colDef: { decimal_digit: 7 }, getId: () => 'a.b' },
      data: { a: {} },
      value: '19.65984646546',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '19.6598465');
  });

  it('should format correctly with thousand_separator', function () {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      data: { a: {} },
      value: '19',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '19');
  });
  it('should format correctly with thousand_separator', function () {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      data: { a: {} },
      value: '2333',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '2,333');
  });
  it('should format correctly with thousand_separator', function () {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      data: { a: {} },
      value: '23333',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '23,333');
  });
  it('should format correctly with thousand_separator', function () {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      data: { a: {} },
      value: '233333',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '233,333');
  });
  it('should format correctly with thousand_separator', function () {
    const props = {
      column: { colDef: { thousand_separator: true }, getId: () => 'a.b' },
      data: { a: {} },
      value: '2233333',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '2,233,333');
  });

  it('should format correctly with thousand_separator & decimal_digit', function () {
    const props = {
      column: {
        colDef: { thousand_separator: true, decimal_digit: 3 },
        getId: () => 'a.b',
      },
      data: { a: {} },
      value: '2333.984645',
    };
    cy.mount(
      <SetupTestsComponents>
        <CustomDecimalRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDecimalRenderer').should('contain.text', '2,333.985');
  });
});
