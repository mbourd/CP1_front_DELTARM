/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';

import '../../src/Features/Edit/translations';
import { _translate } from '../utils';
import {
  IApiChapter,
  IApiControl,
  IApiCurrentSection,
  IApiSection,
} from '../../src/Features/Edit/types';

describe(
  'File - Edition for context "CP1" - Sections : Compliance',
  { testIsolation: false },
  () => {
    let context: string;
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

    it('Assert mandatoryValue for section "Compliance" - PART 1', function () {
      const sectionName = 'Compliance';
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
        const controlName = {
          select_list: ['SelectListControl', '._Select'],
        };
        const complianceName = {
          comment: ['CommentCompliance', 'textarea', 'aaaa'],
          financial: ['FinancialCompliance', 'input', '1234'],
          date: ['DateCompliance', 'input', '2023-03-23'],
        };
        const { current_section }: { current_section: IApiCurrentSection } =
          interception.response?.body.data;

        if (current_section.chapters.length === 0) this.skip();

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

          cy.react('ContentBody')
            .react('FormControls')
            .react('ContentTitle')
            .eq(indexChapter as any as number)
            .should('have.text', chapter.chap_lib);

          if (chapter.controls.length === 0) continue;

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

          for (const arrayControlType of Object.values(controls)) {
            for (const indexControl in arrayControlType) {
              const control: IApiControl = arrayControlType[indexControl];
              const isResolved = control.compliance?.compliance_resolved
                ? true
                : false;

              if (!controlName?.[control.control_type]) continue;

              if (!isResolved) {
                cy.react(controlName[control.control_type][0])
                  .react('CheckboxCompliance')
                  .click();
                cy.wait(500);
              }

              cy.intercept({
                method: 'GET',
                url: '/control/get_compliance_values?file_id=*&elm_id=*',
              }).as('getComplianceValues');
              cy.react(controlName[control.control_type][0])
                .find('.resolved-compliance')
                .click();
              cy.wait('@getComplianceValues').then((interception) => {
                const { compliance_fields } = interception.response?.body.data;

                for (const indexComplianceField in compliance_fields) {
                  const compliancefield =
                    compliance_fields[indexComplianceField];

                  if (!complianceName?.[compliancefield.compliance_elm_type])
                    continue;

                  const complianceCompName =
                    complianceName[compliancefield.compliance_elm_type][0];
                  const complianceType =
                    complianceName[compliancefield.compliance_elm_type][1];
                  const valueToType =
                    complianceName[compliancefield.compliance_elm_type][2];

                  checkVisibilityMandatoryValueAtFirst(
                    {
                      control_mandatory:
                        compliancefield.compliance_elm_mandatory,
                      control_value: compliancefield.compliance_elm_value,
                    },
                    cy.react(complianceCompName),
                    translations_mandatoryValue,
                  );

                  cy.react(complianceCompName)
                    .find(complianceType)
                    .then(($el) => {
                      if (!$el.is(':disabled')) {
                        cy.react(complianceCompName)
                          .find(complianceType)
                          .typeThenWait(valueToType);
                        cy.react(
                          complianceCompName,
                        ).formErrorMessageShouldNotMatch(
                          translations_mandatoryValue,
                        );
                        clearAndBlurCyElement(
                          cy.react(complianceCompName).find(complianceType),
                        );
                        if (compliancefield.compliance_elm_mandatory)
                          cy.react(complianceCompName).formErrorShouldBeVisible(
                            translations_mandatoryValue,
                          );
                      }
                    });
                }
              });
            }
          }
        }
      });
    });
  },
);

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

function clearAndBlurCyElement(cyElement: Cypress.Chainable<JQuery<any>>) {
  cyElement.clear().blur();
  cy.wait(1);
  cy.wait(500);
}
