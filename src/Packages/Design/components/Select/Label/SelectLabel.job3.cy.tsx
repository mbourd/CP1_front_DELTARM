// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Select/Label/SelectLabel.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { SelectLabel } from './SelectLabel';
import { _hexToRgb } from '../../../../../../cypress/utils';

describe('<SelectLabel />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel').should('exist');
  });
  it('should render without crash when open', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[]} isOpen={true} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel').should('exist');
    cy.react('SelectLabel')
      .find('button')
      .should('have.css', 'border-radius', '4px 4px 0px 0px');
  });

  it('should render the text', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[]}>Hello world</SelectLabel>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel').should('have.text', 'Hello world');
  });

  it('should have bdr applied', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[]} bdr={'10px'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel')
      .find('button')
      .should('have.css', 'border-radius', '10px');
  });

  it('should apply font_color', function () {
    const color = 'abcdef';
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[{ font_color: color }]}>
          Hello
        </SelectLabel>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel')
      .find('button')
      .should('have.css', 'color', _hexToRgb(color));
  });

  it('should apply background', function () {
    const color = 'abcdef';
    cy.mount(
      <SetupTestsComponents>
        <SelectLabel current_value_styles={[{ background: color }]}>
          Hello
        </SelectLabel>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel')
      .find('button')
      .should('have.css', 'background-color', _hexToRgb(color));
  });

  it('should trigger onClick', function () {
    let v = '';

    cy.mount(
      <SetupTestsComponents>
        <SelectLabel
          current_value_styles={[]}
          onClick={() => {
            v = 'change';
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectLabel').realClick();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1).then(() => expect(v).to.eq('change'));
  });
});
