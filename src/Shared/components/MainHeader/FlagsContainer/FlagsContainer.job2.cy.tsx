// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/MainHeader/FlagsContainer/FlagsContainer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';
import { _translate } from '../../../../../cypress/utils';

import { FlagsContainer } from './FlagsContainer';
import '../../../../Shared/components/MainHeader/translations';

describe('<FlagsContainer />', () => {
  it('should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <FlagsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FlagsContainer');
  });

  it('Should have title attribute for french and english', () => {
    const langs = ['french', 'english'];

    cy.mount(
      <SetupTestsComponents>
        <FlagsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FlagsContainer')
      .react('BPITooltip')
      .each(($el, i) => {
        const lang = langs[i];
        const transEN = _translate('en', 'MainHeader', lang) || lang;
        const transFR = _translate('fr', 'MainHeader', lang) || lang;
        const transDE = _translate('de', 'MainHeader', lang) || lang;
        const translations = [transEN, transFR, transDE];

        cy.wrap($el)
          .should('have.attr', 'title')
          .and('match', new RegExp(translations.join('|'), 'gu'));
        cy.wrap($el).trigger('mouseover');
        cy.get('[role="tooltip"]').should('exist').should('be.visible');
        cy.wrap($el).trigger('mouseout');
        cy.get('[role="tooltip"]').should('not.exist');
      });
  });
});
