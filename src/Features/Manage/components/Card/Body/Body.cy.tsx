// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Card/Body/Body.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';
import { Body } from './Body';

describe('<Body />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Body data={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Body').should('exist').should('be.visible');
  });

  it('Should render data', () => {
    cy.mount(
      <SetupTestsComponents>
        <Body data={[{ label: 'label1', value: 'value1' }]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Body').react('FormLabel').should('exist').should('be.visible');
    cy.react('Body').react('FormText').should('exist').should('be.visible');
  });

  it('Should render the correct number of data', () => {
    cy.mount(
      <SetupTestsComponents>
        <Body
          data={[
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' },
            { label: 'label3', value: 'value3' },
          ]}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
    cy.react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
  });
});
