// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainHeader/IconsContainer/IconsContainer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { _requestJWT, _getEnv, _translate } from '../../../../../cypress/utils';

import { IconsContainer } from './IconsContainer';
import '../../../../Shared/apiRoutes';

describe('IconsContainer', () => {
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
        <IconsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
  });

  it('Should have title tooltip for AIV', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `/interface/nav_btn`,
      },
      (req) => {
        req.on('response', (res) => {
          const defaultData = res.body.data.interface_btn;
          const _data = {
            ...defaultData,
            aiv: { ...defaultData.aiv, visible: true },
            faq: { ...defaultData.faq, visible: false },
          };

          res.send({ data: { interface_btn: _data } });
        });
      },
    ).as('defaultData');
    const trans_EN = _translate('en', 'MainHeader', 'reports');
    const trans_FR = _translate('fr', 'MainHeader', 'reports');
    const trans_DE = _translate('de', 'MainHeader', 'reports');
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <IconsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IconsContainer')
      .find('a')
      .should('have.attr', 'title')
      .and('match', new RegExp(translations.join('|'), 'gu'));
    cy.react('IconsContainerRender')
      .find('a')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });

  it('Should have title tooltip for FAQ', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `/interface/nav_btn`,
      },
      (req) => {
        req.on('response', (res) => {
          const defaultData = res.body.data.interface_btn;
          const _data = {
            ...defaultData,
            aiv: { ...defaultData.aiv, visible: false },
            faq: { ...defaultData.faq, visible: true },
          };

          res.send({ data: { interface_btn: _data } });
        });
      },
    ).as('defaultData');
    const trans_EN = _translate('en', 'MainHeader', 'F.A.Q');
    const trans_FR = _translate('fr', 'MainHeader', 'F.A.Q');
    const trans_DE = _translate('de', 'MainHeader', 'F.A.Q');
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <IconsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('IconsContainer')
      .find('a')
      .should('have.attr', 'title')
      .and('match', new RegExp(translations.join('|'), 'gu'));
    cy.react('IconsContainer')
      .find('a')
      .each(($el) => {
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
