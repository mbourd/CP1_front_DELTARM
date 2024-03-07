import { IApiControl } from 'Features/Edit/types';
import { formatDecimalDigit } from './formatDecimalDigit';
import { generateRandExp } from './generateRandExp';
import { getData } from './getData';
import { kFormatter } from './kFormatter';
import { create as mathCreate, all as mathAll } from 'mathjs';

// validate the correctness of formulas in a data grid by simulating user input, recalculating formula cells, and checking the evaluated results against expected values.
export function _assertFormatAndEvalFormula(_control: IApiControl) {
  cy.wait(155).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow, columns }) => {
      let emptyCell = false;

      cy.wrap([0, 1]).each(() => {
        const editedCell = {};
        const formulas: {
          formula: string;
          ids: string[];
          indexCell: number;
        }[] = [];

        cy.react('DataGridControlAgGrid')
          .find('.ag-theme-alpine')
          .getAgGridElements()
          .then((elRows) => {
            for (const indexCell in rowValues) {
              const cell = rowValues[indexCell];
              const listCells = Object.values(elRows[indexRow]);
              const elCell: HTMLElement = listCells[indexCell];
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
                  if (!cell.control_editable) continue;

                  const strMatch = emptyCell
                    ? ''
                    : generateRandExp(
                        new RegExp(cell.control_regex as any as string, 'i'),
                        23,
                      );
                  next = strMatch;
                  cy.wrap(elCell)
                    .focus()
                    .realType('1')
                    .realPress(['ControlLeft', 'A'])
                    .realPress('Backspace');
                  cy.log(next);
                  if (emptyCell) {
                    cy.wrap(elCell).find('input').clickOutside();
                  } else
                    cy.wrap(elCell).find('input').type(next).clickOutside();

                  editedCell[indexRow] = editedCell?.[indexRow] || {};
                  editedCell[indexRow][indexCell] = {
                    next: emptyCell ? '@' : next,
                  };
                  break;
                }
                default:
                  break;
              }
            }
          });

        cy.react('DataGridControlAgGrid')
          .find('.ag-theme-alpine')
          .getAgGridElements()
          .then((elRows) => {
            for (const formula of formulas) {
              let equation = formula.formula;

              for (const indexCell in rowValues) {
                if (rowValues[indexCell].component !== 'formula') {
                  if (
                    formula.ids.includes('#' + rowValues[indexCell].col_elm_id)
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
                  const {
                    decimal_digit: decimalDigit,
                    currency_symbol: currencySymbol,
                    thousand_separator: hasThousandSeparator,
                  } = columns[formula.indexCell];
                  let result: string;

                  math.config({ number: 'BigNumber' });

                  try {
                    result = math.evaluate(equation);
                    result = formatDecimalDigit(result, decimalDigit);
                    result = hasThousandSeparator ? kFormatter(result) : result;
                    result = currencySymbol
                      ? `${currencySymbol} ${result}`
                      : result;
                  } catch (error) {
                    result = '';
                  }

                  expect(t).to.be.equal(result);

                  emptyCell = true;
                });
            }
          });
      });
    });
  });
}
