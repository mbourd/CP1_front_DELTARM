// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import {
  IApiControl,
  DataGridDetailsColumnType,
} from '../../../../../../types';
import { getData } from './getData';

export function _assertResizableColumns(_control: IApiControl, waitMs = 500) {
  cy.wait(waitMs).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns }) => {
      cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
        const colId = col.field;
        let initialColWidth: number;

        cy.waitUntil(() => {
          const $col = Cypress.$(
            /*'.ag-theme-alpine ' +*/ `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
          );

          if (col.hide) return true;

          return cy
            .wrap(Array.from({ length: 3 }))
            .each(() => cy.realPress('ArrowRight'))
            .then(() => $col.is(':visible'));
        }).then(() => {
          if (col.hide) return;

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(3).then(() => {
            const $col = Cypress.$(
              /*'.ag-theme-alpine ' +*/ `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
            );
            initialColWidth = $col[0]?.getBoundingClientRect().width;

            if (col.resizable) {
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
                )
                .should('not.have.css', 'display', 'none !important')
                .should('not.have.css', 'display', 'none');
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
                )
                .realMouseDown()
                .realMouseMove(-1, 0)
                .realMouseUp();
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
                )
                .then(($headCell) => {
                  const width = $headCell[0].getBoundingClientRect().width;

                  expect(width).to.lessThan(initialColWidth);
                });
            } else {
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
                )
                .should('have.css', 'display')
                .and('match', new RegExp('none'));
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
                )
                .realMouseDown()
                .realMouseMove(-1, 0)
                .realMouseUp();
              cy.react('AgGridReact')
                .find(
                  `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
                )
                .then(($headCell) => {
                  const width = $headCell[0].getBoundingClientRect().width;

                  expect(width).to.equal(initialColWidth);
                });
              cy.get('.ag-cell').eq(0).realClick();
            }
          });
        });
      });
    });
  });
}
