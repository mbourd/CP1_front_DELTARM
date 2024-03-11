// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Actions/Classify.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { Classify } from './Classify';

import '../../translations';
import { _translate } from '../../../../../cypress/utils';

describe('<Classify />', function () {
  it('should render', function () {
    const transFR = _translate('fr', 'Edit', 'classifyWithoutContinuation');
    const transEN = _translate('en', 'Edit', 'classifyWithoutContinuation');
    const transDE = _translate('dr', 'Edit', 'classifyWithoutContinuation');
    const translations = [transFR, transEN, transDE];

    cy.mount(
      <SetupTestsComponents>
        <Classify />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('Button').should('exist');
    cy.react('Button').contains(new RegExp(translations.join('|')));
  });
});
