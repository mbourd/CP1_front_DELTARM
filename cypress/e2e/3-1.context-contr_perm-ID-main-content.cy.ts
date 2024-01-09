/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';
import { _getEnv, _hexToRgb } from '../utils';

import {
  IDataModal,
  IElementTableModal,
} from '../../src/Features/ModalDynamic/components/types';
import { IActionButton } from '../../src/Features/DashboardDynamic/components/types';

describe(
  'Assert interface #main-content at path "/" if context "contr_perm"',
  {
    testIsolation: false,
  },
  () => {
    let data: Record<any, any>;
    let context: string;

    before(() => {
      cy.intercept({
        method: 'GET',
        url: _getEnv('url_cp1_back') + '/dashboard/contr_perm',
      }).as('getDashboardContrPerm');
      cy.visit(_getEnv('url_cp1_front'));
      cy.waitReactAppE2E('#main-content');
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        context = jwt.context;

        if (jwt.context !== 'contr_perm') this.skip();

        cy.wait('@getDashboardContrPerm').then((interception) => {
          const statusCode = interception.response?.statusCode;
          expect(statusCode).to.eq(200);
          data = interception.response?.body.data;
        });
      });
    });

    it('Should render <ModalDynamic> when searching', function () {
      if (context !== 'contr_perm') this.skip();

      cy.react('DashboardDynamic')
        .get('.search-container')
        .find('input[type="text"]')
        .should('be.visible')
        .type('aaaa');
      cy.react('DashboardDynamic')
        .get('._Button')
        .contains(data.search_bar.btn_lib)
        .click();
      cy.react('DashboardDynamic').get('._Modal').should('be.visible');
      cy.react('DashboardDynamic')
        .get('._Modal')
        .find('._ModalFooter')
        .find('._Button')
        .click();
    });

    it('Should render correctly the background / font color on buttons in <ModalDynamic> when searching', function () {
      if (context !== 'contr_perm') this.skip();

      cy.intercept({
        method: 'GET',
        url: '/contr_perm/get_search_ctrl_kl?value=*',
      }).as('dataSearch');

      cy.react('DashboardDynamic')
        .get('.search-container')
        .find('input[type="text"]')
        .should('be.visible')
        .clear()
        .type('décaissement');
      cy.react('DashboardDynamic')
        .get('._Button')
        .contains(data.search_bar.btn_lib)
        .click();
      cy.wait(2000);

      cy.wait('@dataSearch').then((interception) => {
        const data: IDataModal = interception.response?.body;
        const { content } = data;

        for (const c of content) {
          switch (c.element) {
            case 'table':
              const { value: rows } = (c as IElementTableModal).value?.row;

              cy.react('ModalDynamic')
                .find('table tr')
                .each(($tr: JQuery<HTMLTableRowElement>, i) => {
                  if (i > 0) {
                    const cells = rows[i].cell.value;
                    const indexColAction = cells.findIndex(
                      (v: {
                        type: 'btn' | 'text';
                        value?: string;
                        action: IActionButton | null;
                      }) => v?.['action'] && v?.['type'] && v['type'] === 'btn',
                    );

                    cy.wrap($tr)
                      .find('td')
                      .each(($td, ii) => {
                        const cell = rows[i].cell.value[ii];

                        if (indexColAction === ii) {
                          cy.wrap($td)
                            .react('Button')
                            .find('button')
                            .should(
                              'have.css',
                              'background-color',
                              _hexToRgb(
                                cell.bg_color ? cell.bg_color : '#FFCD00',
                              ),
                            )
                            .should(
                              'have.css',
                              'color',
                              _hexToRgb(
                                cell.font_color ? cell.font_color : '#FFFFFF',
                              ),
                            );
                        }

                        cy.wrap($td).should('have.text', cell.value);
                      });
                  }
                });
              break;
            default:
              break;
          }
        }
      });
    });
  },
);
