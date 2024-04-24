// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { keyCodeDefinitions } from 'cypress-real-events/keyCodeDefinitions';
import '../../../../../../../../Features/Edit/translations';
import {
  IApiControl,
  DataGridDetailsColumnType,
} from '../../../../../../types';
import { getData } from './getData';

export function _assertPinnedPositionColumns(
  _control: IApiControl,
  waitMs = 500,
) {
  cy.wait(waitMs).then(() => {
    const classHeaderCellSelector =
      '.ag-header-row.ag-header-row-column .ag-header-cell';
    const withControlData = getData(_control);
    const caseMethod = (
      columns: DataGridDetailsColumnType[],
      col: DataGridDetailsColumnType,
    ) => {
      const compileIsPinned = (dir: 'left' | 'right') => {
        cy.react('DataGridControlAgGrid')
          .react('AgGridReact')
          .find(`.ag-pinned-${dir}-header`)
          .within(($headPinned) => {
            if ($headPinned.find(classHeaderCellSelector).length) {
              cy.wrap($headPinned)
                .find(classHeaderCellSelector)
                .then((headCells) => {
                  for (let i = 0; i < headCells.length; i++) {
                    const $headCell = Cypress.$(headCells[i]).find(
                      '.ag-header-cell-text',
                    );

                    if (isPinned[dir] === undefined)
                      if ($headCell.text() === col.headerName) {
                        isPinned[dir] = true;
                      } else if (i === headCells.length - 1)
                        isPinned[dir] = false;
                  }
                });
            } else isPinned[dir] = false;
          });
      };
      const isPinned: Partial<Record<'left' | 'right', boolean | undefined>> =
        {};

      compileIsPinned('left');
      compileIsPinned('right');
      cy.waitUntil(
        () => isPinned.left !== undefined && isPinned.right !== undefined,
      ).then(() => {
        if (col.pinned) {
          switch (col.pinned) {
            case 'left':
              if (col.hide) {
                expect(isPinned.left, col.headerName + ' left.').to.be.false;
                expect(isPinned.right, col.headerName).to.be.false;
              } else {
                expect(isPinned.left, col.headerName + ' left..').to.be.true;
                expect(isPinned.right, col.headerName).to.be.false;
              }
              break;
            case 'right':
              if (col.hide) {
                expect(isPinned.left, col.headerName + ' left...').to.be.false;
                expect(isPinned.right, col.headerName).to.be.false;
              } else {
                expect(isPinned.left, col.headerName + ' left....').to.be.false;
                expect(isPinned.right, col.headerName).to.be.true;
              }
              break;
            default:
              expect(isPinned.left, col.headerName + ' left.....').to.be.false;
              expect(isPinned.right, col.headerName).to.be.false;
              break;
          }
        } else {
          expect(isPinned.left, col.headerName + ' left......').to.be.false;
          expect(isPinned.right, col.headerName).to.be.false;
        }

        if (col.pinned && (col.pinned === 'left' || col.pinned === 'right')) {
          cy.wrap(['ArrowRight', 'ArrowLeft']).each(
            (arrowDir: keyof typeof keyCodeDefinitions) => {
              cy.wrap(columns).each(() => {
                cy.realPress(arrowDir).then(() => {
                  const isVisible = Cypress.$(
                    /*'.ag-theme-alpine ' +*/ `${classHeaderCellSelector}[col-id="${col.field}"]`,
                  ).is(':visible');

                  if (col.hide) expect(isVisible).to.be.false;
                  else expect(isVisible).to.be.true;
                });
              });
            },
          );
        }
      });
    };

    withControlData(1, ({ columns }) => {
      cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
        cy.get('.ag-cell').eq(0).focus();
        caseMethod(columns, col);
      });
    });
  });
}
