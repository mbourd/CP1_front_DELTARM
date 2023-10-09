// @ts-check
/// <reference types="cypress" />

import '../support/commands';

import 'cypress-react-selector';
import 'cypress-real-events';
import { parse } from 'qs';
import { _getEnv } from '../utils';

describe('Token CP1 - Controle permanent', () => {
  let cp1Token: string;

  it('Should get CP1 - ctrl-perm token', () => {
    cy.login_v2('Klésia');
    cy.get('[data-routename="DeltaRM_Controle_Permanent_Index"]').find(
      'a[href="/ctrl-perm/"]',
    );
    cy.request('GET', _getEnv('url_v2') + '/ctrl-perm/?ajax=true')
      .as('data')
      .its('body')
      .should('have.keys', 'url')
      .then((body: { url: string }) => {
        const url = body.url;
        const { token } = parse(new URL(decodeURIComponent(url)).search, {
          ignoreQueryPrefix: true,
        });
        expect(token as string).to.not.null;
        expect(token as string).to.not.undefined;
        cy.writeFile('cypress/fixtures/token-cp1.txt', token as string);
      });
  });

  before(() => {
    cy.fixture('token-cp1.txt').then((data: string) => {
      cp1Token = data;
    });
  });

  it('Should logged to CP1 contr_perm', () => {
    cy.visit(_getEnv('url_cp1_front') + '/login?token=' + cp1Token);

    cy.intercept({
      method: 'GET',
      url: _getEnv('url_cp1_back') + '/user/info',
    }).as('getUserInfo');
    cy.wait(1000);
    cy.waitReactApp('#main-content');
    cy.react('DashboardDynamic');
    cy.wait('@getUserInfo').then((interception) => {
      const statusCode = interception.response?.statusCode;
      expect(statusCode).to.eq(200);
    });

    // cy.origin(_getEnv('url_cp1_front'), () => {
    //   cy.get('#main-header', { timeout: 10000 });
    //   cy.get('#main-content', { timeout: 10000 });
    //   cy.wait('@getUserInfo').then((interception) => {
    //     const statusCode = interception.response?.statusCode;
    //     expect(statusCode).to.eq(200);
    //   });
    // });
  });
});
