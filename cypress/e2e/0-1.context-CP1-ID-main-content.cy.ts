/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';

import '../../src/Features/Manage/translations';
import '../../src/Features/Dashboard/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp } from '../utils';

describe(
  'Assert interface #main-content at path "/" if context "CP1"',
  { testIsolation: false },
  () => {
    const getResourceTrans = (lng: string, ns: string, key: string): string => {
      return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
    };
    // const j: Record<string, any> = JwtDecode(
    //   JSON.parse(localStorage['security'] as string)._jwt,
    // );
    // console.log(j);

    // if (j.context === "") { }

    it('Should render <HeadingOne /> at path "/" if context "CP1"', function () {
      cy.visit(Cypress.env('url_cp1_front'));
      cy.getAllLocalStorage().then((localStorage) => {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'CP1') this.skip();

        const transEN =
          getResourceTrans('en', 'Dashboard', 'pageTitle') || 'pageTitle';
        const transFR =
          getResourceTrans('fr', 'Dashboard', 'pageTitle') || 'pageTitle';
        const transDE =
          getResourceTrans('de', 'Dashboard', 'pageTitle') || 'pageTitle';
        const translations = [transEN, transFR, transDE];

        cy.waitReactApp('#main-content');
        cy.react('HeadingOne')
          .contains(new RegExp(translations.join('|'), 'gu'))
          .should('be.visible');
      });
    });

    it('Should render <DashboardSearch /> at path "/" if context "CP1"', function () {
      cy.visit(Cypress.env('url_cp1_front'));
      cy.getAllLocalStorage().then((localStorage) => {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );
        if (jwt.context === 'CP1') {
          cy.waitReactApp('#main-content');
          cy.react('DashboardSearch').should('exist').should('be.visible');
        } else this.skip();
      });
    });

    it('For <DashboardSearch /> at path "/" if context "CP1" Input placeholder should change if click on radio option', function () {
      cy.intercept({
        method: 'GET',
        url: '/client/info?cli_id=*',
      }).as('getClientInfo');

      cy.visit(Cypress.env('url_cp1_front'));
      cy.getAllLocalStorage().then((localStorage) => {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'CP1') this.skip();

        cy.waitReactApp('#main-content');
        cy.react('DashboardSearch').should('exist').should('be.visible');
        cy.wait('@getClientInfo').then((interception) => {
          const placeholder =
            interception.response?.body.data[0].file_search_placeholder;
          const transEN =
            getResourceTrans('en', 'Manage', 'counterpartyBorrowerOrSurname') ||
            'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
          const transFR =
            getResourceTrans('fr', 'Manage', 'counterpartyBorrowerOrSurname') ||
            'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
          const transDE =
            getResourceTrans('de', 'Manage', 'counterpartyBorrowerOrSurname') ||
            'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
          const placeholders = [transEN, transFR, transDE];
          cy.react('DashboardSearch')
            .react('Radio')
            .each(($el, i) => {
              cy.wrap($el).click();
              cy.react('DashboardSearch')
                .react('Search')
                .react('InputBase')
                .find('input[type="text"]')
                .should('have.attr', 'placeholder')
                .and(
                  'match',
                  new RegExp(
                    i > 0 ? placeholders.join('|') : placeholder,
                    'gu',
                  ),
                );
            });
          // end @getClientInfo
        });
      });
      // end it
    });
  },
);
