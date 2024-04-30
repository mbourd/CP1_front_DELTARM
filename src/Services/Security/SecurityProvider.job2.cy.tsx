// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Services/Security/SecurityProvider.job2.cy.tsx"

import React, { useContext, useEffect } from 'react';
import { SetupTestsComponents } from '../../../cypress/utils/SetupTestsComponents';

import { SecurityContext, SecurityProvider } from './SecurityProvider';

describe('<SecurityProvider />', function () {
  it('should render without crash', function () {
    const DummyFC: React.FC<any> = () => {
      return <div>Hello</div>;
    };
    cy.mount(
      <SetupTestsComponents>
        <SecurityProvider
          security={{
            getUser: () => ({
              getJwt: () => '',
            }),
          }}
        >
          <DummyFC />
        </SecurityProvider>
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('DummyFC').should('exist');
  });

  it('should make one request at a time and payload queries not empty', function () {
    const DummyFC: React.FC<any> = () => {
      const contextVal = useContext(SecurityContext);

      useEffect(() => {
        contextVal.login('tokennnnn');
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <div>Hello</div>;
    };
    let reqCount = 0;

    cy.intercept('POST', '/session/open\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: { data: { jwt: '' } } });
    }).as('reqPostLogin');
    cy.intercept('POST', '/session/refresh', (req) => {
      req.reply({ statusCode: 200, body: { data: { jwt: '' } } });
    }).as('reqPostRefresh');

    cy.mount(
      <SetupTestsComponents>
        <SecurityProvider
          security={{
            getUser: () => ({
              getJwt: () => '',
            }),
            persistUser: () => undefined,
            decodeJwtToken: () => ({ exp: 65465321321686 }),
          }}
        >
          <DummyFC />
        </SecurityProvider>
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqPostLogin').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'token');
        cy.wrap(query).should('have.property', 'front_version');
        cy.then(() => {
          expect(query.token).to.eq('tokennnnn');
        });
      });
    });
  });
});
