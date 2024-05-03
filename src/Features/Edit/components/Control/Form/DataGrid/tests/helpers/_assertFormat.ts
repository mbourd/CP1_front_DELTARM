// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from '../../../../../../types';
import { formatDecimalDigit } from './formatDecimalDigit';
import { generateRandExp } from './generateRandExp';
import { getData } from './getData';
import { kFormatter } from './kFormatter';

export function _assertFormat(_control: IApiControl, waitMs = 500) {
  cy.wait(waitMs).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);
    const limits = [100, 6];

    withControlData(1, ({ rowValues, indexRow, columns }) => {
      cy.wrap(limits).each((max: number) => {
        // Check each cell without new value
        cy.react('DataGridControlAgGrid')
          .react('AgGridReact')
          .getAgGridElements()
          .then((elRows) => {
            cy.wrap(rowValues).each((c, indexCell: number) => {
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
                        result = formatDecimalDigit(
                          prev,
                          cell.component === 'integer' ? 0 : decimalDigit,
                        );
                        result = hasThousandSeparator
                          ? kFormatter(result)
                          : result;
                        if (currencySymbol) {
                          result = `${currencySymbol}${result}`;
                        } else if (cell.component === 'financial') {
                          cy.wrap(elCell).find('svg').should('be.visible');
                        }
                        result =
                          cell.component === 'percent' ? `% ${result}` : result;
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
            });
          });

        // Check each cell with new value
        cy.react('DataGridControlAgGrid')
          .react('AgGridReact')
          .getAgGridElements()
          .then((elRows) => {
            cy.wrap(rowValues).each((c, indexCell: number) => {
              const cell = rowValues[indexCell];
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
                      new RegExp(cell.control_regex as any as string, 'i'),
                      max,
                    );
                    cy.wrap(elCell)
                      .focus()
                      .realType('1')
                      .realPress(['ControlLeft', 'A'])
                      .realPress('Backspace');
                    cy.log(strMatch);
                    cy.wrap(elCell).find('input').type(strMatch).clickOutside();

                    cy.wrap(elCell)
                      .invoke('text')
                      .then((t) => {
                        let result: string;

                        try {
                          result = formatDecimalDigit(
                            strMatch,
                            cell.component === 'integer' ? 0 : decimalDigit,
                          );
                          result = hasThousandSeparator
                            ? kFormatter(result)
                            : result;
                          if (currencySymbol) {
                            result = `${currencySymbol}${result}`;
                          } else if (cell.component === 'financial') {
                            cy.wrap(elCell).find('svg').should('be.visible');
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
                  }
                  break;
                }
                default:
                  break;
              }
            });
          });
      });
    });
  });
}
