// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/CardAgGrid/CardAgGrid.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { CardAgGrid } from './CardAgGrid';
import { ICard } from '../types';
import {
  _getRandomNumberBetween,
  _hexToRgb,
} from '../../../../../cypress/utils';
import { AgDataGridStyle } from '../../../Edit/components/Control/Form/DataGrid/DataGridControl.style';
import {
  IApiControl,
  DataGridDetailsRow,
  DataGridDetailsRowsCell,
  DataGridDetailsColumnType,
} from '../../../Edit/types';

describe('<CardAgGrid />', function () {
  let card: ICard;

  before(() => {
    cy.fixture('card-aggrid-1.json').then((d) => (card = d));
  });

  it('should render', function () {
    const _card = {
      ...card,
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CardAgGrid').should('exist');
    cy.react('CardAgGrid').react('AgGridReact').should('exist');
  });

  it('should render the <Header/> with its title.lib', function () {
    const _card: ICard = {
      ...card,
      title: {
        ...card.title,
        lib: 'Hello word Card',
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CardAgGrid').react('Header').should('exist');
    cy.react('CardAgGrid').react('Header').should('have.text', _card.title.lib);
  });
  it('should render the <Header/> with bg_color/font_color', function () {
    const _card: ICard = {
      ...card,
      title: {
        ...card.title,
        bg_color: '#419645',
        font_color: '#987654',
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CardAgGrid')
      .react('Header')
      .should('have.css', 'background-color', _hexToRgb(_card.title.bg_color));
    cy.react('CardAgGrid')
      .react('Header')
      .find('span')
      .should('have.css', 'color', _hexToRgb(_card.title.font_color));
  });

  it('should have pagination size if type=page', function () {
    const _card: ICard = {
      ...card,
      display: {
        type: 'page',
        page_nb_rows: _getRandomNumberBetween(4, 15),
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(_card, _card.display.page_nb_rows);
  });

  it('should not have pagination if type=list', function () {
    const _card: ICard = {
      ...card,
      display: {
        type: 'list',
        page_nb_rows: 8,
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(_card, _card.lines.values.length);
  });

  it('should have fixed height', function () {
    const _card = {
      ...card,
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${AgDataGridStyle.styledComponentId}`).should(
      'have.css',
      'height',
      '400px',
    );
  });

  it('should be able to filter from the menu burger', function () {
    cy.on('uncaught:exception', () => false);
    cy.viewport(800, 750);
    const _card = {
      ...card,
      cols: {
        ...card.cols,
        values: [...card.cols.values].map((col) => {
          col.filter = true;
          col.floating_filter = false;

          return col;
        }),
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      _assertCanFiltering(
        w[
          'Features_DashboardDynamic_components_CardAgGrid_CardAgGrid|' +
            _card.title.lib
        ].control,
      );
    });
  });

  it('should be able to filter from the floating filter', function () {
    cy.on('uncaught:exception', () => false);
    cy.viewport(800, 750);
    const _card = {
      ...card,
      cols: {
        ...card.cols,
        values: [...card.cols.values].map((col) => {
          col.filter = true;
          col.floating_filter = true;

          return col;
        }),
      },
    };

    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.window().then((w) => {
      _assertCanFiltering(
        w[
          'Features_DashboardDynamic_components_CardAgGrid_CardAgGrid|' +
            _card.title.lib
        ].control,
      );
    });
  });

  it('should have the header compacted if col.floating_filter=true', function () {
    cy.on('uncaught:exception', () => false);
    cy.viewport(800, 750);
    const _card = {
      ...card,
      cols: {
        ...card.cols,
        values: [...card.cols.values].map((col) => {
          col.filter = true;
          col.floating_filter = true;

          return col;
        }),
      },
    };
    cy.mount(
      <SetupTestsComponents>
        <CardAgGrid
          card={_card}
          triggerAction={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('AgGridReact')
      .find('.ag-header-container')
      .should('have.css', 'height', '53px');
  });
});

function _assertPagination(_card: ICard, paginationSize: number) {
  cy.window().then((w) => {
    expect(
      w[
        'Features_Edit_Control_DataGridControlAgGrid'
      ].gridRef.current.api.getRenderedNodes().length,
    ).to.be.lte(paginationSize);
    expect(
      w[
        'Features_Edit_Control_DataGridControlAgGrid'
      ].gridRef.current.api.paginationGetPageSize(),
    ).to.be.equal(paginationSize);
  });
}

function _assertCanFiltering(_control: IApiControl) {
  const withControlData = getData(_control);

  withControlData(1, ({ columns }) => {
    cy.wrap(columns).each((col: DataGridDetailsColumnType, index) => {
      cy.waitUntil(() => {
        const $col = Cypress.$(
          `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
        );

        if (!$col.is(':visible') && !col.hide) {
          cy.wrap(new Array(6)).each(() => cy.realPress('ArrowRight'));
        } else return true;
      }).then(() => {
        const $col = Cypress.$(
          `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
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
          })
          .then(() => {
            if (col.floatingFilter) {
              cy.get(`.ag-floating-filter[aria-colindex="${index + 1}"]`)
                .find('input')
                .should('exist');
              cy.get(`.ag-floating-filter[aria-colindex="${index + 1}"]`)
                .find('input')
                .should('not.be.disabled');
            } else
              cy.get(
                `.ag-floating-filter[aria-colindex="${index + 1}"]`,
              ).should('not.exist');
          });
      });
    });
  });
}

function getData(_control: IApiControl) {
  const rows = _control.data_grid_detail?.rows || [];
  const columns = _control.data_grid_detail?.columns || [];

  return (
    numberRows: number | 'all',
    callback: (d: {
      indexRow: number;
      rows: DataGridDetailsRow[];
      row: DataGridDetailsRow;
      rowValues: DataGridDetailsRowsCell[];
      columns: DataGridDetailsColumnType[];
      getJqueryRowElement: () => JQuery<HTMLElement>;
    }) => void,
  ): void => {
    const count = numberRows === 'all' ? rows.length : numberRows;

    cy.wrap(new Array(count)).each((i, indexRow: number) => {
      const getJqueryRowElement = () =>
        Cypress.$(`.ag-row[row-index="${indexRow}"]:eq(0)`);
      const row = rows[indexRow];
      const rowValues: DataGridDetailsRowsCell[] = [];

      for (let i = 0; i < columns.length; i++) {
        const valRdg = columns[i].field.split('.')[0];
        rowValues.push(row[valRdg]);
      }

      callback({
        indexRow,
        rows,
        row,
        rowValues,
        columns,
        getJqueryRowElement,
      });
    });
  };
}
