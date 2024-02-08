// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/SubmitForValidation/SubmitForValidation.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { SubmitForValidation } from './SubmitForValidation';
import { _translate } from '../../../../../../cypress/utils';

describe('<SubmitForValidation />', function () {
  it('should render', function () {
    cy.mount(
      <SetupTestsComponents>
        <SubmitForValidation />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SubmitForValidation').should('exist');
  });

  it('should have the correct label', function () {
    const trans_EN =
      _translate('en', 'Edit', 'submitForValidation') ||
      'submitForValidation|Soumettre à validation';
    const trans_FR =
      _translate('fr', 'Edit', 'submitForValidation') ||
      'submitForValidation|Soumettre à validation';
    const trans_DE =
      _translate('de', 'Edit', 'submitForValidation') ||
      'submitForValidation|Soumettre à validation';
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <SubmitForValidation />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SubmitForValidation')
      .find('button')
      .invoke('text')
      .should('match', new RegExp(new RegExp(translations.join('|'))));
  });
});
