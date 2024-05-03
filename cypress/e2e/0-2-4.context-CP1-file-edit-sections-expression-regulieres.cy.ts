/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';

import '../../src/Features/Edit/translations';
import '../../src/Features/Manage/translations';
import { _escapeForRegExp, _translate } from '../utils';
import {
  IApiChapter,
  IApiControl,
  IApiCurrentSection,
  IApiSection,
} from '../../src/Features/Edit/types';
import RandExp from 'randexp';

describe(
  'File - Edition for context "CP1" - Sections : Expression Régulière',
  { testIsolation: false },
  () => {
    let context: string;
    let data: Record<any, any>;
    let currentUrl: string;
    const translations_mandatoryValue = [
      _translate('en', 'Edit', 'mandatoryValue', 'Valeur obligatoire'),
      _translate('fr', 'Edit', 'mandatoryValue', 'Valeur obligatoire'),
      _translate('de', 'Edit', 'mandatoryValue', 'Valeur obligatoire'),
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
        context = jwt.context;

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

    it('Assert mandatoryValue & and regex for section "Expression Régulière"', function () {
      const sectionName = 'Expression Régulière';
      const conditionsToSkip = [
        context !== 'CP1',
        !data.sections.some(
          (section: IApiSection) => section.section_lib === sectionName,
        ),
      ];

      if (conditionsToSkip.some((test) => test === true)) this.skip();

      cy.visit(currentUrl);
      cy.waitReactApp('main[id="main-content"]');
      cy.intercept({
        method: 'GET',
        url: '/edit?file_id=*',
      }).as('getSectionData');
      cy.react('NavItem').contains(sectionName).click();
      cy.wait(1500);

      cy.wait('@getSectionData').then((interception) => {
        const { current_section }: { current_section: IApiCurrentSection } =
          interception.response?.body.data;
        const controlName = {
          text: ['TextControl', 'input'],
          email: ['TextControl', 'input'],
        };

        if (current_section.chapters.length === 0) this.skip();

        cy.wrap(current_section.chapters).each(
          (chapter: IApiChapter, indexChapter) => {
            cy.react('ContentBody')
              .react('FormControls')
              .react('ContentTitle')
              .eq(indexChapter as any as number)
              .should('have.text', chapter.chap_lib);

            if (chapter.controls.length === 0) return;

            const controls = chapter.controls.reduce(
              (acc: Record<string, IApiControl[]>, control) => ({
                ...acc,
                [control.control_type]: [
                  ...(acc[control.control_type] || []),
                  control,
                ],
              }),
              {},
            );

            cy.wrap(Object.values(controls)).each(
              (arrayControlType: IApiControl[]) => {
                cy.wrap(arrayControlType).each(
                  (control: IApiControl, indexControl) => {
                    const regex = new RegExp(
                      control.control_regex as any as string,
                      'i',
                    );
                    const oppositeRegex = new RegExp(
                      `^(?!${control.control_regex as any as string}).*$`,
                      'i',
                    );

                    if (!controlName?.[control.control_type]) return;
                    // if (!_isWellFormedRegex(regex)) continue;

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
                      .then(($el) => {
                        if (!$el.is(':disabled')) {
                          const randExp = generateRandExp(regex);
                          const randExpOpposite =
                            generateRandExp(oppositeRegex);

                          if (control.control_value)
                            clearAndBlurCyElement(cy.wrap($el));

                          cy.wrap($el).typeThenWait(randExp, {
                            typeOptions: { parseSpecialCharSequences: false },
                            triggers: { blur: { exec: true } },
                          });
                          getCyElementControl(
                            controlName[control.control_type][0],
                            indexChapter,
                            indexControl,
                          ).formErrorMessageShouldNotMatch([
                            ...translations_mandatoryValue,
                            _escapeForRegExp(
                              control.control_regex_msg as string,
                            ) as string,
                          ]);
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
                            _escapeForRegExp(
                              control.control_regex_msg as string,
                            ) as string,
                          ]);
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
                  },
                );
              },
            );
          },
        );
      });
    });
  },
);

function getCyElementControl(
  compo: string,
  indexChapter: any,
  indexControl: any,
): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.reactChain(
    `FormControls ContentTitle:eq(${
      indexChapter as number
    }):next(.control-container) ${compo}:eq(${indexControl as number})`,
  );
}
function checkVisibilityMandatoryValueAtFirst(
  control: Record<string, any>,
  cyElementControl: Cypress.Chainable<JQuery<HTMLElement>>,
  translations: string[],
) {
  cy.wait(1500);
  cy.wait(1);

  if (control.control_mandatory)
    if (!control.control_value)
      cyElementControl.formErrorShouldBeVisible(translations);
    else cyElementControl.formErrorMessageShouldNotMatch(translations);
}

function clearAndBlurCyElement(cyElement: Cypress.Chainable<JQuery<any>>) {
  cyElement.clear().blur();
  cy.wait(1);
  cy.wait(500);
}

function generateRandExp(regex: RegExp): string {
  // const randExp = new RandExp(regex).gen();
  let randExp = new RandExp(regex).gen();
  while (randExp === '' || !regex.test(randExp)) {
    randExp = new RandExp(regex).gen();
  }

  return randExp;
}
