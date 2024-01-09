// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Comments/File/Body/FileCommentBody.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { FileCommentBody } from './FileCommentBody';
import { IFileComment } from '../../types';

describe('<FileCommentBody />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <FileCommentBody comments={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FileCommentBody').should('exist');
  });

  it('should render the correct number of <FileCommentBodyItem />', () => {
    const comment: IFileComment = {
      id: 0,
      message: '',
      date: '',
      user: '',
    };
    const comments: IFileComment[] = [comment, comment];
    cy.mount(
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
