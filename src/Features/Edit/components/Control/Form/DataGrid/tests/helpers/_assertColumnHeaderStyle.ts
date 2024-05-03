// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from '../../../../../../types';
import { _hexToRgb } from '../../../../../../../../../cypress/utils';
import { getData } from './getData';

export function _assertColumnHeaderStyle(_control: IApiControl, waitMs = 500) {
  cy.wait(waitMs).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns }) => {
      cy.get('.ag-cell').eq(0).focus();

      cy.wrap(columns).each((cl, iCol: number) => {
        const col = columns[iCol];
        const colId = col.field;

        cy.waitUntil(() => {
          const $col = Cypress.$(
            `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
          );

          if (col.hide) return true;

          return cy
            .wrap(Array.from({ length: 1 }))
            .each(() => cy.realPress('ArrowRight'))
            .then(() => $col.is(':visible'));
        }).then(() => {
          if (col.hide) return;

          cy.react('AgGridReact')
            .find(
              `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
            )
            .should(
              'have.css',
              'background-color',
              _hexToRgb(
                columns.find((col) => col.field === colId)?.headerColor ||
                  '#FFFFFF',
              ),
            );
        });
      });
    });
  });
}
