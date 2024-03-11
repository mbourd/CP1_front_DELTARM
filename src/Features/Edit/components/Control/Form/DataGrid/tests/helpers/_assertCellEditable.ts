import { IApiControl } from 'Features/Edit/types';
import { getData } from './getData';

export function _assertCellEditable(_control: IApiControl) {
  cy.wait(500).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow, row }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((rowValue, indexCell: number) => {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            if (!cell.control_editable || !row.row_editable) {
              switch (cell.component) {
                case 'checkbox':
                  cy.wrap(elCell)
                    .find('input[type="checkbox"]')
                    .each(($cb) => {
                      cy.wrap($cb).should('be.disabled').should('be.visible');
                    });
                  break;
                case 'select_list':
                case 'dynamic_select_list':
                  cy.wrap(elCell).focus().realClick();
                  cy.get('.MuiMenu-paper').should('not.exist').clickOutside();
                  break;
                case 'text_alt':
                case 'date_string':
                case 'innerHTML':
                case 'text':
                case 'integer':
                case 'decimal':
                case 'financial':
                case 'percent':
                case 'comment':
                case 'long_text':
                  cy.wrap(elCell).focus().realType('1');
                  cy.wrap(elCell).find('input').should('not.exist');
                  cy.react('DataGridControlAgGrid')
                    .react('AgGridReact')
                    .find('.ag-popup textarea')
                    .should('not.exist');
                  break;
                case 'date':
                  cy.wrap(elCell)
                    .focus()
                    .find('input[type="date"]')
                    .should('be.disabled')
                    .should('be.visible');
                  break;
                case 'action_button':
                  cy.wrap(elCell).should('be.visible');
                  if (!cell.control_editable) {
                    cy.wrap(elCell).find('button').should('be.disabled');
                  } else
                    cy.wrap(elCell).find('button').should('not.be.disabled');
                  break;
                default:
                  break;
              }
            } else {
              switch (cell.component) {
                case 'checkbox':
                  cy.wrap(elCell)
                    .find('input[type="checkbox"]')
                    .each(($cb) => {
                      cy.wrap($cb)
                        .should('not.be.disabled')
                        .should('be.visible');
                    });
                  break;
                case 'select_list':
                case 'dynamic_select_list':
                  cy.wrap(elCell).focus().realClick();
                  cy.get('.MuiMenu-paper ul')
                    .should('exist')
                    .should('be.visible');
                  cy.get('.MuiMenu-paper ul')
                    .then(($ul) => {
                      expect($ul.find('li').length).to.be.equal(
                        cell.choice_options?.length,
                      );
                      cy.wrap($ul)
                        .find('li')
                        .each(($li, i) => {
                          expect($li.text()).to.be.equal(
                            cell.choice_options?.[i].choice_lib,
                          );
                        });
                    })
                    .clickOutside();
                  break;
                case 'text':
                case 'integer':
                case 'decimal':
                case 'financial':
                case 'percent':
                  cy.wrap(elCell).focus().realType('1');
                  cy.wrap(elCell).find('input').should('exist');
                  break;
                case 'comment':
                case 'long_text':
                  cy.wrap(elCell).focus().realType('1');
                  cy.react('DataGridControlAgGrid')
                    .react('AgGridReact')
                    .find('.ag-popup textarea')
                    .should('exist');
                  break;
                case 'date':
                  cy.wrap(elCell)
                    .focus()
                    .find('input[type="date"]')
                    .should('not.be.disabled')
                    .should('be.visible');
                  break;
                case 'formula':
                  cy.wrap(elCell).focus().realType('1');
                  cy.wrap(elCell).find('input').should('not.exist');
                  cy.react('DataGridControlAgGrid')
                    .react('AgGridReact')
                    .find('.ag-popup textarea')
                    .should('not.exist');
                  break;
                case 'action_button':
                  cy.wrap(elCell)
                    .find('button')
                    .should('not.be.disabled')
                    .should('be.visible');
                  break;
                default:
                  break;
              }
            }

            cy.clickOutside();

            // check the native AG Grid cell, that should not be editable
            switch (cell.component) {
              case 'checkbox_select_datagrid':
              case 'checkbox':
              case 'select_list':
              case 'dynamic_select_list':
              case 'date':
              case 'action_button':
              case 'radio':
              case 'multiple_list':
              case 'boolean':
              case 'formula':
              case 'icon':
                cy.wrap(elCell).focus().realType('1');
                cy.wrap(elCell).find('input[type="text"]').should('not.exist');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-popup textarea')
                  .should('not.exist');
                break;
              default:
                break;
            }

            cy.clickOutside();
          });
        });
    });
  });
}
