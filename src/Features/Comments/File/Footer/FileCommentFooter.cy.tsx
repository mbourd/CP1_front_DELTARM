// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/Footer/FileCommentFooter.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { FileCommentFooter } from './FileCommentFooter';
import { _escapeForRegExp, _translate } from '../../../../../cypress/utils';

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
});
