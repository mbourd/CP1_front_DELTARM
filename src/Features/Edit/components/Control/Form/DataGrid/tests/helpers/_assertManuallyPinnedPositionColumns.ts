import { DataGridDetailsColumnType, IApiControl } from 'Features/Edit/types';
import { getData } from './getData';
import { _assertPinnedPositionColumns } from './_assertPinnedPositionColumns';
import { _getRandomNumberBetween } from '../../../../../../../../../cypress/utils';

export function _assertManuallyPinnedPositionColumns(_control: IApiControl) {
  cy.wait(500).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ columns, indexRow, getJqueryRowElement }) => {
      cy.wrap(columns)
        .each((col: DataGridDetailsColumnType, i) => {
          cy.waitUntil(() => {
            const $col = Cypress.$(
              `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
            );

            if (col.hide) return true;

            return cy.realPress('ArrowRight').then(() => $col.is(':visible'));
          }).then(() => {
            if (col.hide) return;

            const $col = Cypress.$(
              `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
            );
            const random = i < 2 ? i : _getRandomNumberBetween(0, 6);
            let direction: 'left' | 'right' | null = null;

            switch (random) {
              case 0:
                direction = 'left';
                break;
              case 1:
                direction = 'right';
                break;
              default:
                break;
            }

            cy.wrap($col)
              .find('.ag-header-cell-menu-button')
              .realClick()
              // .wait(500)
              .then(() => {
                if (col.lockPinned) {
                  cy.get('.ag-menu .ag-menu-list .ag-menu-option [ref="eName"]')
                    .contains('Épingler la colonne')
                    .should('not.exist');
                  cy.realPress('Escape').then(() => {
                    cy.wrap(
                      Cypress.$(
                        getJqueryRowElement('.ag-center-cols-viewport'),
                      ).find('.ag-cell'),
                    )
                      .eq(
                        Math.floor(
                          Cypress.$(
                            getJqueryRowElement('.ag-center-cols-viewport'),
                          ).find('.ag-cell').length / 2,
                        ),
                      )
                      .focus();
                  });
                } else
                  cy.get('.ag-menu .ag-menu-list .ag-menu-option [ref="eName"]')
                    .contains('Épingler la colonne')
                    .realHover()
                    // .wait(500)
                    .then(() => {
                      cy.get(
                        '.ag-menu.ag-popup-child[aria-label="SubMenu"] .ag-menu-option [ref="eName"]',
                      )
                        .contains(
                          direction === null
                            ? "Pas d'épingle"
                            : direction === 'left'
                              ? 'Goupille à gauche'
                              : 'Broche droite',
                        )
                        .click()
                        .then(() => {
                          const selector1 = '.ag-center-cols-viewport';
                          const selector2 = `.ag-row[row-index="${indexRow}"] .ag-cell`;
                          col.pinned = direction;

                          cy.get(selector1).within(($centerViewport) => {
                            const len = $centerViewport.find(selector2).length;

                            if (len) {
                              cy.get(selector2)
                                .eq(Math.floor(len / 2))
                                .focus();
                            }
                          });
                        });
                    });
              });
          });
        })
        .then(() => {
          _assertPinnedPositionColumns(_control);
        });
    });
  });
}
