// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';

import '../../src/Features/Manage/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp } from '../utils';

// Tests to assert searching file not found
describe('Search File ID not found', { testIsolation: false }, () => {
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  it('Should have http code 404', () => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env('url_cp1_back') + '/file/search?file_num=*',
    }).as('getFile');

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
      cy.waitReactApp('#main-content');
      cy.react('DashboardSearch');
      cy.wait(255);
      cy.react('Search')
        .react('InputBase')
        .get('input[type="text"]')
        .type('qdijqsoiqd/qsdqrzergdsfgsd');
      cy.contains(new RegExp(translations.join('|'), 'gu')).click();
      cy.wait('@getFile').then((interception) => {
        expect(interception.response?.statusCode).to.equal(404);
      });
    });
  });

  it('Should show <Modal />', () => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env('url_cp1_back') + '/file/search?file_num=*',
    }).as('getFile');

    cy.visit(Cypress.env('url_cp1_front'));
    cy.getAllLocalStorage().then(function (localStorage) {
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') this.skip();

      let transEN =
        getResourceTrans('en', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      let transFR =
        getResourceTrans('fr', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      let transDE =
        getResourceTrans('de', 'Manage', 'searchButtonLabel') ||
        'searchButtonLabel|Lancer la recherche';
      let translations = [transEN, transFR, transDE];

      cy.waitReactApp('#main-content');
      cy.react('DashboardSearch');
      cy.wait(255);
      cy.react('Search')
        .react('InputBase')
        .get('input[type="text"]')
        .type('qdijqdqdqdssoiqd/qsdqseazertaaaaead');
      cy.contains(new RegExp(translations.join('|'), 'gu')).click();
      cy.wait('@getFile').then((interception) => {
        const error_msg = interception.response?.body.error_msg;
        const btnlabel = interception.response?.body.data.btn[0].label;
        transEN =
          getResourceTrans('en', 'Manage', 'fileNotFound') ||
          'fileNotFound|Dossier introuvable !';
        transFR =
          getResourceTrans('fr', 'Manage', 'fileNotFound') ||
          'fileNotFound|Dossier introuvable !';
        transDE =
          getResourceTrans('de', 'Manage', 'fileNotFound') ||
          'fileNotFound|Dossier introuvable !';
        translations = [transEN, transFR, transDE];
        cy.react('SearchModal')
          .react('BadRequest')
          .contains(new RegExp(translations.join('|'), 'gu'));
        cy.react('SearchModal').find('p._ErrorMessage').contains(error_msg);
        cy.react('SearchModal')
          .find('button')
          .contains(btnlabel)
          .should('have.length', 1);
      });
    });
  }); // end it
});
