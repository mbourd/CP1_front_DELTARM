// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/Body/Item/FileCommentBodyItem.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { FileCommentBodyItem } from './FileCommentBodyItem';
import { IFileComment } from '../../../types';

describe('<FileCommentBodyItem />', () => {
  const comment: IFileComment = {
    id: 0,
    message: '',
    date: '',
    user: '',
  };
  it('should render', () => {
    const _comment: IFileComment = {
      ...structuredClone(comment),
    };
    cy.mount(
      <SetupTestsComponents>
        <FileCommentBodyItem comment={_comment} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBodyItem').should('exist');
  });

  it('should render user and date correctly', () => {
    const user = 'Hello';
    const date = '1987-23-03';
    const _comment: IFileComment = {
      ...structuredClone(comment),
      user,
      date,
    };
    cy.mount(
      <SetupTestsComponents>
        <FileCommentBodyItem comment={_comment} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBodyItem')
      .find('.author')
      .contains(`${user} - ${date}`);
  });

  it('should render message', () => {
    const message = 'Hello';
    const _comment: IFileComment = {
      ...structuredClone(comment),
      message,
    };
    cy.mount(
      <SetupTestsComponents>
        <FileCommentBodyItem comment={_comment} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBodyItem').find('.author').parent().contains(message);
  });

  it('should render firstLetters', () => {
    const user = 'Hello';
    const _comment: IFileComment = {
      ...structuredClone(comment),
      user,
    };
    cy.mount(
      <SetupTestsComponents>
        <FileCommentBodyItem comment={_comment} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBodyItem');
  });
});
