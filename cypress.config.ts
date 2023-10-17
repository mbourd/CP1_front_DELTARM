import { defineConfig } from 'cypress';

// Default environment variables
const EnvConfig = {
  url_cp1_back: 'https://controle-api-dev.deltarm.com',
  url_cp1_front: 'http://localhost:3000',
  url_v2: 'https://staging.deltarm.com',
  v2_username: '',
  v2_password: '',
  user_id: 0,
  cli_id: 8,
  context: 'CP1',
  key1_request_jwt:
    'uH)b)DlaK8O=CiSZX?xhH-$>&m,[KXHLeEzEG}4F%beZ&;xB!MPmudz~p6}Vy@*',
  key2_request_jwt:
    '.-BZ^r&|Dog*v[zG_f>_BOr-)MTR_{m[fodo(/^tU/SsG2.[*_Er-Je^cdlfjLz',
  JWT: '',
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: ['cypress/e2e/**/*.cy.ts'],
    experimentalMemoryManagement: true,
    watchForFileChanges: false,
    supportFolder: 'cypress/support',
    supportFile: 'cypress/support/e2e.ts',
    pageLoadTimeout: 6 * 60000,
    numTestsKeptInMemory: 0,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    specPattern: ['src/**/*.cy.tsx'],
    experimentalMemoryManagement: true,
    watchForFileChanges: false,
    supportFolder: 'cypress/support',
    supportFile: 'cypress/support/component.ts',
    pageLoadTimeout: 10 * 60000,
    numTestsKeptInMemory: 500,
  },

  watchForFileChanges: false,
  // video: false, // or from CLI --config video=false
  // screenshotOnRunFailure: false,
  // pageLoadTimeout: 360000,
  numTestsKeptInMemory: 500,
  // retries: 2,
  // defaultCommandTimeout: 60000,
  experimentalMemoryManagement: true,
  // chromeWebSecurity: false,

  env: EnvConfig,
});

export { EnvConfig };
