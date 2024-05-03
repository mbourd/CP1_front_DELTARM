/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';
import { _getEnv } from '../utils';

describe(
  'Assert interface #main-content at path "/" if context "contr_perm"',
  {
    testIsolation: false,
  },
  () => {
    let data: Record<any, any>;

    // before(() => {
    //   try {
    //     cy.readFile('cypress/fixtures/token-cp1.txt').then((file) => {
    //       if (file) cy.fixture('token-cp1.txt').then((data: string) => {});
    //     });
    //   } catch (e) {}
    //   // cy.fixture('token-cp1.txt').then((data: string) => {
    //   //   cp1Token = data;
    //   // });
    // });

    before(() => {
      cy.intercept({
        method: 'GET',
        url: _getEnv('url_cp1_back') + '/dashboard/contr_perm',
      }).as('getDashboardContrPerm');
      cy.visit(_getEnv('url_cp1_front'));
      cy.waitReactAppE2E('#main-content');
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        cy.wait('@getDashboardContrPerm').then((interception) => {
          const statusCode = interception.response?.statusCode;
          expect(statusCode).to.eq(200);
          data = interception.response?.body.data;
        });
      });
    });

    it('Should render <SearchBar>', () => {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        cy.react('DashboardDynamic')
          .get('.search-container')
          .should('be.visible');

        cy.react('FormControlLabel').each(($el, i) => {
          cy.wrap($el).realClick();
          cy.react('DashboardDynamic')
            .get('.search-container')
            .find('input[type="text"]')
            .should('be.visible')
            .should(
              'have.attr',
              'placeholder',
              data.search_bar.options[i].placeholder,
            );
        });
      });
    });
    it('Should render <ModalDynamic> when searching', () => {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        cy.react('DashboardDynamic')
          .get('.search-container')
          .find('input[type="text"]')
          .should('be.visible')
          .type('aaaa');
        cy.react('DashboardDynamic')
          .get('._Button')
          .contains(data.search_bar.btn_lib)
          .click();
        cy.react('DashboardDynamic').get('._Modal').should('be.visible');
        cy.react('DashboardDynamic')
          .get('._Modal')
          .find('._ModalFooter')
          .find('._Button')
          .click();
      });
    });

    it('Should render the correct number of <SwitchMetric>', function () {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        const { metrics } = data;

        if (metrics.indicator.length && metrics.visible) {
          cy.react('DashboardDynamic')
            .get('._CustomMetricProgress')
            .should('have.length', metrics.indicator.length)
            .should('be.visible');

          cy.react('DashboardDynamic')
            .get('._CustomMetricProgress')
            .parent('span')
            .next('span')
            .find('._Tooltip')
            .should('have.length', metrics.indicator.length)
            .should('be.visible');
        }
      });
    });

    it('Should render tooltips for each metric indicator', function () {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        const { metrics } = data;

        if (metrics.indicator.length && metrics.visible) {
          cy.react('DashboardDynamic')
            .get('._CustomMetricProgress')
            .each(($el, i) => {
              const hint: string = metrics.indicator[i].hint;
              cy.wrap($el).should('have.attr', 'title', hint);
              cy.wrap($el).trigger('mouseover');
              cy.get('[role="tooltip"]').should('exist').should('be.visible');
              cy.wrap($el).trigger('mouseout');
              cy.get('[role="tooltip"]').should('not.exist');
            });

          cy.react('DashboardDynamic')
            .get('._CustomMetricProgress')
            .parent('span')
            .next('span')
            .find('._Tooltip')
            .each(($el, i) => {
              const hint: string = metrics.indicator[i].info;
              cy.wrap($el).should('have.attr', 'title', hint);
              cy.wrap($el).trigger('mouseover');
              cy.get('[role="tooltip"]').should('exist').should('be.visible');
              cy.wrap($el).trigger('mouseout');
              cy.get('[role="tooltip"]').should('not.exist');
            });
        }
      });
    });

    it('Should render the correct number of <Header/>', () => {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[_getEnv('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'contr_perm') this.skip();

        const { cards } = data;

        if (cards.card.length) {
          cy.react('DashboardDynamic')
            .get('header:not(#main-header)')
            .should('have.length', cards.card.length);
          cy.react('DashboardDynamic')
            .get('header:not(#main-header)')
            .each(($el, i) => {
              cy.wrap($el).contains(cards.card[i].title.lib);
            });
        }
      });
    });

    // it('Should render the correct number of <CardAgGrid>', function () {
    //   cy.getAllLocalStorage().then(function (localStorage) {
    //     const jwt: Record<string, any> = JwtDecode(
    //       JSON.parse(
    //         localStorage[Cypress.env('url_cp1_front')]['security'] as string,
    //       )._jwt,
    //     );

    //     if (jwt.context !== 'contr_perm') this.skip();

    //     const { cards } = data;

    //     if (cards.card.length && cards.visible) {
    //       cy.react('DashboardDynamic')
    //         .get('.ag-theme-alpine')
    //         .should('have.length', cards.card.length)
    //         .should('be.visible');
    //     }
    //   });
    // });
  },
);
