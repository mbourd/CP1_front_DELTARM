// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/commands';

import 'cypress-react-selector';
import '../../src/Features/Manage/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp, _getEnv } from '../utils';
import { editValidationHandlerCallback } from '../../src/Features/Edit/apiRoutes/edit';

describe('File - Edition for context "CP1"', { testIsolation: false }, () => {
  let data: Record<any, any>;
  let currentUrl: string;
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  before(() => {
    cy.intercept({
      method: 'GET',
      url: _getEnv('url_cp1_back') + '/edit?file_id=*',
    }).as('getFileData');

    cy.visit(Cypress.env('url_cp1_front'));
    cy.getAllLocalStorage().then(function (localStorage) {
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') this.skip();

      const transEN =
        getResourceTrans('en', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      const transFR =
        getResourceTrans('fr', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      const transDE =
        getResourceTrans('de', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      const translations = [transEN, transFR, transDE];
      cy.waitReactApp('main[id="main-content"]');
      cy.react('DashboardSearch')
        .react('Search')
        .react('InputBase')
        .get('input[type="text"]')
        .type('test/aa');
      cy.contains(new RegExp(translations.join('|'), 'gu')).click();

      cy.wait('@getFileData').then((interception) => {
        data = interception.response?.body.data;
        cy.url().then((url) => (currentUrl = url));
      });
    });
  });

  it('Should display <SubHeader />', () => {
    cy.visit(currentUrl);
    cy.getAllLocalStorage().then(function (localStorage) {
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') this.skip();

      cy.waitReactApp('#main-content');
      cy.react('SubHeader').should('be.visible');
      cy.wait('@getFileData').then((interception) => {
        data = editValidationHandlerCallback(
          interception.response?.body,
          'edit',
        );
        cy.react('SubHeader').contains(
          data.title
            ? data.title
            : `${data.number} &ndash; ${data.contrepartie} / ${data.productType}`,
        );
      });
    });
  });
});
