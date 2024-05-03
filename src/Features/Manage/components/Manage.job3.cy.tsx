// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { Manage } from './Manage';

describe('<Manage />', function () {
  //// NOTE: Unable to test
  // beforeEach(() => {
  //   cy.on('uncaught:exception', (err) => {
  //     if (err.message.includes('Cannot access')) return false; // Prevent Cypress from failing the test
  //     return true;
  //   });
  //   const client_info = [
  //     {
  //       cli_app_name: 'Module Formulaire - ABC',
  //       cli_btn_faq_url: null,
  //       cli_btn_faq_visible: false,
  //       cli_file_name_regex: null,
  //       cli_id: 8,
  //       cli_logo_url:
  //         'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/logo_client/delta-rm.png',
  //       cli_name: 'Groupe ABC',
  //       cli_valid_mode: 'global',
  //       file_search_placeholder: 'Numéro de Dossier',
  //     },
  //   ];
  //   const security = {
  //     _roles: [],
  //     _email: null,
  //     _jwt: "_getEnv('JWT')",
  //     _lang: 'fr',
  //     _username: 'anon',
  //     _expireAt: '2023-09-02T11:49:04.000Z',
  //   };
  //   window.localStorage.setItem('client_info', JSON.stringify(client_info));
  //   window.localStorage.setItem('security', JSON.stringify(security));
  // });
  // it('should render without crash', function () {
  //   cy.mount(
  //     <SetupTestsComponents>
  //       <Manage />
  //     </SetupTestsComponents>,
  //   ).waitReactApp();
  //   cy.react('Manage').should('exist');
  // });
});
