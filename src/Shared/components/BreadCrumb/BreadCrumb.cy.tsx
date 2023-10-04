// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme, BPIGlobalStyle } from '../../../Packages/Design';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <BreadCrumb values={[]} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <BreadCrumb values={['Dashboard']} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
  it('Should render for "Dashboard" + "Edit"', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <BreadCrumb values={['Dashboard', 'Edit']} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
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

    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <BrowserRouter>
            <BreadCrumb values={['Dashboard', 'Manage']} />
          </BrowserRouter>
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(1000, '#root');
    cy.react('BreadCrumb')
      .invoke('text')
      .and('match', new RegExp(translations.join('|'), 'gu'));
  });
});
