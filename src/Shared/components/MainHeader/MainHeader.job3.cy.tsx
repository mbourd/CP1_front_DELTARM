// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainHeader/MainHeader.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import { MainHeader } from './MainHeader';
import { ISecurityProviderContext } from '../../../Services/Security/SecurityProvider';

import '../../apiRoutes';

describe('<MainHeader />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <MainHeader />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('MainHeader').should('exist');
  });

  it('should change the document title', function () {
    const secContext: ISecurityProviderContext = {
      user: undefined,
      jwt: '',
      data: {
        cli_id: 5200,
      },
      login: function (): void {
        throw new Error('Function not implemented.');
      },
      logout: function (): void {
        throw new Error('Function not implemented.');
      },
    };
    let reqCount = 0;

    cy.intercept('GET', '/client/info\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: { data: [{ cli_name: 'toto' }] } });
    }).as('getClientInfo');

    cy.mount(
      <SetupTestsComponents securityContextValue={secContext}>
        <MainHeader />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@getClientInfo').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'cli_id');
        cy.then(() => {
          expect(query.cli_id).to.eq('5200');
          cy.title().then((title) => {
            expect(title).to.eq('ADA - toto');
          });
        });
      });
    });
  });
});
