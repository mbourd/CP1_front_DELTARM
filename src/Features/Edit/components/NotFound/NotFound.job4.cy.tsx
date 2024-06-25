// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/NotFound/NotFound.job4.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { _escapeForRegExp, _translate } from '../../../../../cypress/utils';

import { NotFound } from './NotFound';

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
    cy.mount(
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
    cy.mount(
      <SetupTestsComponents>
        <NotFound title={'Hello'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('NotFound').react('HeadingOne');
  });
});
