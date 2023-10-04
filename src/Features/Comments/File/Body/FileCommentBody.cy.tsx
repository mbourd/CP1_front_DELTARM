// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';

import { FileCommentBody } from './FileCommentBody';
import { IFileComment } from '../../types';

describe('<FileCommentBody />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <FileCommentBody comments={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBody');
  });

  it('should render the correct number of <FileCommentBodyItem />', () => {
    const comment: IFileComment = {
      id: 0,
      message: '',
      date: '',
      user: '',
    };
    const comments: IFileComment[] = [comment, comment];
    mount(
      <SetupTestsComponents>
        <FileCommentBody comments={comments} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBody')
      .react('FileCommentBodyItem')
      .should('have.length', comments.length);
  });
});
