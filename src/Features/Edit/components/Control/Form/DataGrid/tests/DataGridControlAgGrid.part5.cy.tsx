// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part5.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailButtonsType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _translate, _hexToRgb } from '../../../../../../../../cypress/utils';
import { RowNode } from 'ag-grid-community';

describe('<DataGridControlAgGrid /> - part 5', function () {
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-2.json').then(
      (d) => (controlExample2 = d),
    );

    // Store the original timeout value
    originalTimeout = Cypress.config('defaultCommandTimeout');
  });

  beforeEach(() => {
    // Check if Cypress is running from the CLI or open interface
    // if (!Cypress.config('isTextTerminal')) cy.viewport(1600, 720);
    cy.viewport(1600, 720);
  });

  afterEach(() => {
    // Reset the timeout to its original value
    Cypress.config('defaultCommandTimeout', originalTimeout);
  });

  it('should render "Add row" button - controlExample2', function () {
    const trans_FR = _translate('fr', 'Edit', 'addLine');
    const trans_EN = _translate('en', 'Edit', 'addLine');
    const trans_DE = _translate('de', 'Edit', 'addLine');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          add_row_button_display: true,
        },
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('._Button').contains(new RegExp(translations.join('|')));
  });
  it('should render "Delete rows" button - controlExample2', function () {
    const trans_FR = _translate('fr', 'Edit', 'deleteRows');
    const trans_EN = _translate('en', 'Edit', 'deleteRows');
    const trans_DE = _translate('de', 'Edit', 'deleteRows');
    const translations = [trans_FR, trans_EN, trans_DE];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('._Button').contains(new RegExp(translations.join('|')));
  });

  it('Should render extra buttons - controlExample2', function () {
    const _buttons = [
      {
        button_bg_color: '#2EB82E',
        button_font_color: '#FFFFFF',
        button_id: 1,
        button_label: 'Declare Values',
        button_method: 'POST',
        button_order: 1,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
      {
        button_bg_color: '#2E54AA',
        button_font_color: '#FFEEBF',
        button_id: 1,
        button_label: 'Other button1',
        button_method: 'POST',
        button_order: 1,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
      {
        button_bg_color: '#FD59AA',
        button_font_color: '#FFEABF',
        button_id: 1,
        button_label: 'Other button2',
        button_method: 'POST',
        button_order: 1,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
    ];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        buttons: _buttons,
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('DataGridControlAgGrid')
      .react('ControlLabel')
      .next('div')
      .within(($elDiv) => {
        const totalButton = $elDiv.find('button').length;

        for (const indexBtn in _buttons) {
          const btn = _buttons[indexBtn];

          cy.wrap($elDiv)
            .react('Button')
            .find('button')
            .eq(totalButton - _buttons.length + parseInt(indexBtn))
            .should(
              'have.css',
              'background-color',
              _hexToRgb(btn.button_bg_color),
            )
            .should('have.css', 'color', _hexToRgb(btn.button_font_color))
            .contains(btn.button_label);
        }
      });
  });
  it('Should render extra buttons in the right order - controlExample2', function () {
    const _buttons: DataGridDetailButtonsType[] = [
      {
        button_bg_color: '#2EB82E',
        button_font_color: '#FFFFFF',
        button_id: 1,
        button_label: 'Declare Values',
        button_method: 'POST',
        button_order: 3,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
      {
        button_bg_color: '#2E54AA',
        button_font_color: '#FFEEBF',
        button_id: 1,
        button_label: 'Other button1',
        button_method: 'POST',
        button_order: 1,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
      {
        button_bg_color: '#FD59AA',
        button_font_color: '#FFEABF',
        button_id: 1,
        button_label: 'Other button2',
        button_method: 'POST',
        button_order: 6,
        button_refresh_callback: false,
        button_route: '/total_energies/declare_values',
        button_row_selected: true,
      },
    ];
    const reorderedBtns = [..._buttons];
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        buttons: _buttons,
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    reorderedBtns.sort((btn1, btn2) => {
      if (btn1.button_order < btn2.button_order) return -1;
      if (btn1.button_order > btn2.button_order) return 1;

      return 0;
    });

    cy.react('DataGridControlAgGrid')
      .react('ControlLabel')
      .next('div')
      .within(($elDiv) => {
        const totalButton = $elDiv.find('button').length;

        cy.wrap(reorderedBtns).each(
          (btn: DataGridDetailButtonsType, indexBtn) => {
            cy.wrap($elDiv)
              .react('Button')
              .find('button')
              .eq(totalButton - reorderedBtns.length + indexBtn)
              .should(
                'have.css',
                'background-color',
                _hexToRgb(btn.button_bg_color),
              )
              .should('have.css', 'color', _hexToRgb(btn.button_font_color))
              .contains(btn.button_label);
          },
        );
      });
  });

  it('should have selected_rows not empty when call endpoint declare values - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        datagrid_options: {
          ...structuredClone(
            controlExample2.data_grid_detail?.datagrid_options || {},
          ),
          delete_row_button_display: true,
        },
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '**/*/declare_values?*', {
        statusCode: 200,
        body: {},
      }).as('declareValueRequest');
      cy.get('._Button').contains('Declare Values').click();
      cy.window().then((w) => {
        cy.wait('@declareValueRequest').then((intercept) => {
          const { request } = intercept;
          const selected: any[] = [];
          w[
            'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
          ].gridRef.current.api.forEachNode((node) => {
            if (
              node.data[
                _control.data_grid_detail?.datagrid_options
                  ?.select_all_button_col_ref as string
              ]?.value === '1'
            ) {
              selected.push(node);
            }
          });
          expect(request.body.selected_rows.length).to.be.eq(selected.length);
          expect(request.body.selected_rows.length).to.be.gt(0);
          selected.forEach((node: RowNode) => {
            expect(request.body.selected_rows).to.include(node.data.row_uuid);
          });
        });
      });
    });
  });
});
