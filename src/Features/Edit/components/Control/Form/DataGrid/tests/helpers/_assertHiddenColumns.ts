// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import {
  DataGridDetailsColumnType,
  IApiControl,
} from '../../../../../../types';
import { getData } from './getData';
import { keyCodeDefinitions } from 'cypress-real-events/keyCodeDefinitions';

export function _assertHiddenColumns(_control: IApiControl, waitMs = 500) {
  cy.wait(waitMs).then(() => {
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
