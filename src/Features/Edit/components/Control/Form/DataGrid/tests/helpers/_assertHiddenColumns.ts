import { DataGridDetailsColumnType, IApiControl } from 'Features/Edit/types';
import { getData } from './getData';
import { keyCodeDefinitions } from 'cypress-real-events/keyCodeDefinitions';

export function _assertHiddenColumns(_control: IApiControl) {
  cy.wait(155).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns }) => {
      cy.get('.ag-cell').eq(0).focus();

      cy.wrap(['ArrowRight', 'ArrowLeft']).each(
        (arrowDir: keyof typeof keyCodeDefinitions) => {
          cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
            cy.realPress(arrowDir).then(() => {
              if (arrowDir === 'ArrowRight')
                cy.get(
                  `.ag-header .ag-header-cell[col-id="${col.field}"]`,
                ).should(col.hide ? 'not.exist' : 'be.visible');
            });
          });
        },
      );
    });
  });
}
