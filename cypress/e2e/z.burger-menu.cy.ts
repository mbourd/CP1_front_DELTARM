// @ts-check
/// <reference types="cypress" />

import '../support/commands';

import 'cypress-react-selector';

describe('Burger Menu', { testIsolation: false }, () => {
  it('Should display menu on click', () => {
    cy.visit(Cypress.env('url_cp1_front'));
    cy.waitReactApp('#main-header');

    cy.get('svg.menu-icon').should('exist');
    cy.get('svg.menu-icon').click();
    cy.get('svg.menu-icon')
      .should('have.attr', 'class')
      .and('contain', 'active');
  });

  it('Should display the current connected user name + lastname', () => {
    cy.intercept({
      method: 'GET',
      url: '/user/info',
    }).as('getUserInfo');

    cy.visit(Cypress.env('url_cp1_front'));
    cy.waitReactApp('#main-header');
    cy.get('#main-header').find('svg.menu-icon').click();
    cy.wait('@getUserInfo').then((interception) => {
      const data = interception.response?.body.data;
      const userFirstName = data?.user_first_name;
      const userLastName = data?.user_last_name;
      cy.get('[role="tooltip"]')
        .find('nav')
        .react('ListItem')
        .nthNode(0)
        .should('contain.text', userFirstName + ' ' + userLastName);
    });
  });

  it('Should be logged out', () => {
    cy.visit(Cypress.env('url_cp1_front'));
    cy.get('main[id="main-content"]', { timeout: 10000 });
    cy.wait(1000);
    cy.waitForReact(10000, '#main-content');
    cy.react('DashboardSearch');
    cy.wait(255);
    cy.get('svg.menu-icon').click();
    cy.get('a[href="/logout"]').click();

    cy.intercept({
      method: 'GET',
      url: '/dashboard',
    }).as('getDashboard');
    cy.visit(Cypress.env('url_cp1_front'));
    cy.wait('@getDashboard').then((interception) => {
      expect(interception.response?.statusCode).to.equal(401);
    });
    cy.origin(Cypress.env('url_v2'), () => {
      cy.url().then((url) =>
        expect(url).match(new RegExp(/logout_delta\?clear_jwt=1/, 'gu')),
      );
      cy.contains("Vous venez d'être déconnecté");
    });
  });
});
