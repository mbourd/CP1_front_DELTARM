// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Shared/components/BreadCrumb/BreadCrumb.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../cypress/utils/SetupTestsComponents';

import '../../../Features/Dashboard/translations';

import { BreadCrumb } from './BreadCrumb';
import { BrowserRouter } from 'react-router-dom';
import { translation } from '../../../Services';
import { _escapeForRegExp } from '../../../../cypress/utils';

describe('<BreadCrumb />', () => {
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  it('Should render', () => {
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <BreadCrumb values={[]} />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb').should('exist').should('be.visible');
  });

  it('Should render for "Dashboard"', () => {
    const trans_EN =
      getResourceTrans('en', 'Dashboard', 'pageTitle') ||
      'pageTitle|Tableau de bord';
    const trans_FR =
      getResourceTrans('fr', 'Dashboard', 'pageTitle') ||
      'pageTitle|Tableau de bord';
    const trans_DE =
      getResourceTrans('de', 'Dashboard', 'pageTitle') ||
      'pageTitle|Tableau de bord';
    const translations = [trans_EN, trans_FR, trans_DE];
    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <BreadCrumb values={['Dashboard']} />
        </BrowserRouter>
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
        <BrowserRouter>
          <BreadCrumb values={['Dashboard', 'Edit']} />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp('Edition', 'gu'));
  });
  it('Should render for "Dashboard" + "Manage"', () => {
    const trans_EN =
      getResourceTrans('en', 'Dashboard', 'manage') || 'manage|Gestion';
    const trans_FR =
      getResourceTrans('fr', 'Dashboard', 'manage') || 'manage|Gestion';
    const trans_DE =
      getResourceTrans('de', 'Dashboard', 'manage') || 'manage|Gestion';
    const translations = [trans_EN, trans_FR, trans_DE];

    cy.mount(
      <SetupTestsComponents>
        <BrowserRouter>
          <BreadCrumb values={['Dashboard', 'Manage']} />
        </BrowserRouter>
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
