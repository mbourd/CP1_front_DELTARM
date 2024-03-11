// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

import { IApiControl } from 'Features/Edit/types';
import { getData } from './getData';
import { _hexToRgb } from '../../../../../../../../../cypress/utils';

export function _assertSelectListOptionsStyles(_control: IApiControl) {
  cy.wait(500).then(() => {
    const withControlData = getData(_control);

    withControlData(1, ({ rowValues, indexRow }) => {
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((c, indexCell: number) => {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            if (cell.control_editable && cell.component === 'select_list') {
              cy.wrap(elCell).focus().realClick();
              cy.get('.MuiMenu-paper ul')
                .then(($ul) => {
                  cy.wrap($ul)
                    .find('li')
                    .each(($li, i) => {
                      if (cell.choice_options[i].choice_font_color) {
                        expect(
                          _hexToRgb(cell.choice_options[i].choice_font_color),
                        ).to.not.null;
                        cy.wrap($li).should(
                          'have.css',
                          'color',
                          _hexToRgb(cell.choice_options[i].choice_font_color),
                        );
                      }
                      if (cell.choice_options[i].choice_bg_color) {
                        expect(
                          _hexToRgb(cell.choice_options[i].choice_bg_color),
                        ).to.not.null;
                        cy.wrap($li).should(
                          'have.css',
                          'background-color',
                          _hexToRgb(cell.choice_options[i].choice_bg_color),
                        );
                      }
                      if (cell.choice_options[i].choice_font_weight) {
                        expect(
                          cell.choice_options[i].choice_font_weight,
                        ).to.be.oneOf(['bold', 'bolder', 'normal', 'lighter']);
                        cy.wrap($li).should(
                          'have.css',
                          'font-weight',
                          cell.choice_options[i].choice_font_weight,
                        );
                      }
                    });
                })
                .clickOutside();
            }
          });
        });
    });
  });
}
