// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/Heading/One/HeadingOne.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { HeadingOne } from './HeadingOne';

describe('<HeadingOne />', () => {
  it('should render', () => {
    const title = 'Testing';
    cy.mount(
      <SetupTestsComponents>
        <HeadingOne>{title}</HeadingOne>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('HeadingOne').should('exist');
    cy.react('HeadingOne').contains(title);
  });
});
