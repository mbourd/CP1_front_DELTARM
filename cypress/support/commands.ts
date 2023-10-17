/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import {
  _chooseAClientAfterLoginForm,
  _fillLoginFormAndSubmit,
  _visitLogin,
} from '../utils';
import 'cypress-react-selector';
import 'cypress-real-events';
import 'cypress-ag-grid';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login_v2: typeof login_v2;
      waitReactApp: typeof waitReactApp;
      clickOutside: typeof clickOutside;
      formErrorShouldBeVisible(translations: string[]): void;
      formErrorMessageShouldNotMatch(translations: string[]): void;
      typeThenWait(
        value: string,
        options?: {
          typeOptions?: Partial<Cypress.TypeOptions>;
          triggers?: Partial<
            Record<
              'change' | 'blur',
              { exec: boolean; options?: Record<string, any> }
            >
          >;
        },
      ): void;
      // login(email: string, password: string): Chainable<void>;
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      // dismiss(
      //   subject: string,
      //   options?: Partial<TypeOptions>,
      // ): Chainable<Element>;
      // visit(
      //   originalFn: CommandOriginalFn,
      //   url: string,
      //   options: Partial<VisitOptions>,
      // ): Chainable<Element>;
    }
  }
}

// const LOCAL_STORAGE_MEMORY = {};
// // @ts-ignore
// Cypress.Commands.add('saveLocalStorage', () => {
//   Object.keys(localStorage).forEach((key) => {
//     LOCAL_STORAGE_MEMORY[key] = localStorage[key];
//   });
// });
// // @ts-ignore
// Cypress.Commands.add('restoreLocalStorage', () => {
//   Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
//     localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
//   });
// });

function login_v2(
  client = 'Groupe ABC',
  u = Cypress.env('v2_username'),
  p = Cypress.env('v2_password'),
) {
  _visitLogin();
  _fillLoginFormAndSubmit(u, p);
  _chooseAClientAfterLoginForm(client);
  cy.contains('Accueil');
  cy.contains(client);
}
Cypress.Commands.add('login_v2', login_v2);

function waitReactApp(selector = '#root', timeout = 10000) {
  cy.get(selector as any, { timeout });
  cy.waitForReact(10000, selector as any);
  cy.wait(255);
}
Cypress.Commands.add('waitReactApp', waitReactApp);

function clickOutside(): Cypress.Chainable<any> {
  return cy.get('html').click(0, 0);
}
Cypress.Commands.add('clickOutside', clickOutside);

function formErrorShouldBeVisible(
  subject: JQuery<HTMLElement>,
  translations: string[],
) {
  cy.wrap(subject)
    .find('._FormError')
    .should('be.visible')
    .invoke('text')
    .should('match', new RegExp(translations.join('|'), 'gu'));
}
Cypress.Commands.add(
  'formErrorShouldBeVisible',
  { prevSubject: true },
  formErrorShouldBeVisible,
);

function formErrorMessageShouldNotMatch(
  subject: JQuery<HTMLElement>,
  translations: string[],
) {
  cy.wrap(subject).within(($compo) => {
    if ($compo.find('._FormError').length) {
      cy.wrap($compo)
        .find('._FormError')
        .invoke('text')
        .should('not.match', new RegExp(translations.join('|'), 'gu'));
    }
  });
}
Cypress.Commands.add(
  'formErrorMessageShouldNotMatch',
  { prevSubject: true },
  formErrorMessageShouldNotMatch,
);

function typeThenWait(
  subject: JQuery<HTMLElement>,
  value: string,
  options?: {
    typeOptions?: Partial<Cypress.TypeOptions>;
    triggers?: Partial<
      Record<
        'change' | 'blur',
        { exec: boolean; options?: Record<string, any> }
      >
    >;
  },
) {
  cy.wrap(subject).type(value, options?.typeOptions);

  if (options?.triggers) {
    for (const trigger in options?.triggers) {
      switch (trigger) {
        case 'change':
          if (options?.triggers[trigger]?.exec)
            cy.wrap(subject).trigger(
              trigger,
              options?.triggers[trigger]?.options,
            );
          break;
        case 'blur':
          if (options?.triggers[trigger]?.exec)
            cy.wrap(subject).blur(options?.triggers[trigger]?.options);
          break;
        default:
          break;
      }
    }
  }

  cy.wait(250);
  cy.wait(250);
}
Cypress.Commands.add('typeThenWait', { prevSubject: true }, typeThenWait);
