// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/Select/Body/SelectBody.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { SelectBody } from './SelectBody';

describe('<SelectBody />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <SelectBody />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SelectBody').should('exist');
  });
});
