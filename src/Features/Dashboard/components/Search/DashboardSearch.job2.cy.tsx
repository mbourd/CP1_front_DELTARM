// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { _translate } from '../../../../../cypress/utils';
import { DashboardSearch } from './DashboardSearch';
import '../../../Manage/translations';

describe('<DashboardSearch />', function () {
  const transEN_Button = _translate('en', 'Manage', 'searchButtonLabel');
  const transFR_Button = _translate('fr', 'Manage', 'searchButtonLabel');
  const transDE_Button = _translate('de', 'Manage', 'searchButtonLabel');
  const translations_Button = [transEN_Button, transFR_Button, transDE_Button];

  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <DashboardSearch />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('DashboardSearch').should('exist');
  });

  it('should make on request at a time and payload or queries not empty', function () {
    const search = 'any';
    let reqCount = 0;

    cy.intercept('GET', '/file/search?*', (req) => {
      reqCount++;
      req.on('response', (resp) => {
        resp.send({ statusCode: 404, body: {} });
      });
    }).as('reqSearchFile');

    cy.mount(
      <SetupTestsComponents>
        <DashboardSearch />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.react('Search').find('input').focus().realType(search).clickOutside();
    cy.contains(new RegExp(translations_Button.join('|'))).realClick();

    cy.wait('@reqSearchFile').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);

        cy.wrap(query)
          .should('have.property', 'file_num')
          .then(() => {
            expect(query.file_num).to.be.eq(search);
          });
      });
    });
  });
});
