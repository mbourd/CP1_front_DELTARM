// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Manage/components/Search/Search.job2.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Search } from './Search';

import '../../translations';
import { _translate } from '../../../../../cypress/utils';

describe('<Search />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <Search />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Search').should('exist');
  });

  it('should render the placeholder', function () {
    const placeholder = 'my placeholder';

    cy.mount(
      <SetupTestsComponents>
        <Search placeholder={placeholder} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Search')
      .find('input[type="text"]')
      .should('have.attr', 'placeholder', placeholder);
  });

  it('should have the default placeholder', function () {
    const transFR = _translate('fr', 'Manage', 'searchPlaceholder');
    const transEN = _translate('en', 'Manage', 'searchPlaceholder');
    const transDE = _translate('de', 'Manage', 'searchPlaceholder');
    const translations = [transFR, transEN, transDE];

    cy.mount(
      <SetupTestsComponents>
        <Search />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('Search')
      .find('input[type="text"]')
      .should('have.attr', 'placeholder')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
