// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/DashboardDynamic.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { DashboardDynamic } from './DashboardDynamic';
import '../reducer';
import '../apiRoutes';
import { IDashboard } from './types';

describe('<DashboardDynamic />', function () {
  let dashboardDynamic1: IDashboard;

  before(() => {
    cy.fixture('dashboardDynamic-1.json').then((d) => (dashboardDynamic1 = d));
  });

  it('Should render', function () {
    cy.intercept('GET', '/dashboard/contr_perm', {
      statusCode: 200,
      body: {},
    });
    cy.mount(
      <SetupTestsComponents>
        <DashboardDynamic />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchCallState').should('exist');
  });

  it('should render card version 1 "AgGrid"', function () {
    cy.viewport(1000, 300);
    const listCard = structuredClone(
      dashboardDynamic1.data.cards?.card || [],
    ).map((card) => {
      const _card = { ...card, version: 1 };

      return _card;
    });
    const _dashboard = {
      ...structuredClone(dashboardDynamic1),
      data: {
        ...structuredClone(dashboardDynamic1.data),
        cards: {
          ...structuredClone(dashboardDynamic1.data.cards),
          card: listCard,
        },
      },
    };
    // cy.intercept(
    //   {
    //     method: 'GET',
    //     url: '/dashboard/contr_perm',
    //   },
    //   (req) => {
    //     req.on('response', (resp) => {
    //       resp.send(200, { data: { ok: 1 } });
    //     });
    //   },
    // );
    cy.intercept('GET', '/dashboard/contr_perm*', {
      statusCode: 200,
      body: _dashboard,
    });
    cy.mount(
      <SetupTestsComponents>
        <DashboardDynamic />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CardAgGrid').should('exist');
  });

  it('should render card version 0 "Old"', function () {
    cy.viewport(1000, 300);
    const listCard = structuredClone(
      dashboardDynamic1.data.cards?.card || [],
    ).map((card) => {
      const _card = { ...card, version: 0 };

      return _card;
    });
    const _dashboard = {
      ...structuredClone(dashboardDynamic1),
      data: {
        ...structuredClone(dashboardDynamic1.data),
        cards: {
          ...structuredClone(dashboardDynamic1.data.cards),
          card: listCard,
        },
      },
    };
    cy.intercept('GET', '/dashboard/contr_perm*', {
      statusCode: 200,
      body: _dashboard,
    });
    cy.mount(
      <SetupTestsComponents>
        <DashboardDynamic />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Card').should('exist');
  });
});
