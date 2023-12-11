// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

import React from 'react';
import { mount } from 'cypress/react18';

import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { NoData } from './NoData';
import { DashboardStyled } from './Dashboard.style';

describe('<NoData />', () => {
  it('Should render', () => {
    mount(
      <SetupTestsComponents>
        <NoData />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NoData').should('exist');
    cy.get(`.${DashboardStyled.styledComponentId}`).should('exist');
  });
});
