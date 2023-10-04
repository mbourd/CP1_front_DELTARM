// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../../../../cypress/utils';

import { CheckboxCompliance } from './CheckboxCompliance';

describe('<CheckboxCompliance />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance');
  });

  it('should render with label', () => {
    const label = 'Hello';
    mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={label}
          checked={false}
          controlId={''}
          setIsResolved={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"] ~ span:nth-of-type(2)')
      .invoke('text')
      .then((t) => expect(t).to.be.equal(label));
  });

  it('should be checked', () => {
    mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={true}
          controlId={''}
          setIsResolved={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"]')
      .should('be.checked');
  });
  it('should not be checked', () => {
    mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
          checkedColor={'text'}
          uncheckedColor={'text'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CheckboxCompliance')
      .find('input[type="checkbox"]')
      .should('not.be.checked');
  });
});
