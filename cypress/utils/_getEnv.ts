import { EnvConfig } from '../../cypress.config';

type keyEnv = typeof EnvConfig;

function _getEnv(key: keyof keyEnv): any {
  return Cypress.env(key);
}
function _setEnv(key: keyof keyEnv | string, value: any): void {
  Cypress.env(key, value);
}

export { _getEnv, _setEnv };
