export function _fillLoginFormAndSubmit(
  u = Cypress.env('v2_username'),
  p = Cypress.env('v2_password'),
) {
  cy.get('input[type="email"][name="_username"]').type(u);
  cy.get('input[type="password"][name="_password"]').type(p);
  cy.get('button[type="submit"]').click();
}
