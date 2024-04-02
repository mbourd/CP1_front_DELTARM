// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/icons/AuditIcon.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { AuditIcon } from './AuditIcon';

describe('<AuditIcon />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <AuditIcon />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('svg').should('exist');
  });
});
