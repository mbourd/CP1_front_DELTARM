// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Embedded/components/PointsControl/PointsControl.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { PointsControl } from './PointsControl';

describe('<PointsControl />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <PointsControl />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('PointsControl').should('exist');
    cy.react('PointsControl').should(
      'have.text',
      'Embedded CP1 content points control',
    );
  });
});
