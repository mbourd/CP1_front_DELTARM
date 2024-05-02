// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Search/Modal/FullSearchModal.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FullSearchModal } from './FullSearchModal';
import { IFileSearchFullResult } from '../../../apiRoutes/file';

describe('<FullSearchModal />', function () {
  it('should render without crash', function () {
    cy.intercept('GET', '/file/search_full?*', {
      statusCode: 200,
      body: { data: [] },
    });

    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('not.exist');
  });

  it('should render without crash', function () {
    cy.intercept('GET', '/file/search_full?*', {
      statusCode: 200,
      body: { data: [] },
    });

    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search="search" />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('exist');
  });

  it('should render without crash', function () {
    cy.viewport(1920, 1080);

    const data: IFileSearchFullResult[] = Array.from({ length: 3 }).map(
      (v, i) => {
        const file: IFileSearchFullResult = {
          file_avenant: 'avenant' + i,
          file_borrower: 'borrwer' + i,
          file_context: undefined,
          file_id: '' + i,
          file_num: 'num' + i,
        };

        return file;
      },
    );
    cy.intercept('GET', '/file/search_full?*', {
      statusCode: 200,
      body: { data },
    });

    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search="search" />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('FullSearchModal').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const data: IFileSearchFullResult[] = Array.from({ length: 3 }).map(
      (v, i) => {
        const file: IFileSearchFullResult = {
          file_avenant: 'avenant' + i,
          file_borrower: 'borrwer' + i,
          file_context: undefined,
          file_id: '' + i,
          file_num: 'num' + i,
        };

        return file;
      },
    );
    let reqCount = 0;

    cy.intercept('GET', '/file/search_full?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: { data } });
    }).as('reqGetFileSearchFull');

    cy.mount(
      <SetupTestsComponents>
        <FullSearchModal search="search" />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.wait('@reqGetFileSearchFull').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'search_value');
        cy.then(() => {
          expect(query.search_value).to.eq('search');
        });
      });
    });
  });
});
