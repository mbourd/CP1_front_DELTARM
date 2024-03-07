import { IApiControl } from 'Features/Edit/types';
import { _escapeForRegExp } from '../../../../../../../../../cypress/utils';
import { generateRandExp } from './generateRandExp';
import { getData } from './getData';

export function _assertRegexValidation(_control: IApiControl) {
  // Set the temporary timeout for this test (e.g., 100 milliseconds)
  Cypress.config('defaultCommandTimeout', 100);
  cy.wait(155).then(() => {
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
          cy.wrap(rowValues).each((rowValue, indexCell: number) => {
            const cell = rowValues[indexCell];

            if (!cell.control_regex || !cell.control_editable) return;

            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];
            const strMatch = generateRandExp(
              new RegExp(cell.control_regex as any as string, 'i'),
              6,
            );
            const strNotMatch = generateRandExp(
              new RegExp(
                `^(?!.*${cell.control_regex as any as string}.*).*`,
                'i',
              ),
              6,
            );

            cy.wrap(elCell)
              .focus()
              .realType('1')
              .realPress(['ControlLeft', 'A'])
              .realPress('Backspace');
            cy.log(strMatch);
            if (['comment', 'long_text'].includes(cell.component)) {
              cy.react('DataGridControlAgGrid')
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
            cy.react('DataGridControlAgGrid').formErrorMessageShouldNotMatch(
              [_escapeForRegExp(cell.control_regex_msg as string) as string],
              'h1.errorsText',
            );
            cy.wait(50).then(() => {
              cy.wrap(elCell)
                .focus()
                .realType('1')
                .realPress(['ControlLeft', 'A'])
                .realPress('Backspace');
              if (['comment', 'long_text'].includes(cell.component)) {
                cy.react('DataGridControlAgGrid')
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
              cy.react('DataGridControlAgGrid').formErrorShouldBeVisible(
                [_escapeForRegExp(cell.control_regex_msg as string) as string],
                'h1.errorsText',
              );

              cy.wait(3250).then(() => {
                cy.react(
                  'DataGridControlAgGrid',
                ).formErrorMessageShouldNotMatch(
                  [
                    _escapeForRegExp(
                      cell.control_regex_msg as string,
                    ) as string,
                  ],
                  'h1.errorsText',
                );
                cy.wait(20);
              });
            });
          });
        });
    });
  });
}
