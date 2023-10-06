// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { HeadingTwo } from './HeadingTwo';

describe('<HeadingTwo />', () => {
  it('should render', () => {
    const title = 'Testing';
    mount(
      <SetupTestsComponents>
        <HeadingTwo>{title}</HeadingTwo>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('HeadingTwo').should('exist');
    cy.react('HeadingTwo').contains(title);
  });
});
