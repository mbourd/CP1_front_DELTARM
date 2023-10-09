/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import '../support/commands';
import '../../src/Features/Manage/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp, _getEnv } from '../utils';
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

        if (jwt.context === 'contr_perm') this.skip();

        cy.visit(_getEnv('url_cp1_front'));
        cy.waitReactApp('#main-header');
        cy.get('#main-header').find('svg.menu-icon').click();
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(2, { timeout: 1 })
          .should('be.visible'); // <FolderOpenIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(3, { timeout: 1 })
          .should('be.visible'); // <FolderOpenIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(4, { timeout: 1 })
          .should('be.visible'); // <FolderOpenIcon />
        cy.get('[role="tooltip"]._Popper')
          .find('svg')
          .eq(5, { timeout: 1 })
          .should('be.visible'); // <FolderOpenIcon />
      });
    });
  },
);
