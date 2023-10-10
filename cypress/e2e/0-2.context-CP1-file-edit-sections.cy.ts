/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/e2e';

import '../../src/Features/Edit/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp, _getEnv, _translate } from '../utils';

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

  it('Should not render mandatoryValue for section "Compliance" if has value and on blur', () => {
    cy.visit(currentUrl);

    cy.getAllLocalStorage().then(function (localStorage) {
      const _this = this;
      const jwt: Record<string, any> = JwtDecode(
        JSON.parse(
          localStorage[Cypress.env('url_cp1_front')]['security'] as string,
        )._jwt,
      );

      if (jwt.context !== 'CP1') _this.skip();

      const trans_EN =
        _translate('en', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire';
      const trans_FR =
        _translate('fr', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire';
      const trans_DE =
        _translate('de', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire';
      const translations = [trans_EN, trans_FR, trans_DE];

      cy.waitReactApp('main[id="main-content"]');
      if (
        data.sections.some((section) => section.section_lib === 'Compliance')
      ) {
        cy.intercept({
          method: 'GET',
          url: '/edit?file_id=*&section_id=*',
        }).as('getSectionData');
        cy.react('NavItem').contains('Compliance').click();
        cy.wait(1000);

        cy.wait('@getSectionData').then((interception) => {
          const { current_section } = interception.response?.body.data;

          if (current_section.chapters.length === 0) _this.skip();
          if (current_section.chapters[0].controls.length === 0) _this.skip();

          const control0 = current_section.chapters[0].controls[0];
          const isResolved = control0.compliance.compliance_resolved;

          switch (control0.control_type) {
            case 'select_list':
              if (!isResolved) {
                cy.react('SelectListControl')
                  .react('CheckboxCompliance')
                  .click();
              }

              cy.intercept({
                method: 'GET',
                url: '/control/get_compliance_values?file_id=*&elm_id=*',
              }).as('getComplianceValues');
              cy.react('SelectListControl')
                .find('.resolved-compliance')
                .click();

              cy.wait('@getComplianceValues').then((interception) => {
                const { compliance_fields } = interception.response?.body.data;

                for (const indexComplianceField in compliance_fields) {
                  const compliancefield =
                    compliance_fields[indexComplianceField];
                  switch (compliancefield.compliance_elm_type) {
                    case 'comment':
                      cy.react('CommentCompliance')
                        .find('textarea')
                        .type('aaaa')
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('CommentCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('not.exist');
                      }

                      cy.react('CommentCompliance')
                        .find('textarea')
                        .clear()
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('CommentCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('exist')
                          .invoke('text')
                          .should('match', new RegExp(translations.join('|')));
                      }
                      break;
                    case 'financial':
                      cy.react('FinancialCompliance')
                        .find('input')
                        .type('1234')
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('FinancialCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('not.exist');
                      }

                      cy.react('FinancialCompliance')
                        .find('input')
                        .clear()
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('FinancialCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('exist')
                          .invoke('text')
                          .should('match', new RegExp(translations.join('|')));
                      }
                      break;
                    case 'date':
                      cy.react('DateCompliance')
                        .find('input[type="date"]')
                        .type('2023-03-23');
                      cy.react('DateCompliance')
                        .find('input[type="date"]')
                        .trigger('change')
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('DateCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('not.exist');
                      }

                      cy.react('DateCompliance')
                        .find('input[type="date"]')
                        .clear();
                      cy.react('DateCompliance')
                        .find('input[type="date"]')
                        .invoke('attr', 'value', '');
                      cy.react('DateCompliance')
                        .find('input[type="date"]')
                        .trigger('change')
                        .blur();
                      if (compliancefield.compliance_elm_mandatory) {
                        cy.react('DateCompliance')
                          .find('._FormError', { timeout: 1 })
                          .should('exist')
                          .invoke('text')
                          .should('match', new RegExp(translations.join('|')));
                      }
                      break;

                    default:
                      break;
                  }
                }
              });
              break;

            default:
              break;
          }
        });
      }
    });
  });
});
