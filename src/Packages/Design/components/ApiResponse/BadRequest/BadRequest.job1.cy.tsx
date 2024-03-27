// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/components/ApiResponse/BadRequest/BadRequest.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { BadRequest } from './BadRequest';

describe('<BadRequest />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <BadRequest />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BadRequest').should('exist');
  });
});
