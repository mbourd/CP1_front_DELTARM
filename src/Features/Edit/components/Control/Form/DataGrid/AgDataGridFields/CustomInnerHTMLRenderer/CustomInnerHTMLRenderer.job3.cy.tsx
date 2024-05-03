// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomInnerHTMLRenderer/CustomInneHTMLRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

// import DOMPurify from 'dompurify';
import { CustomInnerHTMLRenderer } from './CustomInnerHTMLRenderer';

describe('<CustomInnerHTMLRenderer />', function () {
  it('Should render', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: '',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer').should('exist');
  });

  it('should render basic string', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: 'Hello world',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer').should('have.text', props.value);
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
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.wait(10).then(() => {
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.get('[role="tooltip"]').should('have.text', hint);
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
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer').each(($el) => {
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
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer')
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
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer')
      .contains(props.value)
      .should('have.css', 'cursor')
      .and('not.match', new RegExp('pointer'));
  });

  it('should have innerhtml', function () {
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: '<p>Hello world</p>',
    };
    const fieldName = 'rdg_1';

    cy.mount(
      <SetupTestsComponents>
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer')
      .find('div')
      .should('have.html', props.value);
    cy.react('CustomInnerHTMLRenderer')
      .find('div')
      .should('not.have.text', props.value);
  });

  it('should sanitize the html string', function () {
    const dirtyStr = `<p><script>alert('This is a malicious script!');</script>Hello world</p>`;
    const props = {
      colDef: { triggerAction: () => undefined },
      data: { rdg_1: { action: null } },
      value: dirtyStr,
    };
    const fieldName = 'rdg_1';
    // const cleanStr = DOMPurify.sanitize(dirtyStr);
    const cleanStr = '<p>Hello world</p>';

    cy.mount(
      <SetupTestsComponents>
        <CustomInnerHTMLRenderer props={props} fieldName={fieldName} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomInnerHTMLRenderer')
      .find('div')
      .should('have.html', cleanStr);
  });
});
