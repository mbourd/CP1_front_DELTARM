// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from '../../../../../../types';
import { getData } from './getData';

export function _assertColHeaderTooltip(_control: IApiControl, waitMs = 500) {
  Cypress.config('defaultCommandTimeout', 6000);
  cy.wait(waitMs).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .find('.ag-header-row.ag-header-row-column .ag-header-cell')
        .should('be.visible')
        .each(($el, i) => {
          cy.wrap($el).focus().realHover();

          if (columns[i].col_header_display_tooltip) {
            cy.get('.ag-popup .ag-popup-child')
              .should('be.visible')
              .invoke('text')
              .then((t) => {
                expect(t).to.be.equal(columns[i].col_header_tooltip ?? '');
              });
          } else {
            cy.wait(3000).then(() => {
              cy.get('.ag-popup .ag-popup-child .custom-tooltip')
                // .should('have.css', 'display', 'none')
                .should('not.be.visible');
            });
          }

          cy.wrap($el).realMouseMove(0, 50, { position: 'center' });
          cy.wait(2000);
        });
    });
  });
}
