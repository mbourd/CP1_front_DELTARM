// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/FileComment.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';
import { FileComment } from './FileComment';
import { IApiFileComment } from '../apiRoutes';
import { _getRandomNumberBetween } from '../../../../cypress/utils';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../Edit/EditValidationContext';

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

  it('should make on request at a time and payload or queries not empty', function () {
    let reqCount = 0;
    const contextValue: IEditValidationContext = {
      data: null,
      fileId: 'fileId',
    };

    cy.intercept('GET', '/comment/file?*', (req) => {
      reqCount++;
      req.on('response', (resp) => {
        resp.send(200, { data: {} });
      });
    }).as('reqCommentFile');

    cy.mount(
      <SetupTestsComponents
        appContextValue={{
          ForCompTests: {
            FileComment: { canSend: true },
          },
        }}
      >
        <EditValidationContext.Provider value={contextValue}>
          <FileComment />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.wait('@reqCommentFile').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500).then(() => {
        expect(reqCount).to.be.eq(1);

        cy.wrap(query)
          .should('have.property', 'file_id')
          .then(() => expect(query.file_id).to.be.eq(contextValue.fileId));
      });
    });
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

    cy.intercept('GET', '/comment/file?*', (req) => {
      req.on('response', (resp) => {
        resp.send(200, { data: comments });
      });
    }).as('reqGetCommentFile');

    cy.mount(
      <SetupTestsComponents>
        <FileComment />
      </SetupTestsComponents>,
    )
      .waitReactApp()
      .then(() =>
        cy
          .wait('@reqGetCommentFile')
          .then(() =>
            cy.react('BPIBadge').should('have.text', comments.length),
          ),
      );
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
      // {
      //   method: 'GET',
      //   url: '/comment/file?file_id=*',
      // },
      // (req) => {
      //   req.on('response', (resp) => {
      //     resp.send(200, { data: comments });
      //   });
      // },
      'GET',
      '/comment/file*',
      {
        statusCode: 200,
        body: { data: comments },
      },
    ).as('dataComments');

    cy.mount(
      <SetupTestsComponents>
        <FileComment />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileComment').find('.comment-icon').realClick();
    cy.wait('@dataComments').then(() => {
      cy.react('Popper').react('FileCommentBody').should('exist');
    });
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contextValue: IEditValidationContext = {
      data: null,
      fileId: 'fileID454845326554',
    };
    let reqC1 = 0;
    let reqC2 = 0;

    cy.intercept('POST', '/comment/add\\?*', (req) => {
      reqC1++;
      req.reply({ statusCode: 201, body: {} });
    }).as('saveFileComment');
    cy.intercept('GET', '/comment/file\\?*', (req) => {
      reqC2++;
      req.reply({ statusCode: 200, body: {} });
    }).as('getFileComments');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextValue}>
          <FileComment />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileComment').find('.comment-icon').realClick();
    cy.react('FileCommentFooter')
      .find('input')
      .type('hello world')
      .type('{ENTER}');

    cy.wait('@saveFileComment').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqC1).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'comment');
        cy.then(() => {
          expect(query.file_id).to.eq(contextValue.fileId);
          expect(query.comment).to.eq('hello world');
        });
      });
    });
    cy.wait('@getFileComments').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqC2).to.lte(2);
        cy.wrap(query).should('have.property', 'file_id');
        cy.then(() => {
          expect(query.file_id).to.eq(contextValue.fileId);
        });
      });
    });
  });
});
