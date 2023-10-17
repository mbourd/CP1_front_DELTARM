/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/e2e';

import '../../src/Features/Edit/translations';
import { _translate } from '../utils';
import { IApiControl, IApiSection } from '../../src/Features/Edit/types';

describe(
  'File - Edition for context "CP1" - Sections : Champs Choix Multiples',
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
      cy.intercept({
        method: 'GET',
        url: Cypress.env('url_cp1_back') + '/edit?file_id=*',
      }).as('getFileData');

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
        cy.waitReactApp('main[id="main-content"]');
        cy.react('DashboardSearch')
          .react('Search')
          .react('InputBase')
          .get('input[type="text"]')
          .type('test/aa');
        cy.contains(new RegExp(translations.join('|'), 'gu')).click();

        cy.wait('@getFileData').then((interception) => {
          data = interception.response?.body.data;
          cy.url().then((url) => (currentUrl = url));
        });
      });
    });

    it('Assert mandatoryValue for section "Champs Choix Multiples"', () => {
      const sectionName = 'Champs Choix Multiples';
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

        if (
          data.sections.some(
            (section: IApiSection) => section.section_lib === sectionName,
          )
        ) {
          cy.intercept({
            method: 'GET',
            url: '/edit?file_id=*',
          }).as('getSectionData');
          cy.react('NavItem').contains(sectionName).click();
          cy.wait(1500);

          cy.wait('@getSectionData').then((interception) => {
            const { current_section } = interception.response?.body.data;
            const controlName = {
              checkbox: ['CheckboxControl', '._CheckboxContainer'],
              multiple_list: ['SelectListControl', '._Select'],
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

              const controls = {};
              for (const control of chapter.controls) {
                if (!controls?.[control.control_type]) {
                  controls[control.control_type] = [];
                }

                controls[control.control_type].push(control);
              }

              const valuesControls: any[] = Object.values(controls);
              for (const arrayControlType of valuesControls) {
                for (const indexControl in arrayControlType) {
                  const control: IApiControl = arrayControlType[indexControl];

                  if (!controlName?.[control.control_type]) continue;

                  checkVisibilityMandatoryValueAtFirst(
                    control,
                    getCyElementControl(
                      controlName[control.control_type][0],
                      indexChapter,
                      indexControl,
                    ),
                    translations_mandatoryValue,
                  );

                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .click()
                    .find('._CheckboxRadio')
                    .each(($el) => {
                      if (
                        !$el.find('input').is(':disabled') &&
                        $el.find('input').is(':checked')
                      ) {
                        cy.wrap($el).click();
                        cy.wait(1);
                        cy.wait(500);
                      }
                    });
                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .clickOutside();
                  cy.wait(1);
                  cy.wait(500);
                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .click()
                    .find('._CheckboxRadio')
                    .each(($el) => {
                      if (!$el.find('input').is(':disabled')) {
                        cy.wrap($el).click();
                        cy.wait(1);
                        cy.wait(500);
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorMessageShouldNotMatch(
                          translations_mandatoryValue,
                        );
                      }
                    });
                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .clickOutside();
                  cy.wait(1);
                  cy.wait(500);

                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .click()
                    .find('._CheckboxRadio')
                    .each(($el) => {
                      if (
                        !$el.find('input').is(':disabled') &&
                        $el.find('input').is(':checked')
                      ) {
                        cy.wrap($el).click();
                        cy.wait(1);
                        cy.wait(500);
                      }
                    });
                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .clickOutside();
                  cy.wait(1);
                  cy.wait(500);
                  if (control.control_mandatory) {
                    getCyElementControl(
                      controlName[control.control_type][0],
                      indexChapter,
                      indexControl,
                    ).formErrorShouldBeVisible(translations_mandatoryValue);
                  } else {
                    getCyElementControl(
                      controlName[control.control_type][0],
                      indexChapter,
                      indexControl,
                    ).formErrorMessageShouldNotMatch(
                      translations_mandatoryValue,
                    );
                  }
                  getCyElementControl(
                    controlName[control.control_type][0],
                    indexChapter,
                    indexControl,
                  )
                    .find(controlName[control.control_type][1])
                    .clickOutside();
                }
              }
            }
          });
        }
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

function checkVisibilityMandatoryValueAtFirst(
  control: Record<string, any>,
  cyElementControl: Cypress.Chainable<JQuery<HTMLElement>>,
  translations: string[],
) {
  cy.wait(1500);
  cy.wait(1);

  if (control.control_mandatory) {
    if (!control.control_value) {
      cyElementControl.formErrorShouldBeVisible(translations);
    } else {
      cyElementControl.formErrorMessageShouldNotMatch(translations);
    }
  }
}
