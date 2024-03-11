// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/RejectByPointControl/FormRejectControl/CommentRejectControl/CommentRejectControl.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { _translate } from '../../../../../../../../../cypress/utils';

import { CommentRejectControl } from './CommentRejectControl';
import '../../../../../../../Edit/translations';

describe('<CommentRejectControl />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={null}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentRejectControl');
  });

  it('should render error message', () => {
    const errorMsg = 'Error msg';
    cy.mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={errorMsg}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentRejectControl').react('FormError').contains(errorMsg);
  });

  it('should not render error message', () => {
    cy.mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={null}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentRejectControl')
      .react('FormError', {
        options: { timeout: 1 },
      })
      .should('not.exist');
  });

  it('Should render input placeholder', () => {
    const trans_EN = _translate(
      'en',
      'Edit',
      'explainReasonRejection',
      'Expliquer la raison du rejet',
    );
    const trans_FR = _translate(
      'fr',
      'Edit',
      'explainReasonRejection',
      'Expliquer la raison du rejet',
    );
    const trans_DE = _translate(
      'de',
      'Edit',
      'explainReasonRejection',
      'Expliquer la raison du rejet',
    );
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (): void {
            throw new Error('Function not implemented.');
          }}
          errorMessage={null}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CommentRejectControl')
      .find('textarea')
      .should('have.attr', 'placeholder')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
