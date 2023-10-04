/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import '../support/commands';
import '../../src/Features/Manage/translations';
import { translation } from '../../src/Services';
import { _escapeForRegExp, _getEnv } from '../utils';

describe('Assert pages at path /manage', { testIsolation: false }, () => {
  const getResourceTrans = (lng: string, ns: string, key: string): string => {
    return _escapeForRegExp(translation.getResource(lng, ns)?.[key]);
  };

  it('Should be able to navigate to each path "/manage?state_id=*"', () => {
    const transEN =
      getResourceTrans('en', 'Manage', 'pageTitle') || 'pageTitle';
    const transFR =
      getResourceTrans('fr', 'Manage', 'pageTitle') || 'pageTitle';
    const transDE =
      getResourceTrans('de', 'Manage', 'pageTitle') || 'pageTitle';
    const translations = [transEN, transFR, transDE];

    for (let i = 0; i <= 3; i++) {
      cy.visit(
        _getEnv('url_cp1_front') + `/manage${i === 0 ? '' : '?state_id=' + i}`,
      );
      cy.waitReactAppE2E('#main-content');
      cy.react('HeadingOne')
        .contains(new RegExp(translations.join('|'), 'gu'))
        .should('be.visible')
        .should('have.length', 1);
    }
  });

  it('For <Search /> at each path "/manage?state_id=*" Input placeholder should change if click on radio option', () => {
    const transEN1 =
      getResourceTrans('en', 'Manage', 'searchPlaceholder') ||
      `searchPlaceholder|${_escapeForRegExp('N°Dossier / N°Avenant')}`;
    const transFR1 =
      getResourceTrans('fr', 'Manage', 'searchPlaceholder') ||
      `searchPlaceholder|${_escapeForRegExp('N°Dossier / N°Avenant')}`;
    const transDE1 =
      getResourceTrans('de', 'Manage', 'searchPlaceholder') ||
      `searchPlaceholder|${_escapeForRegExp('N°Dossier / N°Avenant')}`;
    const translations1 = [transEN1, transFR1, transDE1];
    const transEN2 =
      getResourceTrans('en', 'Manage', 'counterpartyBorrowerOrSurname') ||
      'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
    const transFR2 =
      getResourceTrans('fr', 'Manage', 'counterpartyBorrowerOrSurname') ||
      'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
    const transDE2 =
      getResourceTrans('de', 'Manage', 'counterpartyBorrowerOrSurname') ||
      'counterpartyBorrowerOrSurname|Contrepartie emprunteuse ou nom de famille';
    const translations2 = [transEN2, transFR2, transDE2];

    for (let i = 0; i <= 3; i++) {
      cy.visit(
        _getEnv('url_cp1_front') + `/manage${i === 0 ? '' : '?state_id=' + i}`,
      );
      cy.waitReactApp('#main-content');
      cy.get('.buttons-container .search-mode-toggle')
        .react('Radio')
        .each(($el, i) => {
          cy.wrap($el).click();
          cy.react('Search')
            .react('InputBase')
            .find('input[type="text"]')
            .should('have.attr', 'placeholder')
            .and(
              'match',
              new RegExp(
                i > 0 ? translations2.join('|') : translations1.join('|'),
                'gu',
              ),
            );
        });
    }
  });

  it('Should have Reset & Search buttons & <Filter /> at each path "/manage?state_id=*"', () => {
    const transEN1 =
      getResourceTrans('en', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const transFR1 =
      getResourceTrans('fr', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const transDE1 =
      getResourceTrans('de', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const translations1 = [transEN1, transFR1, transDE1];
    const transEN2 =
      getResourceTrans('en', 'Manage', 'searchButtonLabel') ||
      'searchButtonLabel';
    const transFR2 =
      getResourceTrans('fr', 'Manage', 'searchButtonLabel') ||
      'searchButtonLabel';
    const transDE2 =
      getResourceTrans('de', 'Manage', 'searchButtonLabel') ||
      'searchButtonLabel';
    const translations2 = [transEN2, transFR2, transDE2];

    for (let i = 0; i <= 3; i++) {
      cy.visit(
        _getEnv('url_cp1_front') + `/manage${i === 0 ? '' : '?state_id=' + i}`,
      );
      cy.waitReactApp('#main-content');
      cy.get('.buttons-container')
        .find('button')
        .contains(new RegExp(translations1.join('|'), 'gu'))
        .should('be.visible');
      cy.get('.buttons-container')
        .find('button')
        .contains(new RegExp(translations2.join('|'), 'gu'))
        .should('be.visible');
      cy.react('Paper').react('Filter').should('be.visible');
    }
  });

  it('Should display <Popper /> and contains Reset & Apply buttons when click on <Filter /> at each path "/manage?state_id=*"', () => {
    const transEN1 =
      getResourceTrans('en', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const transFR1 =
      getResourceTrans('fr', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const transDE1 =
      getResourceTrans('de', 'Manage', 'resetFilterButtonLabel') ||
      `resetFilterButtonLabel`;
    const translations1 = [transEN1, transFR1, transDE1];
    const transEN2 =
      getResourceTrans('en', 'Manage', 'applyFilter') || 'applyFilter';
    const transFR2 =
      getResourceTrans('fr', 'Manage', 'applyFilter') || 'applyFilter';
    const transDE2 =
      getResourceTrans('de', 'Manage', 'applyFilter') || 'applyFilter';
    const translations2 = [transEN2, transFR2, transDE2];
    const transEN3 =
      getResourceTrans('en', 'Manage', 'filterFolders') ||
      'filterFolders|Filtrer les dossiers';
    const transFR3 =
      getResourceTrans('fr', 'Manage', 'filterFolders') ||
      'filterFolders|Filtrer les dossiers';
    const transDE3 =
      getResourceTrans('de', 'Manage', 'filterFolders') ||
      'filterFolders|Filtrer les dossiers';
    const translations3 = [transEN3, transFR3, transDE3];

    for (let i = 0; i <= 3; i++) {
      cy.visit(
        _getEnv('url_cp1_front') + `/manage${i === 0 ? '' : '?state_id=' + i}`,
      );
      cy.waitReactApp('#main-content');
      cy.react('Paper').react('Filter').click();
      cy.get('._Popper')
        .find('section')
        .find('footer')
        .react('Button')
        .contains(new RegExp(translations1.join('|'), 'gu'))
        .should('be.visible');
      cy.get('._Popper')
        .find('section')
        .find('footer')
        .react('Button')
        .contains(new RegExp(translations2.join('|'), 'gu'))
        .should('be.visible');
      cy.get('._Popper')
        .find('section')
        .find('header.title')
        .contains(new RegExp(translations3.join('|'), 'gu'))
        .should('be.visible');
    }
  });

  it('Should display <Popper /> and then not visible if click outside at each path "/manage?state_id=*"', () => {
    for (let i = 0; i <= 3; i++) {
      cy.visit(
        _getEnv('url_cp1_front') + `/manage${i === 0 ? '' : '?state_id=' + i}`,
      );
      cy.waitReactApp('#main-content');
      cy.react('Paper').react('Filter').click();
      cy.get('._Popper').should('be.visible');
      cy.get('._Popper').clickOutside();
      cy.get('._Popper', { timeout: 1 }).should('not.exist');
    }
  });
});
