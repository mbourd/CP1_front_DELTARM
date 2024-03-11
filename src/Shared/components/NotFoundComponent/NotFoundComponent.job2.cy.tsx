// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/NotFoundComponent/NotFoundComponent.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { NotFoundComponent } from './NotFoundComponent';

describe('<NotFoundComponent />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <NotFoundComponent />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NotFoundComponent').should('exist');
    cy.react('NotFoundComponent').react('Error').should('exist');
  });
});
