// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import { parse } from 'qs';
import { _getEnv } from '../utils';

describe('Token CP1 - Groupe ABC - CP1', () => {
  let cp1Token: string;

  it('Should get CP1 token', () => {
    cy.login_v2('Groupe ABC');
    cy.get('[data-routename="DeltaRM_Cp1_Index"]').find('a[href="/ada/"]');
    cy.request('GET', _getEnv('url_v2') + '/ada/?ajax=true')
      .its('body')
      .should('have.keys', 'url')
      .then((body: { url: string }) => {
        const url = body.url;
        const { token } = parse(new URL(decodeURIComponent(url)).search, {
          ignoreQueryPrefix: true,
        });
        expect(token as string).to.not.null;
        expect(token as string).to.not.undefined;
        cp1Token = token as string;
        cy.writeFile('cypress/fixtures/token-cp1.txt', cp1Token);
      });
  });

  before(() => {
    const filePath = './cypress/fixtures/token-cp1.txt';

    cy.exec(`[ -e "${filePath}" ]`, { failOnNonZeroExit: false }).then(
      (result) => {
        if (result.code === 0) {
          // The file exists, so we can read it
          cy.readFile(filePath).then((fileContent) => {
            // Perform assertions on the file content or properties here
            cp1Token = fileContent;
          });
        }
      },
    );
    // cy.fsFileExists(filePath).then((exist) => {
    //   if (exist)
    //     cy.fixture('token-cp1.txt').then((fileContent: string) => {
    //       cp1Token = fileContent;
    //     });
    // });
  });

  it('Should logged to CP1', () => {
    cy.visit(_getEnv('url_cp1_front') + '/login?token=' + cp1Token);
    cy.intercept({
      method: 'GET',
      url: _getEnv('url_cp1_back') + '/user/info',
    }).as('getUserInfo');
    cy.wait(1000);
    cy.waitReactApp('#main-content');
    cy.react('DashboardSearch');
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
