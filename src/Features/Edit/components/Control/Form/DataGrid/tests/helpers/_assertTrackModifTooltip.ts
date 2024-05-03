// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl, DataGridDetailsRowsCell } from '../../../../../../types';
import { getData } from './getData';
import { kFormatter } from './kFormatter';

export function _assertTrackModifTooltip(_control: IApiControl, waitMs = 500) {
  Cypress.config('defaultCommandTimeout', 6000);
  cy.wait(waitMs).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);

    withControlData(1, ({ indexRow, columns, rowValues }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each(
            (cell: DataGridDetailsRowsCell, indexCell: number) => {
              const listCells = Object.values(elRows[indexRow]);
              const elCell: HTMLElement = listCells[indexCell];

              if (cell.control_editable) {
                let beenEdited = false;

                switch (cell.component) {
                  case 'select_list':
                  case 'dynamic_select_list': {
                    const elCellText = Cypress.$(elCell).text();

                    cy.window().then((w) => {
                      w[
                        `Features_Edit_Control_DataGridControlAgGrid_CustomSelectRenderer${cell.row_num}-${cell.col_elm_id}`
                      ].setCanSendApi(false);
                    });
                    cy.wrap(elCell).click();
                    cy.get('.MuiMenu-paper')
                      .find('ul li')
                      .then((lis) => {
                        for (const li of lis as any as HTMLLIElement[]) {
                          if (Cypress.$(li).text() !== elCellText) {
                            cy.wrap(li).click().clickOutside();
                            beenEdited = true;
                            break;
                          }
                        }
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
                    cy.wrap(elCell).focus().realHover();

                    if (
                      columns[indexCell].track_modification &&
                      columns[indexCell].track_modification_tooltip
                    ) {
                      cy.get('.ag-popup .ag-popup-child .custom-tooltip')
                        .should('be.visible')
                        .invoke('text')
                        .then((t) => {
                          expect(t).to.equal(
                            `Previous Value:${(() => {
                              switch (cell.component) {
                                case 'decimal':
                                case 'integer':
                                case 'percent':
                                  return kFormatter(cell?.reference_value);
                                case 'financial':
                                  return `${
                                    columns[indexCell]?.currency_symbol
                                  }${kFormatter(cell?.reference_value)}`;
                                default:
                                  return cell?.reference_value || '';
                              }
                            })()}`,
                          );
                        });
                    } else
                      cy.get('.ag-popup .ag-popup-child .custom-tooltip')
                        .should('have.css', 'display', 'none')
                        .should('not.be.visible');

                    cy.wrap(elCell).realMouseMove(0, 50, {
                      position: 'center',
                    });
                    cy.wait(2000);
                  }
                });
              }
            },
          );
        });
    });
  });
}
