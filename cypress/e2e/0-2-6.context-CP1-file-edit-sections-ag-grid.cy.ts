/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/e2e';

import '../../src/Features/Edit/translations';
import { _translate } from '../utils';
import { IApiControl, IApiSection } from '../../src/Features/Edit/types';

describe(
  'File - Edition for context "CP1" - Sections : Champs Avancés',
  { testIsolation: false },
  () => {
    let data: Record<any, any>;
    let currentUrl: string;
    const translations_mandatoryValue = [
      _translate('en', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire',
      _translate('fr', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire',
      _translate('de', 'Edit', 'mandatoryValue') ||
        'mandatoryValue|Valeur obligatoire',
    ];

    before(() => {
      cy.visit(Cypress.env('url_cp1_front'));
      cy.getAllLocalStorage().then(function (localStorage) {
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );

        if (jwt.context !== 'CP1') this.skip();

        const transEN =
          _translate('en', 'Manage', 'searchButtonLabel') ||
          'searchButtonLabel|Lancer la recherche';
        const transFR =
          _translate('fr', 'Manage', 'searchButtonLabel') ||
          'searchButtonLabel|Lancer la recherche';
        const transDE =
          _translate('de', 'Manage', 'searchButtonLabel') ||
          'searchButtonLabel|Lancer la recherche';
        const translations = [transEN, transFR, transDE];

        cy.intercept({
          method: 'GET',
          url: Cypress.env('url_cp1_back') + '/edit?file_id=*',
        }).as('getFileData');
        cy.waitReactAppE2E('main[id="main-content"]');
        cy.react('DashboardSearch')
          .react('Search')
          .react('InputBase')
          .get('input[type="text"]')
          .type('demo/42');
        cy.contains(new RegExp(translations.join('|'), 'gu')).click();

        cy.wait('@getFileData').then((interception) => {
          data = interception.response?.body.data;
          cy.url().then((url) => (currentUrl = url));
        });
      });
    });

    it('Assert section "AG-DataGrid"', () => {
      const sectionName = 'AG-DataGrid';
      cy.visit(currentUrl);

      cy.getAllLocalStorage().then(function (localStorage) {
        const _this = this;
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[Cypress.env('url_cp1_front')]['security'] as string,
          )._jwt,
        );
        const conditions = [
          jwt.context !== 'CP1',
          !data.sections.some(
            (section: IApiSection) => section.section_lib === sectionName,
          ),
        ];

        if (conditions.some((test) => test === true)) _this.skip();

        cy.waitReactApp('main[id="main-content"]');
        cy.intercept({
          method: 'GET',
          url: '/edit?file_id=*',
        }).as('getSectionData');
        cy.react('NavItem').contains(sectionName).click();
        cy.wait(1500);

        cy.wait('@getSectionData').then((interception) => {
          const { current_section } = interception.response?.body.data;
          const controlName = {
            ag_datagrid: ['DataGridControlAgGrid'],
          };

          if (current_section.chapters.length === 0) _this.skip();

          for (const indexChapter in current_section.chapters) {
            const chapter = current_section.chapters[indexChapter];

            cy.react('ContentBody')
              .react('FormControls')
              .react('ContentTitle')
              .eq(indexChapter as any as number)
              .should('have.text', chapter.chap_lib);

            if (chapter.controls.length === 0) continue;

            const controls = chapter.controls.reduce((acc, control) => {
              if (!acc?.[control.control_type]) acc[control.control_type] = [];

              acc[control.control_type].push(control);

              return acc;
            }, {});

            for (const arrayControlType of Object.values(controls) as any[]) {
              for (const indexControl in arrayControlType) {
                const control: IApiControl = arrayControlType[indexControl];
                const columns = control.data_grid_detail?.columns || [];
                const info = controlName?.[control.control_type];

                if (!info) continue;

                getCyElementControl(info[0], indexChapter, indexControl)
                  .find('.ag-theme-alpine')
                  .within(($elAgGridTable) => {
                    if ($elAgGridTable.find('.ag-header-row').length) {
                      cy.wrap($elAgGridTable)
                        .find('.ag-header-row')
                        .find('.ag-header-cell')
                        .each(($el, i) => {
                          expect(
                            $el.find('.ag-header-cell-text').text(),
                          ).to.be.equal(
                            // @ts-ignore
                            columns[i].headerName,
                          );
                        });
                    }
                  });
                // getCyElementControl(info[0], indexChapter, indexControl)
                //   .find('.ag-theme-alpine')
                //   // .getAgGridData()
                //   // .getAgGridElements()
                //   .then((d) => {
                //     console.log(d);
                //   });
              }
            }
          }
        });
      });
    });
  },
);

function getCyElementControl(
  compo: string,
  indexChapter: any,
  indexControl: any,
): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy
    .react('FormControls')
    .react('ContentTitle')
    .eq(indexChapter as number)
    .next('.control-container')
    .react(compo)
    .eq(indexControl as number)
    .should('be.visible');
}
