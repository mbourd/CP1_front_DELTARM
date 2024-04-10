// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Packages/Design/icons/CommentIcon.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { CommentIcon } from './CommentIcon';

describe('<CommentIcon />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <CommentIcon />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.get('svg').should('exist');
  });
});
