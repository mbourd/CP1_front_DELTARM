// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/FileComment.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { FileComment } from './FileComment';
import { IApiFileComment } from '../apiRoutes';
import { _getRandomNumberBetween } from '../../../../cypress/utils';

describe('<FileComment />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: false },
          },
        }}
      >
        <FileComment />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileComment').should('exist');
    cy.react('FileComment').find('.comment-icon').should('exist');
  });

  it('should render the number of comments', function () {
    const comments: IApiFileComment[] = Array.from({
      length: _getRandomNumberBetween(0, 6),
    }).map((v, i) => ({
      comment_id: i,
      comment_text: '',
      comment_ts: `${new Date().getTime()}`,
      comment_user_name: '',
    }));

    cy.intercept(
      {
        method: 'GET',
        url: '/comment/file?file_id=*',
      },
      (req) => {
        req.on('response', (resp) => {
          resp.send(200, { data: comments });
        });
      },
    );

    cy.mount(
      <SetupTestsComponents>
        <FileComment />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BPIBadge').should('have.text', comments.length);
  });

  it('should display a Popper when on comment icon', function () {
    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: false },
          },
        }}
      >
        <FileComment />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileComment').find('.comment-icon').realClick();
    cy.wait(3).then(() => {
      cy.react('Popper').should('exist');
    });
  });

  it('should render FileCommentBody', function () {
    const comments: IApiFileComment[] = Array.from({
      length: _getRandomNumberBetween(0, 6),
    }).map((v, i) => ({
      comment_id: i,
      comment_text: '',
      comment_ts: `${new Date().toString()}`,
      comment_user_name: '',
    }));

    cy.intercept(
      {
        method: 'GET',
        url: '/comment/file?file_id=*',
      },
      (req) => {
        req.on('response', (resp) => {
          resp.send(200, { data: comments });
        });
      },
    );

    cy.mount(
      <SetupTestsComponents>
        <FileComment />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileComment').find('.comment-icon').realClick();
    cy.wait(3).then(() => {
      cy.react('Popper').react('FileCommentBody').should('exist');
    });
  });
});
