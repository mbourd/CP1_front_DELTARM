// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Form/Label/FormLabel.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FormLabel } from './FormLabel';

describe('<FormLabel />', function () {
  it('shoudl render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <FormLabel />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FormLabel').should('exist');
  });
});
