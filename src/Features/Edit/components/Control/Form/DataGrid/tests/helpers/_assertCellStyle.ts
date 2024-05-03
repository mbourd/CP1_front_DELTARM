// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from '../../../../../../types';
import { _hexToRgb } from '../../../../../../../../../cypress/utils';
import { getData } from './getData';

export function _assertCellStyle(_control: IApiControl, waitMs = 500) {
  Cypress.config('defaultCommandTimeout', 10000);
  cy.wait(waitMs).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow, columns }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((c, indexCell: number) => {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            if (cell.component !== 'checkbox_select_datagrid')
              cy.wrap(elCell)
                .should(
                  'have.css',
                  'text-align',
                  columns[indexCell].alignment
                    ? columns[indexCell].alignment
                    : 'left',
                )
                .should(
                  'have.css',
                  'border-right',
                  columns[indexCell].borderRight
                    ? `${
                        columns[indexCell].borderRightWidth
                      }px solid ${_hexToRgb(
                        columns[indexCell].borderRightColor
                          ? columns[indexCell].borderRightColor
                          : '#000000',
                      )}`
                    : '0px none rgb(0, 0, 0)',
                );

            if (
              cell.control_editable &&
              columns[indexCell].track_modification
            ) {
              let beenEdited = false;
              const bgColor: string | undefined = JSON.parse(
                columns[indexCell].track_modification_option,
              )?.['background-color'];
              const color: string | undefined = JSON.parse(
                columns[indexCell].track_modification_option,
              )?.['color'];

              switch (cell.component) {
                case 'select_list':
                case 'dynamic_select_list': {
                  const elCellText = Cypress.$(elCell).text();

                  cy.window().then((w) => {
                    w[
                      `Features_Edit_Control_DataGridControlAgGrid_CustomSelectRenderer${cell?.row_num}-${cell?.col_elm_id}`
                    ].setCanSendApi(false);
                  });
                  cy.wrap(elCell).click();
                  cy.get('.MuiMenu-paper')
                    .find('ul li')
                    .then((lis) => {
                      cy.wrap(lis).each((li) => {
                        if (
                          !beenEdited &&
                          Cypress.$(li).text() !== elCellText
                        ) {
                          cy.wrap(li).click().clickOutside();
                          beenEdited = true;

                          return;
                        }
                      });
                    });
                  break;
                }
                case 'text':
                case 'integer':
                case 'decimal':
                case 'financial':
                case 'percent':
                  cy.wrap(elCell).focus().realType('1').clickOutside();
                  beenEdited = true;
                  break;
                case 'long_text':
                case 'comment':
                  cy.wrap(elCell).focus().realType('1');
                  cy.react('DataGridControlAgGrid')
                    .react('AgGridReact')
                    .find('.ag-large-text-input textarea')
                    .focus()
                    .type('strMatch')
                    .clickOutside();
                  beenEdited = true;
                  break;
                default:
                  break;
              }

              cy.then(() => {
                if (beenEdited) {
                  if (bgColor)
                    cy.wrap(elCell).should(
                      'have.css',
                      'background-color',
                      _hexToRgb(bgColor),
                    );
                  if (color)
                    cy.wrap(elCell).should(
                      'have.css',
                      'color',
                      _hexToRgb(color),
                    );
                }
              });
            }
          });
        });
    });
  });
}
