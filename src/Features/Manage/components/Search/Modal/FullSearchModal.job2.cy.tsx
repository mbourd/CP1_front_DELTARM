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
});
