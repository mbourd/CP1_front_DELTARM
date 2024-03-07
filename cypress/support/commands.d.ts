import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      login_v2(client?: string, user?: string, password?: string): void;
      waitReactApp(selector?: string, timeout?: number): Chainable<any>;
      reactChain(componentNames: string): Chainable<JQuery<HTMLElement>>;
      clickOutside(): void;
      formErrorShouldBeVisible(translations: string[], selector?: string): void;
      formErrorMessageShouldNotMatch(
        translations: string[],
        selector?: string,
      ): void;
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
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
