// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Button/Base/Button.cy.tsx"

import React from 'react';

import { Button } from './Button';
import { _hexToRgb } from '../../../../../../cypress/utils';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

describe('<Button />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Button />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Button').should('exist');
    cy.react('Button').find('button').should('exist');
  });

  it('Should have the correct bg / font color', function () {
    const cell = {
      bg_color: '#FA2350',
      font_color: '#FFBBFF',
    };
    cy.mount(
      <SetupTestsComponents>
        <Button
          style={{ backgroundColor: cell.bg_color, color: cell.font_color }}
        >
          Hello world
        </Button>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Button')
      .find('button')
      .should(
        'have.css',
        'background-color',
        _hexToRgb(cell.bg_color ? cell.bg_color : '#FFCD00'),
      )
      .should(
        'have.css',
        'color',
        _hexToRgb(cell.font_color ? cell.font_color : '#FFFFFF'),
      );
  });

  it('Should render children as text', function () {
    const children = 'HELLO WORLD';
    cy.mount(
      <SetupTestsComponents>
        <Button>{children}</Button>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Button').find('button').should('have.text', children);
  });
});
