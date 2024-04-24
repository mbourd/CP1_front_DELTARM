/* eslint-disable @typescript-eslint/no-this-alias */
// @ts-check
/// <reference types="cypress" />
/// <reference types="../support/e2e" />

import JwtDecode from 'jwt-decode';

import '../../src/Features/Edit/translations';
import '../../src/Features/Manage/translations';
import { _escapeForRegExp, _translate } from '../utils';
import {
  DataGridDetailsRowsCell,
  IApiChapter,
  IApiControl,
  IApiCurrentSection,
  IApiSection,
} from '../../src/Features/Edit/types';
import { BigNumber } from 'bignumber.js';
import { create as mathCreate, all as mathAll } from 'mathjs';
import RandExp from 'randexp';

describe(
  'File - Edition for context "CP1" - Sections : AG-DataGrid',
  { testIsolation: false },
  () => {
    let context: string;
    let data: Record<any, any>;
    let currentUrl: string;

    before(() => {
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

    it('Assert chapter labels and correct columns name', function () {
      const sectionName = 'AG-DataGrid';
      const conditions = [
        context !== 'CP1',
        !data.sections.some(
          (section: IApiSection) => section.section_lib === sectionName,
        ),
      ];

      if (conditions.some((test) => test === true)) this.skip();

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
          ag_datagrid: ['DataGridControlAgGrid'],
        };

        if (current_section.chapters.length === 0) this.skip();

        cy.reactChain('ContentBody FormControls ContentTitle').should(
          'have.length',
          current_section.chapters.length,
        );

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

          cy.reactChain('ContentBody FormControls ContentTitle')
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
              const info = controlName?.[control.control_type];

              if (!info) continue;

              const columns = control.data_grid_detail?.columns || [];

              // assert each column names matches with the api
              getCyElementControl(info[0], indexChapter, indexControl)
                .find(
                  /*'.ag-theme-alpine ' +*/ '.ag-header-row.ag-header-row-column .ag-header-cell',
                )
                .should('be.visible')
                .should('have.length', columns.length)
                .each(($el, i) => {
                  cy.wrap($el)
                    .find('.ag-header-cell-text')
                    .should('have.text', columns[i].headerName);
                });
            }
          }
        }
      });
    });

    it('Assert formula with formatting', function () {
      const sectionName = 'AG-DataGrid';
      const conditions = [
        context !== 'CP1',
        !data.sections.some(
          (section: IApiSection) => section.section_lib === sectionName,
        ),
      ];

      if (conditions.some((test) => test === true)) this.skip();

      cy.visit(currentUrl);
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

        if (current_section.chapters.length === 0) this.skip();

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

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
              const info: string[] | undefined =
                controlName?.[control.control_type];

              if (!info) continue;

              const columns = control.data_grid_detail?.columns || [];
              const rowsApi = control.data_grid_detail?.rows || [];
              const indexRow = 0; // for (const _indexRow in rowsApi) {...}
              const formulas: {
                formula: string;
                ids: string[];
                indexCell: number;
              }[] = [];
              const editedCell = {};
              const row = rowsApi[indexRow];
              const rowValues: DataGridDetailsRowsCell[] = Object.values(
                row,
              ).filter((v) => {
                return typeof v === 'object' && !Array.isArray(v);
              });

              if (!rowValues.some((c) => c.component === 'formula')) continue;

              getCyElementControl(info[0], indexChapter, indexControl)
                .find('.ag-theme-alpine')
                .getAgGridElements()
                .then((elRows) => {
                  for (const indexCell in rowValues) {
                    const cell = rowValues[indexCell];
                    const listCells = Object.values(elRows[indexRow]);
                    const elCell: HTMLElement = listCells[indexCell];
                    const prev = cell.value;
                    let next = '';

                    switch (cell.component) {
                      case 'formula':
                        formulas.push({
                          formula: rowValues[indexCell].value,
                          ids: [
                            ...new Set(
                              rowValues[indexCell].value.match(/#\d+/g) || [],
                            ),
                          ],
                          indexCell: parseInt(indexCell),
                        });
                        break;
                      case 'integer':
                      case 'percent':
                      case 'decimal':
                      case 'financial': {
                        const strMatch = generateRandExp(
                          new RegExp(cell.control_regex as any as string, 'i'),
                          23,
                        );
                        next = strMatch;
                        cy.wrap(elCell)
                          .focus()
                          .realType('1')
                          .realPress(['ControlLeft', 'A'])
                          .realPress('Backspace');
                        cy.log(strMatch);
                        cy.wrap(elCell)
                          .find('input')
                          .type(strMatch)
                          .clickOutside();
                        break;
                      }
                      default:
                        break;
                    }

                    if (next) {
                      editedCell[indexRow] = editedCell?.[indexRow] || {};
                      editedCell[indexRow][indexCell] = { prev, next };
                    }
                  }
                });

              getCyElementControl(info[0], indexChapter, indexControl)
                .find('.ag-theme-alpine')
                .getAgGridElements()
                .then((elRows) => {
                  for (const formula of formulas) {
                    let equation = formula.formula;

                    for (const indexCell in rowValues) {
                      if (rowValues[indexCell].component !== 'formula') {
                        if (
                          formula.ids.includes(
                            '#' + rowValues[indexCell].col_elm_id,
                          )
                        ) {
                          // @ts-ignore
                          equation = equation.replaceAll(
                            '#' + rowValues[indexCell].col_elm_id,
                            editedCell[indexRow][indexCell]
                              ? editedCell[indexRow][indexCell].next
                              : rowValues[indexCell].value,
                          );
                        }
                      }
                    }

                    cy.wrap(Object.values(elRows[indexRow])[formula.indexCell])
                      .invoke('text')
                      .then((t) => {
                        const math = mathCreate(mathAll);
                        math.config({ number: 'BigNumber' });

                        const {
                          decimal_digit: decimalDigit,
                          currency_symbol: currencySymbol,
                          thousand_separator: hasThousandSeparator,
                        } = columns[formula.indexCell];
                        let result: string;
                        try {
                          result = math.evaluate(equation);
                          result = formatDecimalDigit(result, decimalDigit);
                          result = hasThousandSeparator
                            ? kFormatter(result)
                            : result;
                          result = currencySymbol
                            ? `${currencySymbol} ${result}`
                            : result;
                        } catch (error) {
                          result = '';
                        }
                        expect(t).to.be.equal(result);
                      });
                  }

                  for (const indexCell in rowValues) {
                    if (editedCell[indexRow]?.[indexCell]) {
                      getCyElementControl(info[0], indexChapter, indexControl)
                        .find('.ag-theme-alpine')
                        .getAgGridElements()
                        .then((elRows) => {
                          cy.wrap(Object.values(elRows[indexRow])[indexCell])
                            .focus()
                            .realType(editedCell[indexRow][indexCell].prev)
                            .clickOutside();
                        });
                    }
                  }
                });
            }
          }
        }
      });
    });

    it('Assert error message regex', function () {
      const sectionName = 'AG-DataGrid';
      const conditions = [
        context !== 'CP1',
        !data.sections.some(
          (section: IApiSection) => section.section_lib === sectionName,
        ),
      ];

      if (conditions.some((test) => test === true)) this.skip();

      cy.visit(currentUrl);
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

        if (current_section.chapters.length === 0) this.skip();

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

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
              const info = controlName?.[control.control_type];

              if (!info) continue;

              const rowsApi = control.data_grid_detail?.rows || [];
              const indexRow = 0;
              const editedCell = {};
              const row = rowsApi[indexRow];
              const rowValues: DataGridDetailsRowsCell[] = Object.values(
                row,
              ).filter((v) => {
                return typeof v === 'object' && !Array.isArray(v);
              });

              getCyElementControl(info[0], indexChapter, indexControl)
                .find('.ag-theme-alpine')
                .getAgGridElements()
                .then((elRows) => {
                  for (const indexCell in rowValues) {
                    const cell = rowValues[indexCell];

                    if (!cell.control_regex || !cell.control_editable) continue;
                    if (
                      ![
                        'text',
                        'comment',
                        'long_text',
                        'integer',
                        'decimal',
                        'financial',
                        'percent',
                      ].includes(cell.component)
                    )
                      continue;

                    const listCells = Object.values(elRows[indexRow]);
                    const elCell: HTMLElement = listCells[indexCell];
                    const strMatch = generateRandExp(
                      new RegExp(cell.control_regex as any as string, 'i'),
                    );
                    const strNotMatch = generateRandExp(
                      new RegExp(
                        `^(?!.*${cell.control_regex as any as string}).*`,
                        'i',
                      ),
                    );
                    const prev = rowValues[indexCell].value;
                    editedCell[indexRow] = editedCell[indexRow] || {};
                    editedCell[indexRow][indexCell] = { prev };

                    // type match
                    cy.log(cell.component);
                    cy.wrap(elCell)
                      .focus()
                      .realType('1')
                      .realPress(['ControlLeft', 'A'])
                      .realPress('Backspace');
                    cy.log(strMatch);
                    if (['comment', 'long_text'].includes(cell.component)) {
                      getCyElementControl(info[0], indexChapter, indexControl)
                        .react('AgGridReact')
                        .find('.ag-large-text-input textarea')
                        .focus()
                        .type(strMatch, {
                          parseSpecialCharSequences: false,
                        });
                    } else
                      cy.wrap(elCell).find('input').type(strMatch, {
                        parseSpecialCharSequences: false,
                      });
                    cy.clickOutside();
                    getCyElementControl(
                      info[0],
                      indexChapter,
                      indexControl,
                    ).formErrorMessageShouldNotMatch(
                      [_escapeForRegExp(cell.control_regex_msg as string)],
                      'h1.errorsText',
                    );
                    cy.wait(250);

                    // type not match
                    cy.wrap(elCell)
                      .focus()
                      .realType('1')
                      .realPress(['ControlLeft', 'A'])
                      .realPress('Backspace');
                    cy.log(strNotMatch);
                    if (['comment', 'long_text'].includes(cell.component)) {
                      getCyElementControl(info[0], indexChapter, indexControl)
                        .react('AgGridReact')
                        .find('.ag-large-text-input textarea')
                        .focus()
                        .type(strNotMatch, {
                          parseSpecialCharSequences: false,
                        });
                    } else
                      cy.wrap(elCell).find('input').type(strNotMatch, {
                        parseSpecialCharSequences: false,
                      });
                    cy.clickOutside();
                    getCyElementControl(
                      info[0],
                      indexChapter,
                      indexControl,
                    ).formErrorShouldBeVisible(
                      [_escapeForRegExp(cell.control_regex_msg as string)],
                      'h1.errorsText',
                    );

                    cy.wait(3250);
                    getCyElementControl(
                      info[0],
                      indexChapter,
                      indexControl,
                    ).formErrorMessageShouldNotMatch(
                      [_escapeForRegExp(cell.control_regex_msg as string)],
                      'h1.errorsText',
                    );
                    cy.wait(500);

                    if (editedCell[indexRow]?.[indexCell]) {
                      cy.wrap(elCell)
                        .focus()
                        .realType('1')
                        .realPress(['ControlLeft', 'A'])
                        .realPress('Backspace');

                      if (['comment', 'long_text'].includes(cell.component)) {
                        getCyElementControl(info[0], indexChapter, indexControl)
                          .react('AgGridReact')
                          .find('.ag-large-text-input textarea')
                          .focus()
                          .type(editedCell[indexRow][indexCell].prev, {
                            parseSpecialCharSequences: false,
                          });
                      } else
                        cy.wrap(elCell)
                          .find('input')
                          .type(editedCell[indexRow][indexCell].prev, {
                            parseSpecialCharSequences: false,
                          });

                      cy.clickOutside();
                    }
                  }
                });
            }
          }
        }
      });
    });

    it('Assert pagination size', function () {
      const sectionName = 'AG-DataGrid';
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
          ag_datagrid: ['DataGridControlAgGrid'],
        };

        if (current_section.chapters.length === 0) this.skip();

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

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
              const info = controlName?.[control.control_type];

              if (!info) continue;

              const pageSize =
                control.data_grid_detail?.datagrid_options
                  ?.pagination_row_size ?? 20;

              cy.window().then((w) => {
                expect(
                  w[
                    'Features_Edit_Control_DataGridControlAgGrid' +
                      control.control_id
                  ].gridRef.current.api.getRenderedNodes().length,
                ).to.be.lte(pageSize);
                expect(
                  w[
                    'Features_Edit_Control_DataGridControlAgGrid' +
                      control.control_id
                  ].gridRef.current.api.paginationGetPageSize(),
                ).to.be.equal(pageSize);
              });
            }
          }
        }
      });
    });

    it('Assert cell formatting for number type', function () {
      const sectionName = 'AG-DataGrid';
      const conditions = [
        context !== 'CP1',
        !data.sections.some(
          (section: IApiSection) => section.section_lib === sectionName,
        ),
      ];

      if (conditions.some((test) => test === true)) this.skip();

      cy.visit(currentUrl);
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

        if (current_section.chapters.length === 0) this.skip();

        for (const indexChapter in current_section.chapters) {
          const chapter: IApiChapter = current_section.chapters[indexChapter];

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
              const info = controlName?.[control.control_type];

              if (!info) continue;

              const columns = control.data_grid_detail?.columns || [];
              const rowsApi = control.data_grid_detail?.rows || [];
              const indexRow = 0;
              const row = rowsApi[indexRow];
              const rowValues = Object.values(row).filter((v) => {
                return typeof v === 'object' && !Array.isArray(v);
              });

              // Check each cell without new value
              getCyElementControl(info[0], indexChapter, indexControl)
                .find('.ag-theme-alpine')
                .getAgGridElements()
                .then((elRows) => {
                  for (const indexCell in rowValues) {
                    const cell = rowValues[indexCell];
                    const listCells = Object.values(elRows[indexRow]);
                    const elCell: HTMLElement = listCells[indexCell];
                    const prev = cell.value;

                    switch (cell.component) {
                      case 'integer':
                      case 'decimal':
                      case 'financial':
                      case 'percent': {
                        const {
                          decimal_digit: decimalDigit,
                          currency_symbol: currencySymbol,
                          thousand_separator: hasThousandSeparator,
                        } = columns[indexCell];

                        cy.wrap(elCell)
                          .invoke('text')
                          .then((t) => {
                            let result: string;
                            try {
                              result = formatDecimalDigit(prev, decimalDigit);
                              result = hasThousandSeparator
                                ? kFormatter(result)
                                : result;
                              if (currencySymbol) {
                                result = `${currencySymbol}${result}`;
                              } else if (cell.component === 'financial') {
                                cy.wrap(elCell)
                                  .find('svg')
                                  .should('be.visible');
                              }
                              result =
                                cell.component === 'percent'
                                  ? `% ${result}`
                                  : result;
                            } catch (error) {
                              result = '';
                            }
                            expect(t).to.be.equal(result);
                          });
                        break;
                      }
                      default:
                        break;
                    }
                  }
                });

              // Check each cell with new value
              getCyElementControl(info[0], indexChapter, indexControl)
                .find('.ag-theme-alpine')
                .getAgGridElements()
                .then((elRows) => {
                  for (const indexCell in rowValues) {
                    const cell = rowValues[indexCell];
                    const prev = cell.value;
                    const listCells = Object.values(elRows[indexRow]);
                    const elCell: HTMLElement = listCells[indexCell];

                    switch (cell.component) {
                      case 'integer':
                      case 'decimal':
                      case 'financial':
                      case 'percent': {
                        const {
                          decimal_digit: decimalDigit,
                          currency_symbol: currencySymbol,
                          thousand_separator: hasThousandSeparator,
                        } = columns[indexCell];
                        if (cell.control_regex) {
                          const strMatch = generateRandExp(
                            new RegExp(
                              cell.control_regex as any as string,
                              'i',
                            ),
                          );
                          cy.wrap(elCell)
                            .focus()
                            .realType('1')
                            .realPress(['ControlLeft', 'A'])
                            .realPress('Backspace');
                          cy.log(strMatch);
                          cy.wrap(elCell)
                            .find('input')
                            .type(strMatch)
                            .clickOutside();

                          cy.wrap(elCell)
                            .invoke('text')
                            .then((t) => {
                              let result: string;
                              try {
                                result = formatDecimalDigit(
                                  strMatch,
                                  decimalDigit,
                                );
                                result = hasThousandSeparator
                                  ? kFormatter(result)
                                  : result;
                                if (currencySymbol) {
                                  result = `${currencySymbol}${result}`;
                                } else if (cell.component === 'financial') {
                                  cy.wrap(elCell)
                                    .find('svg')
                                    .should('be.visible');
                                }
                                result =
                                  cell.component === 'percent'
                                    ? `% ${result}`
                                    : result;
                              } catch (error) {
                                result = '';
                              }
                              expect(t).to.be.equal(result);
                            });

                          cy.wrap(elCell)
                            .focus()
                            .realType('1')
                            .realPress(['ControlLeft', 'A'])
                            .realPress('Backspace');
                          cy.wrap(elCell)
                            .find('input')
                            .type(prev)
                            .clickOutside();
                        }
                        break;
                      }
                      default:
                        break;
                    }
                  }
                });
            }
          }
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
  return cy.reactChain(
    `FormControls ContentTitle:eq(${
      indexChapter as number
    }):next(.control-container) ${compo}:eq(${indexControl as number})`,
  );
}

function kFormatter(num: any) {
  if (num) return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return '';
}

function formatDecimalDigit(number, decimalDigits: number): string {
  const bigNumber = new BigNumber(number);
  const formattedNumber = bigNumber.toFixed(decimalDigits);

  return formattedNumber;
}

function generateRandExp(regex: RegExp, max?: number): string {
  // const randExp = new RandExp(regex).gen();
  const reg = new RandExp(regex);

  if (max) reg.max = max;

  let randExp = reg.gen();
  while (randExp === '' /* || !regex.test(randExp)*/) randExp = reg.gen();

  return randExp;
}
