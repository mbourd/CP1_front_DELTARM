// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

import React from 'react';
import { mount } from 'cypress/react18';

import { Button } from './Button';
import { _hexToRgb } from '../../../../../../cypress/utils';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

describe('<Button />', () => {
  it('Should render', () => {
    mount(
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
    mount(
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
    mount(
      <SetupTestsComponents>
        <Button>{children}</Button>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Button').find('button').should('have.text', children);
  });
});
