// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Heading/Two/HeadingTwo.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { HeadingTwo } from './HeadingTwo';

describe('<HeadingTwo />', () => {
  it('should render', () => {
    const title = 'Testing';
    cy.mount(
      <SetupTestsComponents>
        <HeadingTwo>{title}</HeadingTwo>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('HeadingTwo').should('exist');
    cy.react('HeadingTwo').contains(title);
  });
});
