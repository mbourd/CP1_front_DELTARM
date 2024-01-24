// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomTextAltRenderer/CustomTextAltRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

// import DOMPurify from 'dompurify';
import { CustomTextAltRenderer } from './CustomTextAltRenderer';

describe('<CustomTextAltRenderer />', function () {
  it('Should render', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: '',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer').should('exist');
  });

  it('should render the value', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer').should('have.text', props.value);
  });

  it('should render tooltip', function () {
    const hint = 'tooltip hint';
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null, hint: hint } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPITooltip').should('have.attr', 'title', hint);
    cy.react('CustomTextAltRenderer').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.wait(10).then(() => {
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
      });
    });
  });

  it('should not render tooltip', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null, hint: null } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.wait(10).then(() => {
        cy.get('[role="tooltip"]').should('not.exist');
      });
    });
  });
  it('should have the correct cursor', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: {} } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer')
      .contains(props.value)
      .should('have.css', 'cursor', 'pointer');
  });
  it('should have the correct cursor', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer')
      .contains(props.value)
      .should('have.css', 'cursor')
      .and('not.match', new RegExp('pointer'));
  });

  it('should not have html', function () {
    const value = '<p>Hello world</p>';
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: value,
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomTextAltRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomTextAltRenderer').should('not.have.html', value);
    cy.react('CustomTextAltRenderer').should('have.text', value);
  });
});
