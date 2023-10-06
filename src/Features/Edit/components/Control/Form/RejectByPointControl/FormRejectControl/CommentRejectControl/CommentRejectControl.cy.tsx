// @ts-check
/// <reference types="cypress" />

import '../../../../../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
} from '../../../../../../../../../cypress/utils';

import { CommentRejectControl } from './CommentRejectControl';
import '../../../../../../../Edit/translations';
import { translation } from '../../../../../../../../Services';

describe('<CommentRejectControl />', () => {
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (
            value: React.SetStateAction<string | null>,
          ): void {
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
    mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (
            value: React.SetStateAction<string | null>,
          ): void {
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
    mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (
            value: React.SetStateAction<string | null>,
          ): void {
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
    const trans_EN =
      getResourceTrans('en', 'Edit', 'explainReasonRejection') ||
      'explainReasonRejection|' +
        _escapeForRegExp('Expliquer la raison du rejet');
    const trans_FR =
      getResourceTrans('fr', 'Edit', 'explainReasonRejection') ||
      'explainReasonRejection|' +
        _escapeForRegExp('Expliquer la raison du rejet');
    const trans_DE =
      getResourceTrans('de', 'Edit', 'explainReasonRejection') ||
      'explainReasonRejection|' +
        _escapeForRegExp('Expliquer la raison du rejet');
    const translations = [trans_EN, trans_FR, trans_DE];

    mount(
      <SetupTestsComponents>
        <CommentRejectControl
          setCommentValue={function (
            value: React.SetStateAction<string | null>,
          ): void {
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
