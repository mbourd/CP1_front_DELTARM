// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/Compliance/CheckboxCompliance/CheckboxCompliance.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';

import { CheckboxCompliance } from './CheckboxCompliance';

describe('<CheckboxCompliance />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
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
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={label}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
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
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={true}
          controlId={''}
          setIsResolved={function (): void {
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
    cy.mount(
      <SetupTestsComponents>
        <CheckboxCompliance
          label={''}
          checked={false}
          controlId={''}
          setIsResolved={function (): void {
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
