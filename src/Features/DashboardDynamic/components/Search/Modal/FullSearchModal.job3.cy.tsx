// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/Search/Modal/FullSearchModal.job3.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FullSearchModal } from './FullSearchModal';

describe('<FullSearchModal />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('not.exist');
  });
  it('should render without crash', function () {
    cy.intercept('GET', '/file/search_full\\?*', (req) => {
      req.on('response', (resp) => resp.send({ statusCode: 200, body: {} }));
    });
    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search="hello" />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const search = 'searchh';
    let reqCount = 0;

    cy.intercept('GET', '/file/search_full\\?*', (req) => {
      reqCount++;
      req.on('response', (resp) => resp.send({ statusCode: 200, body: {} }));
    }).as('reqGetSearchResult');

    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search={search} />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetSearchResult').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'search_value');
        cy.then(() => {
          expect(query.search_value).to.eq(search);
        });
      });
    });
  });
});
