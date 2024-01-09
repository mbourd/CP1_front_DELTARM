// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainNav/MainNav.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { _requestJWT, _getEnv, _translate } from '../../../../cypress/utils';

import { MainNav } from './MainNav';
import { BrowserRouter } from 'react-router-dom';
import '../../apiRoutes';
import '../../../Shared/translations/default';
import { SecurityContext } from '../../../Services';
import { security } from '../../../Packages/Security';

describe('<MainNav />', () => {
  before(() => {
    _requestJWT();
  });

  beforeEach(() => {
    const client_info = [
      {
        cli_app_name: 'Module Formulaire - ABC',
        cli_btn_faq_url: null,
        cli_btn_faq_visible: false,
        cli_file_name_regex: null,
        cli_id: 8,
        cli_logo_url:
          'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/logo_client/delta-rm.png',
        cli_name: 'Groupe ABC',
        cli_valid_mode: 'global',
        file_search_placeholder: 'Numéro de Dossier',
      },
    ];
    const security = {
      _roles: [],
      _email: null,
      _jwt: _getEnv('JWT'),
      _lang: 'fr',
      _username: 'anon',
      _expireAt: '2023-09-02T11:49:04.000Z',
    };
    window.localStorage.setItem('client_info', JSON.stringify(client_info));
    window.localStorage.setItem('security', JSON.stringify(security));
  });

  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <MainNav />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').should('be.visible');
  });

  it('should display <Popper /> on click menu and hide when click outside', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <SecurityContext.Provider
            value={{
              user: security.getUser(),
              jwt: security.getUser().getJwt(),
              data: { context: 'CP1' },
              login: () => undefined,
              logout: () => undefined,
            }}
          >
            <MainNav />
          </SecurityContext.Provider>
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      cy.wait(1);
      cy.react('Popper').should('be.visible');
      cy.react('Popper').clickOutside();
      cy.wait(1);
      cy.react('Popper', { options: { timeout: 1 } }).should('not.exist');
    });
  });

  it('should display <ListItem /> if context "CP1"', () => {
    const transListKey = [
      'filesToBeProcessed',
      'filesInValidation',
      'rejectedFiles',
      'allFiles',
    ];
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <SecurityContext.Provider
            value={{
              user: security.getUser(),
              jwt: security.getUser().getJwt(),
              data: { context: 'CP1' },
              login: () => undefined,
              logout: () => undefined,
            }}
          >
            <MainNav />
          </SecurityContext.Provider>
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      cy.wrap($el).realClick();
      cy.wait(255);

      for (const v of transListKey) {
        const en = _translate('en', 'Default', v) || v;
        const fr = _translate('fr', 'Default', v) || v;
        const de = _translate('de', 'Default', v) || v;
        const transes = [en, fr, de];

        cy.react('Popper').contains(new RegExp(transes.join('|'), 'gu'));
      }
    });
  });

  it('should display logout', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <SecurityContext.Provider
            value={{
              user: security.getUser(),
              jwt: security.getUser().getJwt(),
              data: { context: 'CP1' },
              login: () => undefined,
              logout: () => undefined,
            }}
          >
            <MainNav />
          </SecurityContext.Provider>
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.menu-icon').each(($el) => {
      const en = _translate('en', 'Default', 'logout') || 'logout';
      const fr = _translate('fr', 'Default', 'logout') || 'logout';
      const de = _translate('de', 'Default', 'logout') || 'logout';
      const transes = [en, fr, de];

      cy.wrap($el).realClick();
      cy.wait(255);
      cy.react('Popper').contains(new RegExp(transes.join('|'), 'gu'));
    });
  });
});
