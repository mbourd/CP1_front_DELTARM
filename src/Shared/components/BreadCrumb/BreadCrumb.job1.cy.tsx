// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/BreadCrumb/BreadCrumb.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import '../../../Features/Dashboard/translations';

import { BreadCrumb } from './BreadCrumb';
import { _translate } from '../../../../cypress/utils';

describe('<BreadCrumb />', () => {
  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <BreadCrumb values={[]} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb').should('exist').should('be.visible');
  });

  it('Should render for "Dashboard"', () => {
    const trans_EN = _translate(
      'en',
      'Dashboard',
      'pageTitle',
      'Tableau de bord',
    );
    const trans_FR = _translate(
      'fr',
      'Dashboard',
      'pageTitle',
      'Tableau de bord',
    );
    const trans_DE = _translate(
      'de',
      'Dashboard',
      'pageTitle',
      'Tableau de bord',
    );
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <BreadCrumb values={['Dashboard']} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
  it('Should render for "Dashboard" + "Edit"', () => {
    cy.mount(
      <SetupTestsComponents>
        <BreadCrumb values={['Dashboard', 'Edit']} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp('Edition', 'gu'));
  });
  it('Should render for "Dashboard" + "Manage"', () => {
    const trans_EN = _translate('en', 'Dashboard', 'manage', 'Gestion');
    const trans_FR = _translate('fr', 'Dashboard', 'manage', 'Gestion');
    const trans_DE = _translate('de', 'Dashboard', 'manage', 'Gestion');
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <BreadCrumb values={['Dashboard', 'Manage']} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
