// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/DashboardDynamic.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { DashboardDynamic } from './DashboardDynamic';
import '../reducer';
import '../apiRoutes';
import { IDashboard, ISearchBarOptions } from './types';
import { Method } from 'cypress/types/net-stubbing';

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
    cy.intercept('GET', '/dashboard/contr_perm*', (req) => {
      req.reply({
        statusCode: 200,
        body: _dashboard,
      });
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
    cy.viewport(1000, 600);
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

  it('should make one request at a time and payload/queries params not empty', function () {
    const search = 'aaa';

    cy.viewport(1000, 600);
    const _dashboard = {
      ...structuredClone(dashboardDynamic1),
    };

    cy.intercept('GET', '/dashboard/contr_perm*', {
      statusCode: 200,
      body: _dashboard,
    }).as('reqGetDashboardContrPerm');

    cy.mount(
      <SetupTestsComponents>
        <DashboardDynamic />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('SearchBar')
      .find('input[type="text"]')
      .focus()
      .realType(search)
      .clickOutside();

    cy.wrap(_dashboard.data.search_bar.options).each(
      (searchBarOption: ISearchBarOptions, i) => {
        let reqCount = 0;
        cy.intercept(
          searchBarOption.action.method as Method,
          searchBarOption.action.endpoint + '*',
          (req) => {
            reqCount++;

            req.reply({ statusCode: 200, body: {} });
          },
        ).as('reqSearchVal' + i);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('label.MuiFormControlLabel-root')
          .contains(searchBarOption.lib)
          .realClick();
        cy.get('button')
          .contains(_dashboard.data.search_bar.btn_lib)
          .realClick();
        cy.wait('@reqSearchVal' + i).then((interception) => {
          const { request } = interception;
          const { query } = request;

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(500).then(() => {
            expect(reqCount).to.be.eq(1);
            cy.wrap(query)
              .should('have.property', 'value')
              .then(() => {
                expect(query.value).to.be.eq(search);
              });
          });
        });
      },
    );
  });
});
