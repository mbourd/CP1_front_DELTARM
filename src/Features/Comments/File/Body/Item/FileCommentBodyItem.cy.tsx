// @ts-check
/// <reference types="cypress" />

import '../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

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
    mount(
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
    mount(
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
    mount(
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
    mount(
      <SetupTestsComponents>
        <FileCommentBodyItem comment={_comment} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBodyItem');
  });
});
