/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />

import JwtDecode from 'jwt-decode';
import '../support/e2e';

import '../../src/Features/Edit/translations';
import { _escapeForRegExp, _getEnv, _translate } from '../utils';
import {
  IApiChapter,
  IApiControl,
  IApiSection,
} from '../../src/Features/Edit/types';
import * as RandExp from 'randexp';

describe(
  'File - Edition for context "CP1" - Section : Champs Simples',
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
        cy.waitReactAppE2E('main[id="main-content"]');
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

    it('Assert mandatoryValue for section "Champs Simples" - PART 1 (text)', () => {
      const sectionName = 'Champs Simples';
      cy.intercept({
        method: 'GET',
        url: '/edit?file_id=*',
      }).as('getSectionData');
      cy.visit(currentUrl);

      cy.getAllLocalStorage().then(function (localStorage) {
        const _this = this;
        const jwt: Record<string, any> = JwtDecode(
          JSON.parse(
            localStorage[_getEnv('url_cp1_front')]['security'] as string,
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
        cy.react('NavItem').contains(sectionName).click();
        cy.wait(1500);
        cy.wait('@getSectionData').then((interception) => {
          const { current_section } = interception.response?.body.data;
          const controlName = {
            text: ['TextControl', 'input', 'aaa'],
            comment: ['CommentControl', 'textarea', 'aaa'],
            long_text: ['LongTextControl', 'textarea', 'aaa'],
          };

          if (current_section.chapters.length === 0) _this.skip();

          for (const indexChapter in current_section.chapters) {
            const chapter: IApiChapter = current_section.chapters[indexChapter];

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

                if (!controlName?.[control.control_type]) continue;

                checkVisibilityFormErrorAtFirst(
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
                  .then(($el) => {
                    if (!$el.is(':disabled')) {
                      if (control.control_value)
                        clearAndBlurCyElement(cy.wrap($el));

                      cy.wrap($el).typeThenWait(
                        controlName[control.control_type][2],
                        { triggers: { blur: { exec: true } } },
                      );
                      getCyElementControl(
                        controlName[control.control_type][0],
                        indexChapter,
                        indexControl,
                      ).formErrorMessageShouldNotMatch(
                        translations_mandatoryValue,
                      );
                      clearAndBlurCyElement(cy.wrap($el));

                      if (control.control_mandatory)
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorShouldBeVisible(translations_mandatoryValue);
                    }
                  });
              }
            }
          }
        });
      });
    });

    it('Assert mandatoryValue for section "Champs simples" - PART 2 (number)', () => {
      const sectionName = 'Champs Simples';
      cy.intercept({
        method: 'GET',
        url: '/edit?file_id=*',
      }).as('getSectionData');
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
          data.sections.some((section) => section.section_lib === sectionName)
        ) {
          cy.react('NavItem').contains(sectionName).click();
          cy.wait(1500);

          cy.wait('@getSectionData').then((interception) => {
            const { current_section } = interception.response?.body.data;
            const controlName = {
              integer: ['IntegerControl', 'input', '233'],
              decimal: ['DecimalControl', 'input', '233'],
              financial: ['FinancialControl', 'input', '233'],
              percent: ['PercentControl', 'input', '233'],
            };

            if (current_section.chapters.length === 0) _this.skip();

            for (const indexChapter in current_section.chapters) {
              const chapter: IApiChapter =
                current_section.chapters[indexChapter];

              cy.react('ContentBody')
                .react('FormControls')
                .react('ContentTitle')
                .eq(indexChapter as any as number)
                .should('have.text', chapter.chap_lib);

              if (chapter.controls.length === 0) continue;

              const controls = chapter.controls.reduce((acc, control) => {
                if (!acc?.[control.control_type])
                  acc[control.control_type] = [];

                acc[control.control_type].push(control);

                return acc;
              }, {});

              for (const arrayControlType of Object.values(controls) as any[]) {
                for (const indexControl in arrayControlType) {
                  const control: IApiControl = arrayControlType[indexControl];

                  if (!controlName?.[control.control_type]) continue;

                  checkVisibilityFormErrorAtFirst(
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
                    .then(($el) => {
                      if (!$el.is(':disabled')) {
                        const regex = new RegExp(
                          control.control_regex as any as string,
                        );
                        const oppositeRegex = new RegExp(
                          `^(?!${control.control_regex as any as string}).*$`,
                        );
                        const randExp = generateRandExp(regex);
                        const randExpOpposite = generateRandExp(oppositeRegex);

                        if (control.control_value)
                          clearAndBlurCyElement(cy.wrap($el));

                        cy.wrap($el).typeThenWait(
                          controlName[control.control_type][2],
                          { triggers: { blur: { exec: true } } },
                        );
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorMessageShouldNotMatch(
                          translations_mandatoryValue,
                        );
                        clearAndBlurCyElement(cy.wrap($el));

                        cy.wrap($el).typeThenWait('value', {
                          triggers: { blur: { exec: true } },
                        });
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorShouldBeVisible([
                          _escapeForRegExp(control.control_regex_msg as string),
                        ]);
                        clearAndBlurCyElement(cy.wrap($el));

                        cy.wrap($el).typeThenWait(randExp, {
                          typeOptions: { parseSpecialCharSequences: false },
                          triggers: { blur: { exec: true } },
                        });
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorMessageShouldNotMatch(
                          translations_mandatoryValue,
                        );
                        clearAndBlurCyElement(cy.wrap($el));

                        cy.wrap($el).typeThenWait(randExpOpposite, {
                          typeOptions: { parseSpecialCharSequences: false },
                          triggers: { blur: { exec: true } },
                        });
                        getCyElementControl(
                          controlName[control.control_type][0],
                          indexChapter,
                          indexControl,
                        ).formErrorShouldBeVisible([
                          _escapeForRegExp(control.control_regex_msg as string),
                        ]);
                        clearAndBlurCyElement(cy.wrap($el));

                        switch (control.control_type) {
                          case 'integer':
                            cy.wrap($el).typeThenWait('1234.5', {
                              triggers: { blur: { exec: true } },
                            });
                            getCyElementControl(
                              controlName[control.control_type][0],
                              indexChapter,
                              indexControl,
                            ).formErrorShouldBeVisible([
                              _escapeForRegExp(
                                control.control_regex_msg as string,
                              ),
                            ]);
                            break;
                          case 'financial':
                          case 'percent':
                          case 'decimal':
                            cy.wrap($el).typeThenWait('123.5', {
                              triggers: { blur: { exec: true } },
                            });
                            getCyElementControl(
                              controlName[control.control_type][0],
                              indexChapter,
                              indexControl,
                            ).formErrorMessageShouldNotMatch(
                              translations_mandatoryValue,
                            );
                            break;
                          default:
                            break;
                        }

                        clearAndBlurCyElement(cy.wrap($el));
                        if (control.control_mandatory)
                          getCyElementControl(
                            controlName[control.control_type][0],
                            indexChapter,
                            indexControl,
                          ).formErrorShouldBeVisible(
                            translations_mandatoryValue,
                          );
                      }
                    });
                }
              }
            }
          });
        }
      });
    });

    it('Assert mandatoryValue for section "Champs Simples" - PART 3 (date)', () => {
      const sectionName = 'Champs Simples';
      cy.intercept({
        method: 'GET',
        url: '/edit?file_id=*',
      }).as('getSectionData');
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
          data.sections.some((section) => section.section_lib === sectionName)
        ) {
          cy.react('NavItem').contains(sectionName).click();
          cy.wait(1500);

          cy.wait('@getSectionData').then((interception) => {
            const { current_section } = interception.response?.body.data;
            const controlName = {
              date: ['DateControl', 'input', '2023-03-23'],
              time: ['TimeControl', 'input', '23:23'],
              timestamp: ['DateTimeControl', 'input', '2023-03-23T23:23'],
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
                if (!acc?.[control.control_type])
                  acc[control.control_type] = [];

                acc[control.control_type].push(control);

                return acc;
              }, {});

              for (const arrayControlType of Object.values(controls) as any[]) {
                for (const indexControl in arrayControlType) {
                  const control: IApiControl = arrayControlType[indexControl];

                  if (!controlName?.[control.control_type]) continue;

                  checkVisibilityFormErrorAtFirst(
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
                    .then(($el) => {
                      if (!$el.is(':disabled')) {
                        if (control.control_value)
                          clearAndBlurCyElement(cy.wrap($el));

                        cy.wrap($el).typeThenWait(
                          controlName[control.control_type][2],
                          { triggers: { blur: { exec: true } } },
                        );
                        if (control.control_mandatory) {
                          getCyElementControl(
                            controlName[control.control_type][0],
                            indexChapter,
                            indexControl,
                          ).formErrorMessageShouldNotMatch(
                            translations_mandatoryValue,
                          );
                        }
                        clearAndBlurCyElement(cy.wrap($el));
                        if (control.control_mandatory)
                          getCyElementControl(
                            controlName[control.control_type][0],
                            indexChapter,
                            indexControl,
                          ).formErrorShouldBeVisible(
                            translations_mandatoryValue,
                          );
                      }
                    });
                }
              }
            }
          });
        }
      });
    });

    it('Assert mandatoryValue for section "Champs Simples" - PART 4 (boolean)', () => {
      const sectionName = 'Champs Simples';
      cy.intercept({
        method: 'GET',
        url: '/edit?file_id=*',
      }).as('getSectionData');
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
          data.sections.some((section) => section.section_lib === sectionName)
        ) {
          cy.react('NavItem').contains(sectionName).click();
          cy.wait(1500);

          cy.wait('@getSectionData').then((interception) => {
            const { current_section } = interception.response?.body.data;
            const controlName = {
              boolean: ['BooleanControl'],
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
                if (!acc?.[control.control_type])
                  acc[control.control_type] = [];

                acc[control.control_type].push(control);

                return acc;
              }, {});

              for (const arrayControlType of Object.values(controls) as any[]) {
                for (const indexControl in arrayControlType) {
                  const control: IApiControl = arrayControlType[indexControl];

                  if (!controlName?.[control.control_type]) continue;

                  checkVisibilityFormErrorAtFirst(
                    control,
                    getCyElementControl(
                      controlName[control.control_type][0],
                      indexChapter,
                      indexControl,
                    ),
                    translations_mandatoryValue,
                    true,
                  );
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
    .eq(indexControl as number);
}

function checkVisibilityFormErrorAtFirst(
  control: Record<string, any>,
  cyElementControl: Cypress.Chainable<JQuery<HTMLElement>>,
  translations: string[],
  parseStrToBool = false,
) {
  cy.wait(1500);
  cy.wait(1);

  if (control.control_mandatory) {
    if (
      !control.control_value ||
      (parseStrToBool && JSON.parse(control.control_value) === false)
    ) {
      cyElementControl.formErrorShouldBeVisible(translations);
    } else {
      cyElementControl.formErrorMessageShouldNotMatch(translations);
    }
  }
}

function clearAndBlurCyElement(cyElement: Cypress.Chainable<JQuery<any>>) {
  cyElement.clear().blur();
  cy.wait(1);
  cy.wait(500);
}

function generateRandExp(regex: RegExp): string {
  // const randExp = new RandExp(regex).gen();
  let randExp = new RandExp(regex).gen();
  while (!randExp || !regex.test(randExp)) {
    randExp = new RandExp(regex).gen();
  }

  return randExp;
}
