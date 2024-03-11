import { IApiControl } from 'Features/Edit/types';
import { getData } from './getData';

export function _assertUnfocusCellClickAway(_control: IApiControl) {
  cy.wait(500).then(() => {
    cy.window().then((w) => {
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].setCanSendApi(false);
    });

    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          for (const indexCell in rowValues) {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            switch (cell.component) {
              case 'select_list':
              case 'dynamic_select_list':
                cy.wrap(elCell).focus().realClick().clickOutside();
                cy.get('.MuiMenu-paper').should('not.exist');
                break;
              case 'text':
              case 'long_text':
              case 'comment':
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent':
                cy.wrap(elCell).focus().realType('1').clickOutside();
                cy.wrap(elCell)
                  .find('input.ag-input-field-input')
                  .should('not.exist');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-popup textarea')
                  .should('not.exist');
                break;
              default:
                break;
            }
          }
        });
    });
  });
}
