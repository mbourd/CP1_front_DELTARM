// @ts-check
/// <reference types="cypress" />

import '../support/commands';

import 'cypress-react-selector';

describe('Page route not found (CONNECTED)', { testIsolation: false }, () => {
  it('Should be redirected to a not found page', () => {
    cy.visit(
      Cypress.env('url_cp1_front') + '/qsidjqosidqocqohdfuiqshiqf/iqrdqsiodh',
    );
    cy.waitReactApp('#main-content');
    cy.react('NotFoundComponent').should('exist').should('be.visible');
  });
});
