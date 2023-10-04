// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { HeadingOne } from './HeadingOne';

describe('<HeadingOne />', () => {
  it('should render', () => {
    const title = 'Testing';
    mount(
      <SetupTestsComponents>
        <HeadingOne>{title}</HeadingOne>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('HeadingOne').should('exist');
    cy.react('HeadingOne').contains(title);
  });
});
