import './e2e';

declare global {
  namespace Cypress {
    interface Chainable {
      waitReactAppE2E(selector?: string, timeout?: number): void;
    }
  }
}
