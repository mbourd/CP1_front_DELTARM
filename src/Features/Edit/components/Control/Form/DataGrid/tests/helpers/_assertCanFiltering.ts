// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import {
  IApiControl,
  DataGridDetailsColumnType,
} from '../../../../../../types';
import { getData } from './getData';

export function _assertCanFiltering(_control: IApiControl, waitMs = 500) {
  cy.wait(waitMs).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns }) => {
      cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
        cy.waitUntil(() => {
          const $col = Cypress.$(
            `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
          );

          if (col.hide) return true;

          return cy.realPress('ArrowRight').then(() => $col.is(':visible'));
        }).then(() => {
          if (col.hide) return;

          const $col = Cypress.$(
            `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
          );

          cy.wrap($col)
            .find('.ag-header-cell-menu-button')
            .realClick()
            .wait(3)
            .then(() => {
              cy.get(
                '.ag-menu .ag-menu-header [role="tab"][aria-label="filter"]',
              ).should(col.filter ? 'exist' : 'not.exist');
            })
            .then(() => {
              cy.realPress('Escape');
            });
        });
      });
    });
  });
}
