// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/Footer/FileCommentFooter.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { FileCommentFooter } from './FileCommentFooter';
import { _escapeForRegExp, _translate } from '../../../../../cypress/utils';
import {
  EditValidationContext,
  IEditValidationContext,
} from '../../../Edit/EditValidationContext';

describe('<FileCommentFooter />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <FileCommentFooter
          addComment={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentFooter').should('exist');
  });

  it('should have placeholder with translation', function () {
    const trans_EN = _translate(
      'en',
      'Comments',
      'validateMessage',
      'Appuyez sur la touche ENTREE pour valider votre message',
    );
    const trans_FR = _translate(
      'fr',
      'Comments',
      'validateMessage',
      'Appuyez sur la touche ENTREE pour valider votre message',
    );
    const trans_DE = _translate(
      'de',
      'Comments',
      'validateMessage',
      'Appuyez sur la touche ENTREE pour valider votre message',
    );
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <FileCommentFooter
          addComment={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentFooter')
      .find('input')
      .should('have.attr', 'placeholder')
      .and('match', new RegExp(translations.join('|')));
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const contextValue: IEditValidationContext = {
      data: null,
      fileId: 'fileID454845326554',
    };
    let reqC = 0;

    cy.intercept('POST', '/comment/add\\?*', (req) => {
      reqC++;
      req.reply({ statusCode: 201, body: {} });
    }).as('saveFileComment');

    cy.mount(
      <SetupTestsComponents>
        <EditValidationContext.Provider value={contextValue}>
          <FileCommentFooter addComment={() => undefined} />
        </EditValidationContext.Provider>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentFooter')
      .find('input')
      .type('hello world')
      .type('{ENTER}');

    cy.wait('@saveFileComment').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqC).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'comment');
        cy.then(() => {
          expect(query.file_id).to.eq(contextValue.fileId);
          expect(query.comment).to.eq('hello world');
        });
      });
    });
  });
});
