export function _chooseAClientAfterLoginForm(client = 'Groupe ABC') {
  cy.get('#btn-group-client-choice').click();
  cy.contains(client).click();
  cy.contains('Valider').click();
}
