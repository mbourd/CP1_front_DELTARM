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

describe('<CardAgGrid />', function () {
  const card: ICard = {
    cols: {
      values: [
        {
          border_right: false,
          label: 'col1',
          width: 100,
          field: 'rdg_1',
          dataKey: '',
          align: 'left',
        },
      ],
      header_visible: false,
    },
    lines: {
      values: [
        {
          id: 1,
          item: [
            {
              action: null,
              content: 'hello world',
              hint: null,
              icon: null,
              border_right: false,
            },
          ],
        },
      ],
      border_bottom: false,
    },
    title: {
      bg_color: '#419645',
      font_color: '#987654',
      lib: 'card title 1',
    },
    display: {
      page_nb_rows: 10,
      type: 'page',
    },
  };

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
      lines: {
        ...card.lines,
        values: Array.from({ length: _getRandomNumberBetween(233, 888) }).map(
          (v, i) => ({
            id: i,
            item: [
              {
                action: null,
                content: 'hello world' + i,
                hint: null,
                icon: null,
                border_right: false,
              },
            ],
          }),
        ),
      },
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
      lines: {
        ...card.lines,
        values: Array.from({ length: _getRandomNumberBetween(233, 888) }).map(
          (v, i) => ({
            id: i,
            item: [
              {
                action: null,
                content: 'hello world' + i,
                hint: null,
                icon: null,
                border_right: false,
              },
            ],
          }),
        ),
      },
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
