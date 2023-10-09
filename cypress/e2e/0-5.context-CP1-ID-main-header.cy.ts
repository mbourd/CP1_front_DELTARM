// @ts-check
/// <reference types="cypress" />

import '../support/commands';

import 'cypress-react-selector';
import '../../src/Shared/components/MainHeader/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp } from '../utils';

type cliInfo = {
  cli_app_name: string;
  cli_btn_faq_url: string;
  cli_btn_faq_visible: boolean;
  cli_file_name_regex: string;
  cli_id: number;
  cli_logo_url: string;
  cli_name: string;
  cli_valid_mode: string;
  file_search_placeholder: string;
};

describe('Assert interface #main-header', { testIsolation: false }, () => {
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: '/interface/nav_btn',
    }).as('interfaceNavBtn');
    cy.intercept({
      method: 'GET',
      url: '/client/info?cli_id=*',
    }).as('interfaceClientInfo');

    cy.visit(Cypress.env('url_cp1_front'));
    cy.wait(1000);
    cy.waitReactApp('#main-header');

    cy.wait('@interfaceNavBtn').then((interceptions) => {
      cy.wrap(interceptions.response?.body).as('interfaceBtnNavBody');
    });
    cy.wait('@interfaceClientInfo').then((interceptions) => {
      cy.wrap(interceptions.response?.body).as('interfaceClientInfoBody');
    });
  });

  it('Assert attr title if icon visible', () => {
    const trans_EN1 =
      getResourceTrans('en', 'MainHeader', 'reports') || 'reports';
    const trans_FR1 =
      getResourceTrans('fr', 'MainHeader', 'reports') || 'reports';
    const trans_DE1 =
      getResourceTrans('de', 'MainHeader', 'reports') || 'reports';
    const translation1 = [trans_EN1, trans_FR1, trans_DE1];
    const trans_EN2 =
      getResourceTrans('en', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const trans_FR2 =
      getResourceTrans('fr', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const trans_DE2 =
      getResourceTrans('de', 'MainHeader', 'F.A.Q') ||
      _escapeForRegExp('F.A.Q');
    const translation2 = [trans_EN2, trans_FR2, trans_DE2];
    cy.get('@interfaceBtnNavBody').then((body: Record<string, any>) => {
      const { data } = body;
      const urlAIV: string = data.interface_btn.aiv.url;
      const isVisibleAIV: boolean = data.interface_btn.aiv.visible;
      const urlFAQ: string = data.interface_btn.faq.url;
      const isVisibleFAQ: boolean = data.interface_btn.faq.visible;

      if (isVisibleAIV) {
        cy.react('IconsContainerRender')
          .find(`a[href="${urlAIV}"]`)
          .should('have.attr', 'title')
          .and('match', new RegExp(translation1.join('|'), 'gu'));
      }
      if (isVisibleFAQ) {
        cy.react('IconsContainerRender')
          .find(`a[href="${urlFAQ}"]`)
          .should('have.attr', 'title')
          .and('match', new RegExp(translation2.join('|'), 'gu'));
      }
    });
  });

  it('Assert tooltip visibility', () => {
    cy.get('@interfaceBtnNavBody').then((body: Record<string, any>) => {
      const { data } = body;
      const urlAIV: string = data.interface_btn.aiv.url;
      const isVisibleAIV: boolean = data.interface_btn.aiv.visible;
      const urlFAQ: string = data.interface_btn.faq.url;
      const isVisibleFAQ: boolean = data.interface_btn.faq.visible;

      if (isVisibleAIV) {
        cy.react('IconsContainerRender')
          .find(`a[href="${urlAIV}"]`)
          .each(($el) => {
            cy.wrap($el).trigger('mouseover');
            cy.get('[role="tooltip"]').should('exist').should('be.visible');
            cy.wrap($el).trigger('mouseout');
            cy.get('[role="tooltip"]').should('not.exist');
          });
      }
      if (isVisibleFAQ) {
        cy.react('IconsContainerRender')
          .find(`a[href="${urlFAQ}"]`)
          .each(($el) => {
            cy.wrap($el).trigger('mouseover');
            cy.get('[role="tooltip"]').should('exist').should('be.visible');
            cy.wrap($el).trigger('mouseout');
            cy.get('[role="tooltip"]').should('not.exist');
          });
      }
    });
  });

  it('Should display the correct data cli_app_name if one', () => {
    cy.get('@interfaceClientInfoBody').then((body: Record<string, any>) => {
      const data: cliInfo[] = body.data;

      if (data[0].cli_app_name) {
        cy.get('#main-header')
          .find('p.app-name')
          .should('exist')
          .should('have.text', data[0].cli_app_name);
      }
    });
  });

  it('Should display the brand logo if one', () => {
    cy.get('@interfaceClientInfoBody').then((body: Record<string, any>) => {
      const data: cliInfo[] = body.data;

      if (data[0].cli_logo_url) {
        cy.get('#main-header')
          .find('a.brand')
          .find('img')
          .should('exist')
          .should('be.visible')
          .should('have.attr', 'src', data[0].cli_logo_url);
      }
    });
  });
});
