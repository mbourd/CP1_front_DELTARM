// @ts-check
/// <reference types="cypress" />

import '../support/commands';

import { _chooseAClientAfterLoginForm } from '../utils/_chooseAClientAfterLoginForm';
import { _fillLoginFormAndSubmit } from '../utils/_fillLoginFormAndSubmit';
import { _visitLogin } from '../utils/_visitLogin';

// describe('Login V2', () => {
//   it('Must logged in', () => {
//     _visitLogin();
//     _fillLoginFormAndSubmit();
//     cy.contains('Sélectionner un client');
//   });

//   it('Choose a client', () => {
//     // @ts-ignore
//     cy.login_v2('', '');
//   });
// });
