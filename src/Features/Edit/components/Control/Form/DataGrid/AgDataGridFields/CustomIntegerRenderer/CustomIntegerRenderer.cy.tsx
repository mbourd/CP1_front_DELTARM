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

import { CustomIntegerRenderer } from './CustomIntegerRender';

describe('<CustomIntegerRenderer />', () => {
  it('should render', () => {
    const props = { column: { colDef: {} } };
    mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer');
  });

  it('should render the value', () => {
    const props = { column: { colDef: {} }, value: '6' };
    mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6');
  });

  it('should not format thousand separator', () => {
    const props = { column: { colDef: {} }, value: '6000' };
    mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6000');
  });
  it('should not format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: false } },
      value: '6000',
    };
    mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6000');
  });

  it('should format thousand separator', () => {
    const props = {
      column: { colDef: { thousand_separator: true } },
      value: '6000',
    };
    mount(
      <SetupTestsComponents>
        <CustomIntegerRenderer props={props} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomIntegerRenderer').contains('6,000');
  });
});
