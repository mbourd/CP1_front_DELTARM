// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/commands';

import 'cypress-react-selector';
import '../../src/Features/Manage/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp } from '../utils';

describe('File - Edition for context "CP1"', { testIsolation: false }, () => {
  let data: Record<any, any>;
  let currentUrl: string;
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  before(() => {
    cy.intercept({
      method: 'GET',
      url: Cypress.env('url_cp1_back') + '/edit?file_id=*',
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

  it('Should have the correct number of <NavItem /> "sections" and label displayed', () => {
    cy.visit(currentUrl);
    cy.getAllLocalStorage().then(function (localStorage) {
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') this.skip();

      cy.waitReactApp('main[id="main-content"]');
      cy.react('NavItem').should('have.length', data.sections.length);
      cy.react('NavItem').each(($navItem, i) => {
        cy.wrap($navItem).contains(
          new RegExp(data.sections[i].section_lib, 'gu'),
        );
        cy.wrap($navItem)
          .find('span span')
          .should('have.css', 'text-transform', 'uppercase');
      });
    });
  });

  it('Default section should have the correct number of <ContentTitle /> "chapters"', () => {
    cy.visit(currentUrl);
    cy.getAllLocalStorage().then(function (localStorage) {
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') this.skip();

      cy.waitReactApp('main[id="main-content"]');
      cy.react('ContentBody')
        .react('FormControls')
        .react('ContentTitle')
        .should('have.length', data.current_section.chapters.length);
    });
  });

  it('Each section should have the correct number of <ContentTitle /> "chapters"', function () {
    if (data.sections.length <= 1) this.skip();

    if (data.sections.length > 1) {
      for (let i = 1; i < data.sections.length; ++i) {
        const [alias1, alias2] = ['getFileData' + i, '@getFileData' + i];
        cy.intercept({
          method: 'GET',
          url: Cypress.env('url_cp1_back') + '/edit?file_id=*&section_id=*',
        }).as(alias1);
        cy.visit(currentUrl);
        cy.getAllLocalStorage().then(function (localStorage) {
          const jwt: Record<string, any> = JwtDecode(
            JSON.parse(
              localStorage[Cypress.env('url_cp1_front')]['security'] as string,
            )._jwt,
          );

          if (jwt.context !== 'CP1') this.skip();

          cy.waitReactApp('main[id="main-content"]');
          cy.react('NavItem').eq(i).click();
          cy.wait(alias2).then((interception) => {
            data = interception.response?.body.data;
            cy.react('ContentBody')
              .react('FormControls')
              .react('ContentTitle')
              .should('have.length', data.current_section.chapters.length);
          });
        });
      }
    }
  });

  it('Each section should have <FileComment /> & <FileAudit />', function () {
    if (data.sections.length === 0) this.skip();

    for (let i = 0; i < data.sections.length; ++i) {
      const [alias1, alias2] = ['getFileData' + i, '@getFileData' + i];
      cy.intercept({
        method: 'GET',
        url:
          Cypress.env('url_cp1_back') +
          `/edit?file_id=*${i === 0 ? '' : '&section_id=*'}`,
      }).as(alias1);
      cy.visit(currentUrl);
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'CP1') this.skip();

        cy.waitReactApp('main[id="main-content"]');
        cy.react('NavItem').eq(i).click();
        cy.wait(alias2).then((interception) => {
          data = interception.response?.body.data;
          cy.react('ContentBody')
            .get('.icon-container')
            .should('have.length', 2)
            .should('be.visible');

          if (Cypress.$('.icon-container svg.comment-icon').length) {
            cy.react('ContentBody')
              .get('.icon-container')
              .find('svg.comment-icon')
              .should('be.visible');

            cy.react('ContentBody')
              .get('.icon-container')
              .find('svg.comment-icon')
              .click();
            cy.get('[role="tooltip"]._Popper').should('be.visible');
            cy.get('[role="tooltip"]._Popper').clickOutside();
            cy.get('[role="tooltip"]._Popper').should('not.exist');
          }

          if (Cypress.$('.icon-container svg.audit-icon').length) {
            cy.react('ContentBody')
              .get('.icon-container')
              .find('svg.audit-icon')
              .should('be.visible');

            cy.react('ContentBody')
              .get('.icon-container')
              .find('svg.audit-icon')
              .click();
            cy.get('[role="tooltip"]._Popper').should('be.visible');
            cy.get('[role="tooltip"]._Popper').clickOutside();
            cy.get('[role="tooltip"]._Popper').should('not.exist');
          }
        });
      });
    }
  });
});
