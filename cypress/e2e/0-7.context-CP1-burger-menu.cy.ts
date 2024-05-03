/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import { _getEnv } from '../utils';
import JwtDecode from 'jwt-decode';

describe(
  'Assert burger-menu other menus if context "CP1"',
  { testIsolation: false },
  () => {
    it('Should display other menus if context not contr_perm', () => {
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );
        const visibleOrNot = jwt.context !== 'CP1' ? 'not.exist' : 'be.visible';

        cy.visit(_getEnv('url_cp1_front'));
        cy.waitReactApp('#main-header');
        cy.get('#main-header').find('svg.menu-icon').click();
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(2, { timeout: 1 })
          .should(visibleOrNot); // <FolderOpenIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(3, { timeout: 1 })
          .should(visibleOrNot); // <FolderWaitingIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(4, { timeout: 1 })
          .should(visibleOrNot); // <FolderInfoIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(5, { timeout: 1 })
          .should(visibleOrNot); // <FolderIcon />
      });
    });
  },
);
