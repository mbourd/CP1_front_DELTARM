// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import 'cypress-react-selector';
import 'cypress-real-events';
import { mount } from 'cypress/react18';
import { _escapeForRegExp, _translate } from '../../../../../cypress/utils';

import { NotFound } from './NotFound';
import '../../../Edit/translations';
import '../../../../Shared/translations/default';

describe('<NotFound />', () => {
  it('should render', () => {
    const trans_EN =
      _translate('en', 'Edit', 'fileNotExists') ||
      'fileNotExists|' + _escapeForRegExp("Le dossier recherché n'existe pas");
    const trans_FR =
      _translate('fr', 'Edit', 'fileNotExists') ||
      'fileNotExists|' + _escapeForRegExp("Le dossier recherché n'existe pas");
    const trans_DE =
      _translate('de', 'Edit', 'fileNotExists') ||
      'fileNotExists|' + _escapeForRegExp("Le dossier recherché n'existe pas");
    const translations = [trans_EN, trans_FR, trans_DE];
    mount(
      <SetupTestsComponents>
        <NotFound />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NotFound')
      .react('ErrorNoData')
      .contains(new RegExp(translations.join('|'), 'gu'));
  });

  it('should render <HeadingOne /> if title', () => {
    mount(
      <SetupTestsComponents>
        <NotFound title={'Hello'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NotFound').react('HeadingOne');
  });
});
