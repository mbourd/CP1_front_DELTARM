// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Card/Card.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Card } from './Card';

describe('<Card />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <Card id={'a'} color={''} data={[]} context={undefined} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist').should('be.visible');
  });

  it('Should render data', () => {
    cy.mount(
      <SetupTestsComponents>
        <Card
          id={'a'}
          color={''}
          data={[{ value: 'value1', label: 'label1' }]}
          context={undefined}
          comments={1}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card')
      .react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible');
    cy.react('Card')
      .react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible');
  });

  it('Should render the correct number of data', () => {
    cy.mount(
      <SetupTestsComponents>
        <Card
          id={'a'}
          color={''}
          data={[
            { value: 'value1', label: 'label1' },
            { value: 'value2', label: 'label2' },
            { value: 'value3', label: 'label3' },
          ]}
          context={undefined}
          comments={0}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card')
      .react('Body')
      .react('FormLabel')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
    cy.react('Card')
      .react('Body')
      .react('FormText')
      .should('exist')
      .should('be.visible')
      .should('have.length', 3);
  });
});
