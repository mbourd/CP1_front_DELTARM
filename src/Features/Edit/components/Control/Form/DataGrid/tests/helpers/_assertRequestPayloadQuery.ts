import { IApiControl } from '../../../../../../types';
import { getData } from './getData';

export function _assertRequestPayloadQueries(
  _control: IApiControl,
  _reqTest: { count: number },
  fileId: string,
  waitMs = 500,
) {
  Cypress.config('defaultCommandTimeout', 10000);

  cy.wait(waitMs).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow, row }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((rowValue, indexCell: number) => {
            const cell = rowValues[indexCell];

            if (!row.row_editable || !cell.control_editable) return;

            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            let value = '';

            cy.then(() => {
              switch (cell.component) {
                case 'checkbox':
                  // cy.wrap(elCell)
                  //   .find('input[type="checkbox"]')
                  //   .each(($cb) => {});
                  break;
                case 'select_list':
                case 'dynamic_select_list':
                  value = '1';

                  cy.wrap(elCell).focus().realClick();
                  cy.get('.MuiMenu-paper ul')
                    .then(($ul) => {
                      cy.wrap($ul).find('li').eq(0).realClick();
                    })
                    .clickOutside();
                  break;
                case 'text':
                case 'comment':
                case 'long_text':
                case 'integer':
                case 'decimal':
                case 'financial':
                case 'percent':
                  value = '123456789';

                  cy.wrap(elCell)
                    .focus()
                    .realClick()
                    .realPress(['ControlLeft', 'A'])
                    .realType(value);
                  break;
                case 'date':
                  value = '2020-03-23';

                  cy.wrap(elCell)
                    .focus()
                    .find('input[type="date"]')
                    .type(value)
                    .trigger('change')
                    .blur();
                  break;
                case 'action_button':
                  value = '&';

                  cy.wrap(elCell).find('button').realClick();
                  break;
                default:
                  break;
              }
            }).then(() => {
              cy.clickOutside();

              if (value)
                cy.wait('@reqSaveCellValue').then((interception) => {
                  const { request } = interception;
                  const { query } = request;

                  // eslint-disable-next-line cypress/no-unnecessary-waiting
                  cy.wait(255).then(() => {
                    expect(_reqTest.count).to.be.eq(1);

                    if (cell.component == 'action_button') {
                      cy.wrap(query).should('have.property', 'row_num');
                      cy.wrap(query).should('have.property', 'control_id');
                    } else {
                      cy.wrap(query).should('have.property', 'row_uuid');
                      cy.wrap(query).should('have.property', 'elm_val');
                      cy.wrap(query).should('have.property', 'fileId');
                    }

                    cy.wrap(query)
                      .should('have.property', 'col_elm_id')
                      .then(() => {
                        _reqTest.count = 0;

                        if (cell.component === 'action_button') {
                          expect(query['row_num']).to.be.eq(cell.row_num + '');
                          expect(query['control_id']).to.be.eq(
                            _control.control_id + '',
                          );
                        } else {
                          expect(query['fileId']).to.be.eq(fileId + '');
                          expect(query['row_uuid']).to.be.eq(row.row_uuid + '');
                          expect(query['elm_val']).to.be.eq(value);
                        }

                        expect(query['col_elm_id']).to.be.eq(
                          cell.col_elm_id + '',
                        );
                      });
                  });
                });
            });
          });
        });
    });
  });
}
