/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
/// <reference types="./commands.d.ts" />

import 'cypress-fs';
import 'cypress-react-selector';
import 'cypress-real-events';
import 'cypress-ag-grid';
import 'cypress-wait-until';

import {
  _captureNameAndContent,
  _chooseAClientAfterLoginForm,
  _fillLoginFormAndSubmit,
  _visitLogin,
} from '../utils';

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
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login_v2: typeof login_v2;
//       waitReactApp: typeof waitReactApp;
//       reactChain(componentNames: string): Chainable<JQuery<HTMLElement>>;
//       clickOutside: typeof clickOutside;
//       formErrorShouldBeVisible(translations: string[]): void;
//       formErrorMessageShouldNotMatch(translations: string[]): void;
//       typeThenWait(
//         value: string,
//         options?: {
//           typeOptions?: Partial<Cypress.TypeOptions>;
//           triggers?: Partial<
//             Record<
//               'change' | 'blur',
//               { exec: boolean; options?: Record<string, any> }
//             >
//           >;
//         },
//       ): Chainable<JQuery<HTMLElement>>;
//       // login(email: string, password: string): Chainable<void>;
//       // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
//       // dismiss(
//       //   subject: string,
//       //   options?: Partial<TypeOptions>,
//       // ): Chainable<Element>;
//       // visit(
//       //   originalFn: CommandOriginalFn,
//       //   url: string,
//       //   options: Partial<VisitOptions>,
//       // ): Chainable<Element>;
//     }
//   }
// }

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

function waitReactApp(selector = '#main-content', timeout = 10000) {
  cy.on('uncaught:exception', (err) => {
    // Check if the error is a ChunkLoadError
    if (err.message.includes('ChunkLoadError')) {
      // // Handle the ChunkLoadError here, you can log it, retry, or perform other actions
      // // For example:
      // cy.log('ChunkLoadError occurred. Reloading the page...');
      // cy.reload(); // Reload the page to attempt to load the chunk again

      return false; // Prevent Cypress from failing the test
    }

    // If the error is not a ChunkLoadError, let Cypress handle it
    return true;
  });

  cy.get(selector as any, { timeout });
  cy.waitForReact(10000, selector as any);

  return cy.wait(0);
}
Cypress.Commands.add('waitReactApp', waitReactApp);

function clickOutside() {
  cy.get('html')
    .click(0, 0)
    .then(() => cy.wait(100));
}
Cypress.Commands.add('clickOutside', clickOutside);

function reactChain(subject: any, componentChain: string) {
  let prev = cy.get('main[id="main-content"]');

  if (subject) prev = cy.wrap(subject);

  prev.then(($prev) => {
    // Start with the body element as the root
    let rootElement: Cypress.Chainable<any> = cy.wrap($prev);

    // Split the componentChain string into individual components
    const components = componentChain
      .trim()
      .split(' ')
      .filter((c) => {
        if (c) return c;
      });

    if (components.length === 0) throw new Error('');

    // It iterates through the components in the chain, each of which can include a component name and optional methods separated by colons.
    components.forEach((component) => {
      const split = component.split(':');
      const comp = split.shift() as string;

      rootElement = rootElement.react(comp);

      // then processes any additional methods provided
      for (const method of split) {
        const { name, content } = _captureNameAndContent(method);
        rootElement = rootElement[name as string](content);
      }
    });

    // Return the final element in the chain
    return rootElement;
  });
}
Cypress.Commands.add('reactChain', { prevSubject: 'optional' }, reactChain);

function formErrorShouldBeVisible(
  subject: JQuery<HTMLElement> | void,
  translations: string[],
  selector = '._FormError',
) {
  const root = subject ? cy.wrap(subject).find(selector) : cy.get(selector);

  root
    .should('be.visible')
    .invoke('text')
    .should('match', new RegExp(translations.join('|'), 'u'));
}
Cypress.Commands.add(
  'formErrorShouldBeVisible',
  { prevSubject: ['optional'] },
  formErrorShouldBeVisible,
);

function formErrorMessageShouldNotMatch(
  subject: JQuery<HTMLElement>,
  translations: string[],
  selector = '._FormError',
) {
  cy.wrap(subject).within(($compo) => {
    if ($compo.find(selector).length) {
      cy.wrap($compo)
        .find(selector)
        .invoke('text')
        .should('not.match', new RegExp(translations.join('|'), 'u'));
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

  return cy.wrap(subject);
}
Cypress.Commands.add('typeThenWait', { prevSubject: true }, typeThenWait);

function clickAll(subject: JQuery<HTMLElement>, realClick = false) {
  cy.wrap(subject).each(($el) => {
    if (realClick) cy.wrap($el).realClick();
    else cy.wrap($el).click();
  });
}
Cypress.Commands.add('clickAll', { prevSubject: true }, clickAll);
