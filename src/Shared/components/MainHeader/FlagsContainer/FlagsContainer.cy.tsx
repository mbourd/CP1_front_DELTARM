// @ts-check
/// <reference types="cypress" />

import '../../../../../cypress/support/commands';

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { mount } from 'cypress/react18';
import {
  _requestJWT,
  _getEnv,
  _escapeForRegExp,
  _translate,
} from '../../../../../cypress/utils';

import { FlagsContainer } from './FlagsContainer';
import '../../../../Shared/components/MainHeader/translations';

describe('<FlagsContainer />', () => {
  it('should render', () => {
    mount(
      <SetupTestsComponents>
        <FlagsContainer />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('FlagsContainer');
  });

  it('Should have title attribute for french and english', () => {
    const langs = ['french', 'english'];

    mount(
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
