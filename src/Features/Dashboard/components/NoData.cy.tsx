// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Dashboard/components/NoData.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { NoData } from './NoData';
import { DashboardStyled } from './Dashboard.style';

describe('<NoData />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <NoData />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NoData').should('exist');
    cy.get(`.${DashboardStyled.styledComponentId}`).should('exist');
  });
});
