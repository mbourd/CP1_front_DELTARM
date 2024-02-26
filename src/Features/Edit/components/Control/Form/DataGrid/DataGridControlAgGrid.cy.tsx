// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/DataGridControlAgGrid.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../cypress/utils/SetupTestsComponents';

import BigNumber from 'bignumber.js';
import RandExp from 'randexp';
import regexgen from 'regexgen';
import { create as mathCreate, all as mathAll } from 'mathjs';
import { RowNode } from 'ag-grid-community';
import { keyCodeDefinitions } from 'cypress-real-events/keyCodeDefinitions';

import { DataGridControlAgGrid } from './DataGridControlAgGrid';
import {
  DataGridDetailButtonsType,
  DataGridDetailsColumnType,
  DataGridDetailsRow,
  DataGridDetailsRowsCell,
  IApiControl,
} from '../../../../types';
import '../../../../../../Features/Edit/translations';
import {
  _escapeForRegExp,
  _getRandomNumberBetween,
  _hexToRgb,
  _translate,
} from '../../../../../../../cypress/utils';
import { AgDataGridStyle } from './DataGridControl.style';

describe('<DataGridControlAgGrid />', () => {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // checkbox,select,select,long_text,text,,,fin,fin
  let controlExample2: IApiControl;
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // text*n,select*n,number*n
  let controlExample5: IApiControl;
  // action_button,icon,checkbox
  let controlExample6: IApiControl;
  // innerHTML,test_alt,text_alt,date_string,icon,icon,icon
  let controlExample7: IApiControl;
  // innerHTML,test_alt,date_string,icon,icon,icon
  let controlExample8: IApiControl;

  let originalTimeout: number;

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
    );
    cy.fixture('controlDataGridAgGrid-2.json').then(
      (d) => (controlExample2 = d),
    );
    cy.fixture('controlDataGridAgGrid-3.json').then(
      (d) => (controlExample3 = d),
    );
    cy.fixture('controlDataGridAgGrid-4.json').then(
      (d) => (controlExample4 = d),
    );
    cy.fixture('controlDataGridAgGrid-5.json').then(
      (d) => (controlExample5 = d),
    );
    cy.fixture('controlDataGridAgGrid-6.json').then(
      (d) => (controlExample6 = d),
    );
    cy.fixture('controlDataGridAgGrid-7.json').then(
      (d) => (controlExample7 = d),
    );
    cy.fixture('controlDataGridAgGrid-8.json').then(
      (d) => (controlExample8 = d),
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

  it('should render - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });
  it('should render - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').react('AgGridReact').should('exist');
  });

  it('should have a fixed height - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={''}
          heightGrid={'456px'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${AgDataGridStyle.styledComponentId}`).should(
      'have.css',
      'height',
      '456px',
    );
  });
  it('should have a fixed height - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={''}
          heightGrid={233}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get(`.${AgDataGridStyle.styledComponentId}`).should(
      'have.css',
      'height',
      '233px',
    );
    cy.react('AgGridReact')
      .invoke('height')
      .then((height) => expect(height).to.be.eq(233));
  });

  it('Should have the correct number of columns - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
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
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('be.visible')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
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
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('be.visible')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample3', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
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
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample4', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
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
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
  });
  it('Should have the correct number of columns - controlExample5', function () {
    cy.viewport(3500, 720);

    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    const columns = _control.data_grid_detail?.columns || [];
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
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('have.length', columns.length)
      .each(($el, i) => {
        cy.wrap($el)
          .find('.ag-header-cell-text')
          .should('have.text', columns[i].headerName);
      });
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

  it('should have selected_rows not empty when call endpoint', function () {
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
        });
      });
    });
  });

  it('should render delete rows button - controlExample2', function () {
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

  it('should delete selected rows - controlExample2', function () {
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
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      cy.intercept('POST', '/control/data_grid/delete_row?file_id=*', {
        statusCode: 204,
        body: {},
      });
      cy.get('._Button')
        .contains(new RegExp(translations.join('|')))
        .click();
      cy.window().then((w) => {
        expect(
          w[
            'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
          ].gridRef.current.api.getDisplayedRowCount(),
        ).to.eq(0);
      });
    });
  });
  it('should display an error message if delete rows failed - controlExample2', function () {
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
        <DataGridControlAgGrid control={_control} fileId={'abcdefg'} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    cy.wait(100).then(() => {
      const error_msg = 'Erreur de suppression';
      cy.intercept('POST', '/control/data_grid/delete_row?file_id=*', {
        statusCode: 500,
        body: { error_msg },
        delay: 233,
      }).as('responseDeleteRows');
      cy.window().then((w) => {
        const intialCountRow =
          w[
            'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
          ].gridRef.current.api.getDisplayedRowCount();
        cy.get('._Button')
          .contains(new RegExp(translations.join('|')))
          .click();
        cy.react('DataGridControlAgGrid').formErrorShouldBeVisible([error_msg]);
        cy.then(() => {
          expect(
            w[
              'Features_Edit_Control_DataGridControlAgGrid' +
                _control.control_id
            ].gridRef.current.api.getDisplayedRowCount(),
          ).to.eq(intialCountRow);
        });
      });
    });
  });

  it('Should evaluate and format formula type correctly - controlExample3', function () {
    // @ts-ignore
    const _control: IApiControl = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    };
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertFormatAndEvalFormula(_control);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

            return row;
          });
        })(),
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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0, 1].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

            return row;
          });
        })(),
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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [0, 2].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

            return row;
          });
        })(),
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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  it('Should evaluate and format formula type correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]]) &&
                [2].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].control_editable = false;

            return row;
          });
        })(),
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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });
  // NOTE: FAIL because the formula is not correct therefore the component bugs TODO: prevent bug, display empty string ?
  it('Should FAIL (until fix) - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                row[Object.keys(row)[index]].component === 'formula' &&
                [3].includes(parseInt(index))
              )
                row[Object.keys(row)[index]].value = '(# * #7925)';

            return row;
          });
        })(),
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
    _assertFormatAndEvalFormula(_control as any as IApiControl);
  });

  it('Should format correctly - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control as any as IApiControl}
          fileId={''}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertFormat(_control);
  });
  it('Should format correctly - controlExample1', function () {
    // @ts-ignore
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(
            controlExample1.data_grid_detail
              ?.columns as any as DataGridDetailsColumnType[],
          ).map((col, i) => {
            col.decimal_digit += i + 2;
            col.thousand_separator = true;

            return col;
          }))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertFormat(_control);
  });

  it('Should sort correctly - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly with big numbers - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample1.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row))
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].value = `${BigNumber(
                  '900719925474099100000',
                )
                  .plus(_getRandomNumberBetween(1, 40000))
                  .toString()}${
                  row[Object.keys(row)[index]].component !== 'integer'
                    ? `.${_getRandomNumberBetween(1, 99999)}`
                    : ''
                }`;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly with empty cells - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row, indexRow) => {
            if (indexRow === 0 || indexRow === 4)
              for (const index in Object.keys(row))
                if (
                  typeof row[Object.keys(row)[index]] === 'object' &&
                  !Array.isArray(row[Object.keys(row)[index]]) &&
                  [0].includes(parseInt(index))
                )
                  row[Object.keys(row)[index]].value = null;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly with empty cells & big numbers - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row, indexRow) => {
            if (indexRow === 0 || indexRow === 4)
              for (const index in Object.keys(row))
                if (
                  typeof row[Object.keys(row)[index]] === 'object' &&
                  !Array.isArray(row[Object.keys(row)[index]]) &&
                  row[Object.keys(row)[index]].component !== 'formula'
                )
                  if ([0].includes(parseInt(index)))
                    row[Object.keys(row)[index]].value = null;
                  else
                    row[Object.keys(row)[index]].value = `${BigNumber(
                      '900719925474099100000',
                    )
                      .plus(_getRandomNumberBetween(1, 40000))
                      .toString()}${
                      row[Object.keys(row)[index]].component !== 'integer'
                        ? `.${_getRandomNumberBetween(1, 99999)}`
                        : ''
                    }`;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample5', function () {
    cy.viewport(3500, 750);
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample6', function () {
    cy.viewport(3500, 750);
    const _control = {
      ...structuredClone(controlExample6),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should sort correctly - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });

  it('Should NOT sort - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: structuredClone(
          controlExample7.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });
  it('Should NOT sort - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: structuredClone(
          controlExample8.data_grid_detail?.columns || [],
        ).map((col) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            sortable: false,
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSorting(_control);
  });

  it('Should be able to filter - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = true;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should be able to filter - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = true;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should be able to filter - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = true;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should be able to filter - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = true;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });

  it('Should not be able to filter - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = false;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should not be able to filter - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = false;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should not be able to filter - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = false;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });
  it('Should not be able to filter - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((column) => {
          column.filter = false;

          return column;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCanFiltering(_control);
  });

  it('Should render an error message if value dont match with control_regex & no error message if match - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              ) {
                if ([0, 1].includes(parseInt(index))) {
                  row[Object.keys(row)[index]].control_regex = new RegExp(
                    '^-?((180(\\.0+)?)|(((1[0-7]\\d)|(\\d{1,2}))(\\.\\d+)?))$',
                  );
                } else
                  row[Object.keys(row)[index]].control_regex = new RegExp(
                    '^-?(90(\\.0+)?|[1-8]?\\d(\\.\\d+)?)$',
                  );

                row[Object.keys(row)[index]].control_regex_msg =
                  'The value dont match with the regex';
              }
            }

            return row;
          });
        })(),
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
    _assertRegexValidation(_control as any as IApiControl);
  });
  it('Should render an error message if value dont match with control_regex & no error message if match - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              ) {
                row[Object.keys(row)[index]].control_regex = generateRegex(
                  Array.from({
                    length: _getRandomNumberBetween(3, 23),
                  }).map(() =>
                    listChars(_getRandomNumberBetween(30, 2333))(
                      _getRandomNumberBetween(6, 23),
                    ),
                  ),
                );

                row[Object.keys(row)[index]].control_regex_msg = 'Not valid';
              }
            }

            return row;
          });
        })(),
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
    _assertRegexValidation(_control as any as IApiControl);
  });

  it('Should be able to edit cell or not - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
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
    _assertCellEditable(_control as any as IApiControl);
  });
  it('Should be able to edit cell or not - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    _assertCellEditable(_control);
  });
  it('Should be able to edit cell or not - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should be able to edit or not - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample6.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              ) {
                row[Object.keys(row)[index]].choice_options = [
                  ...(row[Object.keys(row)[index]].choice_options || []),
                  {
                    choice_bg_color: 'FFFFFF',
                    choice_font_color: '000000',
                    choice_font_weight: 'normal',
                    choice_id: 2,
                    choice_lib: 'Checkbox 2',
                  },
                ];
              }
            }

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit cell if control_editable=false - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample2.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = false;
            }

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    _assertCellEditable(_control);
  });
  it('Should not be able to edit cell if control_editable=false - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = false;
            }

            return row;
          });
        })(),
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
    _assertCellEditable(_control as any as IApiControl);
  });
  it('Should not be able to edit cell if control_editable=false - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample5.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = false;
            }

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit cell if control_editable=false - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample6.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              ) {
                row[Object.keys(row)[index]].choice_options = [
                  ...(row[Object.keys(row)[index]].choice_options || []),
                  {
                    choice_bg_color: 'FFFFFF',
                    choice_font_color: '000000',
                    choice_font_weight: 'normal',
                    choice_id: 2,
                    choice_lib: 'Checkbox 2',
                  },
                ];
                row[Object.keys(row)[index]].control_editable = false;
              }
            }

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit cell if control_editable=false - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample6.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = false;
            }

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should be able to edit cell if control_editable=true - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail?.rows || [],
          ).map((row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = true;
            }

            return row;
          });
        })(),
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
    _assertCellEditable(_control as any as IApiControl);
  });

  it('Should unfocus editing cell when click away - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertUnfocusCellClickAway(_control);
  });
  it('Should unfocus editing cell when click away - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertUnfocusCellClickAway(_control);
  });
  it('Should unfocus editing cell when click away - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertUnfocusCellClickAway(_control);
  });

  it('Should not be able to edit if row_editable=false - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample1.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample3.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        rows: (() => {
          return structuredClone(
            controlExample4.data_grid_detail
              ?.rows as any as DataGridDetailsRow[],
          ).map((row) => {
            row.row_editable = false;

            return row;
          });
        })(),
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
    _assertCellEditable(_control as any as IApiControl);
  });
  it('Should not be able to edit if row_editable=false and every cell.control_editable=true - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        rows: structuredClone(
          controlExample5.data_grid_detail?.rows as any as DataGridDetailsRow[],
        ).map((row) => {
          for (const index in Object.keys(row)) {
            if (
              typeof row[Object.keys(row)[index]] === 'object' &&
              !Array.isArray(row[Object.keys(row)[index]])
            )
              row[Object.keys(row)[index]].control_editable = true;
          }

          row.row_editable = false;

          return row;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });
  it('Should not be able to edit if row_editable=false and every cell.control_editable=true - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        rows: structuredClone(controlExample6.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].control_editable = true;
            }

            row.row_editable = false;

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellEditable(_control);
  });

  it('should not have pagination - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        rows: (() => {
          const rows = structuredClone(controlExample1.data_grid_detail?.rows);
          const first = controlExample1.data_grid_detail
            ?.rows[0] as DataGridDetailsRow;

          for (let i = 0; i < 233; i++) {
            rows?.push(first);
          }

          return rows;
        })(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid
          control={_control}
          fileId={''}
          // @ts-ignore
          hasPagination={false}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(
      _control,
      _control.data_grid_detail?.rows.length as number,
    );
  });

  it('Should have the correct pagination size - controlExample1', function () {
    const paginationSize = _getRandomNumberBetween(1, 10);
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: {
          ...structuredClone(
            controlExample1.data_grid_detail?.datagrid_options || {},
          ),
          pagination_row_size: paginationSize,
        },
        rows: [
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
        ],
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(_control, paginationSize);
  });
  it('Should have the default pagination size - controlExample1', function () {
    const paginationSize = 20;
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: {
          ...structuredClone(
            controlExample1.data_grid_detail?.datagrid_options || {},
          ),
          pagination_row_size: null,
        },
        rows: [
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
          ...structuredClone(controlExample1.data_grid_detail?.rows || []),
        ],
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(_control, paginationSize);
  });
  it('Should have the default pagination size - controlExample1', function () {
    const paginationSize = 20;
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        datagrid_options: null,
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPagination(_control, paginationSize);
  });

  it('Should apply cell styles - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });

  it('Should be able to resize column - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = true;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample2.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample3.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample4.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample6.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample7.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;
              // @ts-ignore
              col.triggerAction = () => undefined;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });
  it('Should NOT be able to resize column - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample8.data_grid_detail?.columns || []).map(
            (col) => {
              col.resizable = false;

              return col;
            },
          ))(),
        rows: [controlExample8.data_grid_detail?.rows[0]],
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertResizableColumns(_control);
  });

  // NOTE: FAIL because aggrid render with color transparency (alpha) TODO:
  it('Should have styles applied for select_list choices options - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertSelectListOptionsStyles(_control);
  });

  it('Should have hidden columns by default - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col) => {
              col.hide = _getRandomNumberBetween(0, 3) === 0 ? true : false;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertHiddenColumns(_control);
  });

  it('Should have columns pinned - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'left';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample3.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'left';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample4.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'left';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col, i) => {
              if ([0, 2, 4, 6].includes(i)) col.pinned = 'left';
              else col.pinned = null;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample6.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'left';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });

  it('Should have columns pinned to right only - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample1.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'right';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample3.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'right';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample4.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'right';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col, i) => {
              if ([0, 2, 4, 6].includes(i)) col.pinned = 'right';
              else col.pinned = null;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample6.data_grid_detail?.columns || []).map(
            (col) => {
              col.pinned = 'right';

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should have some columns pinned to left and right - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: (() =>
          structuredClone(controlExample5.data_grid_detail?.columns || []).map(
            (col, i) => {
              if ([0, 2, 4].includes(i)) col.pinned = 'left';
              else if ([1, 3, 5].includes(i)) col.pinned = 'right';
              else col.pinned = null;

              return col;
            },
          ))(),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });
  it('Should NOT have pinned columns with unknown pinned value - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col, i) => {
          // @ts-ignore
          if ([0, 2, 4].includes(i)) col.pinned = 'qsdjqsd';
          else col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertPinnedPositionColumns(_control);
  });

  it('Should be able to pin column manually - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: structuredClone(
          controlExample7.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should be able to pin column manually - controlExample8', function () {
    const _control = {
      ...structuredClone(controlExample8),
      data_grid_detail: {
        ...structuredClone(controlExample8.data_grid_detail),
        columns: structuredClone(
          controlExample8.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = false;
          col.pinned = null;

          return col;
        }),
        rows: [controlExample8.data_grid_detail?.rows[0]],
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should NOT be able to pin column manually - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = true;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should NOT be able to pin column manually - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = true;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should NOT be able to pin column manually - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = true;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should NOT be able to pin column manually - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = true;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });
  it('Should NOT be able to pin column manually - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col) => {
          col.lockPinned = true;
          col.pinned = null;

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertManuallyPinnedPositionColumns(_control);
  });

  it('Should apply cell styles with track modification - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles with track modification - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: '',
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: '{"background-color": "", "color": ""}',
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });

  it('Should apply cell styles with track modification - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles with track modification - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: generateRandExp(/^#([0-9A-Fa-f]{6})$/),
            borderRightWidth: '3',
            track_modification: true,
            track_modification_option: `{"background-color": "${generateRandExp(
              /^#([0-9A-Fa-f]{6})$/,
            )}", "color": "${generateRandExp(/^#([0-9A-Fa-f]{6})$/)}"}`,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample5.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });
  it('Should apply cell styles - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail || {}),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            alignment: 'right',
            borderRight: true,
            borderRightColor: '#ff0000',
            borderRightWidth: '5',
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertCellStyle(_control);
  });

  it('Should apply header background color - controlExample5', function () {
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          col.headerColor = generateRandExp(/^#([0-9A-Fa-f]{6})$/);

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertColumnHeaderStyle(_control);
  });
  it('Should apply header background color - controlExample6', function () {
    const _control = {
      ...structuredClone(controlExample6),
      data_grid_detail: {
        ...structuredClone(controlExample6.data_grid_detail || {}),
        columns: structuredClone(
          controlExample6.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          col.headerColor = '#ff1234';

          return col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertColumnHeaderStyle(_control);
  });

  it('Should render tooltip when cell modified - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail || {}),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample2.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: true,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should render tooltip when cell modified - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          col.track_modification = true;
          col.track_modification_tooltip = true;

          return col;
        }),
        rows: structuredClone(controlExample5.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });

  it('Should NOT render tooltip when cell modified - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail || {}),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample2.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail || {}),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample3.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: true,
          };

          return _col;
        }),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail || {}),
        columns: structuredClone(
          controlExample1.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample2', function () {
    const _control = {
      ...structuredClone(controlExample2),
      data_grid_detail: {
        ...structuredClone(controlExample2.data_grid_detail || {}),
        columns: structuredClone(
          controlExample2.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample2.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail || {}),
        columns: structuredClone(
          controlExample3.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample3.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });
  it('Should NOT render tooltip when cell modified - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail || {}),
        columns: structuredClone(
          controlExample4.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            track_modification: false,
            track_modification_tooltip: false,
          };

          return _col;
        }),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            for (const index in Object.keys(row)) {
              if (
                typeof row[Object.keys(row)[index]] === 'object' &&
                !Array.isArray(row[Object.keys(row)[index]])
              )
                row[Object.keys(row)[index]].reference_value =
                  row[Object.keys(row)[index]].value;
            }

            return row;
          },
        ),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertTrackModifTooltip(_control);
  });

  it('Should render header tooltip if column.col_header_display_tooltip=true - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertColHeaderTooltip(_control);
  });
  it('Should render header tooltip and text tooltip from api - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            col_header_display_tooltip: true,
            col_header_tooltip: listChars()(_getRandomNumberBetween(6, 23)),
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertColHeaderTooltip(_control);
  });
  it('Should NOT render header tooltip - controlExample5', function () {
    cy.viewport(3500, 720);
    const _control = {
      ...structuredClone(controlExample5),
      data_grid_detail: {
        ...structuredClone(controlExample5.data_grid_detail || {}),
        columns: structuredClone(
          controlExample5.data_grid_detail?.columns || [],
        ).map((col: DataGridDetailsColumnType) => {
          const _col: DataGridDetailsColumnType = {
            ...structuredClone(col),
            col_header_display_tooltip: false,
            col_header_tooltip: 'azd',
          };

          return _col;
        }),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
    } as any as IApiControl;
    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    _assertColHeaderTooltip(_control);
  });
});

function kFormatter(num: string): string {
  if (num) return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return '';
}

function formatDecimalDigit(number, decimalDigits: number): string {
  const bigNumber = new BigNumber(number);
  const formattedNumber = bigNumber.toFixed(decimalDigits);

  return formattedNumber;
}
// function getRandomBigNumber(
//   decimal = false,
//   minExponent = 22,
//   maxExponent = 22,
//   precision = 50,
// ) {
//   const randomFloat = Math.random();
//   const randomAdjusted = randomFloat.toFixed(precision);
//   const randomBigNumber = new BigNumber(randomAdjusted);
//   const randExpo = _getRandomNumberBetween(minExponent, maxExponent);

//   const multipliedResult = randomBigNumber.times(`1e${randExpo}`);

//   return multipliedResult.toFixed(decimal ? _getRandomNumberBetween(1, 23) : 0);
// }

function generateRandExp<T = string>(regex: RegExp, max?: number): T {
  const reg = new RandExp(regex);

  if (max) reg.max = max;

  let randExp = reg.gen();
  while (randExp === '' || !regex.test(randExp)) randExp = reg.gen();

  return randExp as T;
}

function listChars(c?: string | number): (length: number) => string {
  let result = '';
  const chars =
    typeof c === 'string' || c === undefined
      ? c === undefined
        ? ''
        : c
      : Array.from({ length: c + 1 }, (_, i) =>
          String.fromCodePoint(i + 14),
        ).join('');
  const characters =
    chars === ''
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-+*/.=)àçç_è-(\'"é&]@^\\`|[{#~¨$£¤ù%*µ!§/:;,?<²>'
      : chars;
  // const charactersSplit = characters.match(/.{1}/gu);
  const charactersSplit = [...characters];

  return (length: number): string => {
    let counter = 0;
    while (counter < length) {
      result +=
        charactersSplit[_getRandomNumberBetween(0, charactersSplit.length - 1)];
      counter += 1;
    }

    return result;
  };
}
function generateRegex(list: string[]): RegExp {
  return new RegExp('^' + regexgen(list).source + '$');
}

// validate the correctness of formulas in a data grid by simulating user input, recalculating formula cells, and checking the evaluated results against expected values.
function _assertFormatAndEvalFormula(_control: IApiControl) {
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ rowValues, indexRow, columns }) => {
    let emptyCell = false;

    cy.wrap([0, 1]).each(() => {
      const editedCell = {};
      const formulas: {
        formula: string;
        ids: string[];
        indexCell: number;
      }[] = [];

      cy.react('DataGridControlAgGrid')
        .find('.ag-theme-alpine')
        .getAgGridElements()
        .then((elRows) => {
          for (const indexCell in rowValues) {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];
            let next = '';

            switch (cell.component) {
              case 'formula':
                formulas.push({
                  formula: rowValues[indexCell].value,
                  ids: [
                    ...new Set(rowValues[indexCell].value.match(/#\d+/g) || []),
                  ],
                  indexCell: parseInt(indexCell),
                });
                break;
              case 'integer':
              case 'percent':
              case 'decimal':
              case 'financial': {
                if (!cell.control_editable) continue;

                const strMatch = emptyCell
                  ? ''
                  : generateRandExp(
                      new RegExp(cell.control_regex as any as string, 'i'),
                      23,
                    );
                next = strMatch;
                cy.wrap(elCell)
                  .focus()
                  .realType('1')
                  .realPress(['ControlLeft', 'A'])
                  .realPress('Backspace');
                cy.log(next);
                if (emptyCell) {
                  cy.wrap(elCell).find('input').clickOutside();
                } else cy.wrap(elCell).find('input').type(next).clickOutside();

                editedCell[indexRow] = editedCell?.[indexRow] || {};
                editedCell[indexRow][indexCell] = {
                  next: emptyCell ? '@' : next,
                };
                break;
              }
              default:
                break;
            }
          }
        });

      cy.react('DataGridControlAgGrid')
        .find('.ag-theme-alpine')
        .getAgGridElements()
        .then((elRows) => {
          for (const formula of formulas) {
            let equation = formula.formula;

            for (const indexCell in rowValues) {
              if (rowValues[indexCell].component !== 'formula') {
                if (
                  formula.ids.includes('#' + rowValues[indexCell].col_elm_id)
                ) {
                  // @ts-ignore
                  equation = equation.replaceAll(
                    '#' + rowValues[indexCell].col_elm_id,
                    editedCell[indexRow][indexCell]
                      ? editedCell[indexRow][indexCell].next
                      : rowValues[indexCell].value,
                  );
                }
              }
            }

            cy.wrap(Object.values(elRows[indexRow])[formula.indexCell])
              .invoke('text')
              .then((t) => {
                const math = mathCreate(mathAll);
                const {
                  decimal_digit: decimalDigit,
                  currency_symbol: currencySymbol,
                  thousand_separator: hasThousandSeparator,
                } = columns[formula.indexCell];
                let result: string;

                math.config({ number: 'BigNumber' });

                try {
                  result = math.evaluate(equation);
                  result = formatDecimalDigit(result, decimalDigit);
                  result = hasThousandSeparator ? kFormatter(result) : result;
                  result = currencySymbol
                    ? `${currencySymbol} ${result}`
                    : result;
                } catch (error) {
                  result = '';
                }

                expect(t).to.be.equal(result);

                emptyCell = true;
              });
          }
        });
    });
  });
}

function _assertFormat(_control: IApiControl) {
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);
  const limits = [100, 6];

  withControlData(1, ({ rowValues, indexRow, columns }) => {
    cy.wrap(limits).each((max: number) => {
      // Check each cell without new value
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((c, indexCell: number) => {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];
            const prev = cell.value;

            switch (cell.component) {
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent': {
                const {
                  decimal_digit: decimalDigit,
                  currency_symbol: currencySymbol,
                  thousand_separator: hasThousandSeparator,
                } = columns[indexCell];

                cy.wrap(elCell)
                  .invoke('text')
                  .then((t) => {
                    let result: string;
                    try {
                      result = formatDecimalDigit(
                        prev,
                        cell.component === 'integer' ? 0 : decimalDigit,
                      );
                      result = hasThousandSeparator
                        ? kFormatter(result)
                        : result;
                      if (currencySymbol) {
                        result = `${currencySymbol}${result}`;
                      } else if (cell.component === 'financial') {
                        cy.wrap(elCell).find('svg').should('be.visible');
                      }
                      result =
                        cell.component === 'percent' ? `% ${result}` : result;
                    } catch (error) {
                      result = '';
                    }
                    expect(t).to.be.equal(result);
                  });
                break;
              }
              default:
                break;
            }
          });
        });

      // Check each cell with new value
      cy.react('DataGridControlAgGrid')
        .react('AgGridReact')
        .getAgGridElements()
        .then((elRows) => {
          cy.wrap(rowValues).each((c, indexCell: number) => {
            const cell = rowValues[indexCell];
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            switch (cell.component) {
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent': {
                const {
                  decimal_digit: decimalDigit,
                  currency_symbol: currencySymbol,
                  thousand_separator: hasThousandSeparator,
                } = columns[indexCell];
                if (cell.control_regex) {
                  const strMatch = generateRandExp(
                    new RegExp(cell.control_regex as any as string, 'i'),
                    max,
                  );
                  cy.wrap(elCell)
                    .focus()
                    .realType('1')
                    .realPress(['ControlLeft', 'A'])
                    .realPress('Backspace');
                  cy.log(strMatch);
                  cy.wrap(elCell).find('input').type(strMatch).clickOutside();

                  cy.wrap(elCell)
                    .invoke('text')
                    .then((t) => {
                      let result: string;

                      try {
                        result = formatDecimalDigit(
                          strMatch,
                          cell.component === 'integer' ? 0 : decimalDigit,
                        );
                        result = hasThousandSeparator
                          ? kFormatter(result)
                          : result;
                        if (currencySymbol) {
                          result = `${currencySymbol}${result}`;
                        } else if (cell.component === 'financial') {
                          cy.wrap(elCell).find('svg').should('be.visible');
                        }
                        result =
                          cell.component === 'percent' ? `% ${result}` : result;
                      } catch (error) {
                        result = '';
                      }
                      expect(t).to.be.equal(result);
                    });
                }
                break;
              }
              default:
                break;
            }
          });
        });
    });
  });
}

function _assertCellEditable(_control: IApiControl) {
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ rowValues, indexRow, row }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .getAgGridElements()
      .then((elRows) => {
        cy.wrap(rowValues).each((rowValue, indexCell: number) => {
          const cell = rowValues[indexCell];
          const listCells = Object.values(elRows[indexRow]);
          const elCell: HTMLElement = listCells[indexCell];

          if (!cell.control_editable || !row.row_editable) {
            switch (cell.component) {
              case 'checkbox':
                cy.wrap(elCell)
                  .find('input[type="checkbox"]')
                  .each(($cb) => {
                    cy.wrap($cb).should('be.disabled').should('be.visible');
                  });
                break;
              case 'select_list':
              case 'dynamic_select_list':
                cy.wrap(elCell).focus().realClick();
                cy.get('.MuiMenu-paper').should('not.exist').clickOutside();
                break;
              case 'text_alt':
              case 'date_string':
              case 'innerHTML':
              case 'text':
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent':
              case 'comment':
              case 'long_text':
                cy.wrap(elCell).focus().realType('1');
                cy.wrap(elCell).find('input').should('not.exist');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-popup textarea')
                  .should('not.exist');
                break;
              case 'date':
                cy.wrap(elCell)
                  .focus()
                  .find('input[type="date"]')
                  .should('be.disabled')
                  .should('be.visible');
                break;
              case 'action_button':
                cy.wrap(elCell).should('be.visible');
                if (!cell.control_editable) {
                  cy.wrap(elCell).find('button').should('be.disabled');
                } else cy.wrap(elCell).find('button').should('not.be.disabled');
                break;
              default:
                break;
            }
          } else {
            switch (cell.component) {
              case 'checkbox':
                cy.wrap(elCell)
                  .find('input[type="checkbox"]')
                  .each(($cb) => {
                    cy.wrap($cb).should('not.be.disabled').should('be.visible');
                  });
                break;
              case 'select_list':
              case 'dynamic_select_list':
                cy.wrap(elCell).focus().realClick();
                cy.get('.MuiMenu-paper ul')
                  .should('exist')
                  .should('be.visible');
                cy.get('.MuiMenu-paper ul')
                  .then(($ul) => {
                    expect($ul.find('li').length).to.be.equal(
                      cell.choice_options?.length,
                    );
                    cy.wrap($ul)
                      .find('li')
                      .each(($li, i) => {
                        expect($li.text()).to.be.equal(
                          cell.choice_options?.[i].choice_lib,
                        );
                      });
                  })
                  .clickOutside();
                break;
              case 'text':
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent':
                cy.wrap(elCell).focus().realType('1');
                cy.wrap(elCell).find('input').should('exist');
                break;
              case 'comment':
              case 'long_text':
                cy.wrap(elCell).focus().realType('1');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-popup textarea')
                  .should('exist');
                break;
              case 'date':
                cy.wrap(elCell)
                  .focus()
                  .find('input[type="date"]')
                  .should('not.be.disabled')
                  .should('be.visible');
                break;
              case 'formula':
                cy.wrap(elCell).focus().realType('1');
                cy.wrap(elCell).find('input').should('not.exist');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-popup textarea')
                  .should('not.exist');
                break;
              case 'action_button':
                cy.wrap(elCell)
                  .find('button')
                  .should('not.be.disabled')
                  .should('be.visible');
                break;
              default:
                break;
            }
          }

          cy.clickOutside();

          // check the native AG Grid cell, that should not be editable
          switch (cell.component) {
            case 'checkbox_select_datagrid':
            case 'checkbox':
            case 'select_list':
            case 'dynamic_select_list':
            case 'date':
            case 'action_button':
            case 'radio':
            case 'multiple_list':
            case 'boolean':
            case 'formula':
            case 'icon':
              cy.wrap(elCell).focus().realType('1');
              cy.wrap(elCell).find('input[type="text"]').should('not.exist');
              cy.react('DataGridControlAgGrid')
                .react('AgGridReact')
                .find('.ag-popup textarea')
                .should('not.exist');
              break;
            default:
              break;
          }

          cy.clickOutside();
        });
      });
  });
}
function _assertUnfocusCellClickAway(_control: IApiControl) {
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ rowValues, indexRow }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .getAgGridElements()
      .then((elRows) => {
        for (const indexCell in rowValues) {
          const cell = rowValues[indexCell];
          const listCells = Object.values(elRows[indexRow]);
          const elCell: HTMLElement = listCells[indexCell];

          switch (cell.component) {
            case 'select_list':
            case 'dynamic_select_list':
              cy.wrap(elCell).focus().realClick().clickOutside();
              cy.get('.MuiMenu-paper').should('not.exist');
              break;
            case 'text':
            case 'long_text':
            case 'comment':
            case 'integer':
            case 'decimal':
            case 'financial':
            case 'percent':
              cy.wrap(elCell).focus().realType('1').clickOutside();
              cy.wrap(elCell)
                .find('input.ag-input-field-input')
                .should('not.exist');
              cy.react('DataGridControlAgGrid')
                .react('AgGridReact')
                .find('.ag-popup textarea')
                .should('not.exist');
              break;
            default:
              break;
          }
        }
      });
  });
}

function _assertRegexValidation(_control: IApiControl) {
  // Set the temporary timeout for this test (e.g., 100 milliseconds)
  Cypress.config('defaultCommandTimeout', 100);
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ rowValues, indexRow }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .getAgGridElements()
      .then((elRows) => {
        cy.wrap(rowValues).each((rowValue, indexCell: number) => {
          const cell = rowValues[indexCell];

          if (!cell.control_regex || !cell.control_editable) return;

          const listCells = Object.values(elRows[indexRow]);
          const elCell: HTMLElement = listCells[indexCell];
          const strMatch = generateRandExp(
            new RegExp(cell.control_regex as any as string, 'i'),
            6,
          );
          const strNotMatch = generateRandExp(
            new RegExp(
              `^(?!.*${cell.control_regex as any as string}.*).*`,
              'i',
            ),
            6,
          );

          cy.wrap(elCell)
            .focus()
            .realType('1')
            .realPress(['ControlLeft', 'A'])
            .realPress('Backspace');
          cy.log(strMatch);
          if (['comment', 'long_text'].includes(cell.component)) {
            cy.react('DataGridControlAgGrid')
              .react('AgGridReact')
              .find('.ag-large-text-input textarea')
              .focus()
              .type(strMatch, {
                parseSpecialCharSequences: false,
              });
          } else
            cy.wrap(elCell).find('input').type(strMatch, {
              parseSpecialCharSequences: false,
            });
          cy.clickOutside();
          cy.clickOutside();
          cy.react('DataGridControlAgGrid').formErrorMessageShouldNotMatch(
            [_escapeForRegExp(cell.control_regex_msg as string) as string],
            'h1.errorsText',
          );
          cy.wait(50);

          cy.wrap(elCell)
            .focus()
            .realType('1')
            .realPress(['ControlLeft', 'A'])
            .realPress('Backspace');
          cy.log(strNotMatch);
          if (['comment', 'long_text'].includes(cell.component)) {
            cy.react('DataGridControlAgGrid')
              .react('AgGridReact')
              .find('.ag-large-text-input textarea')
              .focus()
              .type(strNotMatch, {
                parseSpecialCharSequences: false,
              });
          } else
            cy.wrap(elCell).find('input').type(strNotMatch, {
              parseSpecialCharSequences: false,
            });
          cy.clickOutside();
          cy.clickOutside();
          cy.react('DataGridControlAgGrid').formErrorShouldBeVisible(
            [_escapeForRegExp(cell.control_regex_msg as string) as string],
            'h1.errorsText',
          );

          cy.wait(3250);
          cy.react('DataGridControlAgGrid').formErrorMessageShouldNotMatch(
            [_escapeForRegExp(cell.control_regex_msg as string) as string],
            'h1.errorsText',
          );
          cy.wait(500);
        });
      });
  });
}

function _assertPagination(_control: IApiControl, paginationSize: number) {
  cy.window().then((w) => {
    expect(
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].gridRef.current.api.getRenderedNodes().length,
    ).to.be.lte(paginationSize);
    expect(
      w[
        'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
      ].gridRef.current.api.paginationGetPageSize(),
    ).to.be.equal(paginationSize);
  });
}

function _assertSorting(_control: IApiControl) {
  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });
  const columns = _control.data_grid_detail?.columns || [];
  const processRowData = (rowNode: RowNode) => {
    const row = {};

    for (const col of columns) {
      if (col.field_type === 'formula') {
        const math = mathCreate(mathAll);
        const ids = new Set<string>(
          rowNode.data[col.field.split('.')[0]].value.match(/#\d+/g),
        );
        let equation: string = rowNode.data[col.field.split('.')[0]].value;

        Object.values<DataGridDetailsRowsCell>(rowNode.data).forEach((obj) => {
          const colElmId = '#' + obj.col_elm_id;
          const objValue = obj.value;

          if (ids.has(colElmId))
            equation = equation.replace(
              new RegExp(colElmId, 'g'),
              objValue ? objValue : '@@@',
            );
        });
        math.config({ number: 'BigNumber' });

        try {
          const result = math.evaluate(equation);
          row[col.field] = math.format(result, {
            notation: 'fixed',
            precision: 0,
          });
        } catch (error) {
          row[col.field] = '';
        }
      } else row[col.field] = rowNode.data[col.field.split('.')[0]].value ?? '';
    }

    return row;
  };

  cy.window().then((cyWindow) => {
    const unsortedData: Record<string, any>[] = [];
    cyWindow[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].gridRef.current.api.forEachNode((rowNode) => {
      unsortedData.push(processRowData(rowNode));
    });

    cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
      if (col.sortable) {
        let expectedSortedDataASC: Record<string, any>[] = [];
        let expectedSortedDataDESC: Record<string, any>[] = [];

        switch (col.field_type) {
          case 'date':
            expectedSortedDataASC = [...unsortedData].sort((a, b) => {
              const dateA = new Date(
                a[col.field] ? a[col.field] : '1970-01-01',
              );
              const dateB = new Date(
                b[col.field] ? b[col.field] : '1970-01-01',
              );

              return dateA.getTime() - dateB.getTime();
            });
            expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
              const dateA = new Date(
                a[col.field] ? a[col.field] : '1970-01-01',
              );
              const dateB = new Date(
                b[col.field] ? b[col.field] : '1970-01-01',
              );

              return dateB.getTime() - dateA.getTime();
            });
            break;
          case 'checkbox':
          case 'icon':
          case 'action_button':
          case 'text':
          case 'long_text':
          case 'text_alt':
          case 'comment':
          case 'select_list':
          case 'dynamic_select_list':
            expectedSortedDataASC = [...unsortedData].sort((a, b) => {
              const valueA = a[col.field] ? a[col.field] : '';
              const valueB = b[col.field] ? b[col.field] : '';

              return valueA.localeCompare(valueB, undefined, {
                sensitivity: 'base',
              });
            });
            expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
              const valueA = a[col.field] ? a[col.field] : '';
              const valueB = b[col.field] ? b[col.field] : '';

              return valueB.localeCompare(valueA, undefined, {
                sensitivity: 'base',
              });
            });
            break;
          case 'date_string':
            expectedSortedDataASC = [...unsortedData].sort((a, b) => {
              const valA = a[col.field] ? a[col.field] : '--/--/--';
              const valB = b[col.field] ? b[col.field] : '--/--/--';
              const [dayA, monthA, yearA] = valA.split(' ')[0].split('/');
              const [dayB, monthB, yearB] = valB.split(' ')[0].split('/');
              const strDateA = `${monthA}-${dayA}-${yearA} ${
                /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valA)
                  ? valA.split(' - ')[1]
                  : '00:00:00'
              }`;
              const strDateB = `${monthB}-${dayB}-${yearB} ${
                /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valB)
                  ? valB.split(' - ')[1]
                  : '00:00:00'
              }`;
              const dateA = new Date(
                valA !== '--/--/--' ? strDateA : '1970-01-01',
              );
              const dateB = new Date(
                valB !== '--/--/--' ? strDateB : '1970-01-01',
              );

              if (dateA.getTime() > dateB.getTime()) return 1;
              if (dateA.getTime() < dateB.getTime()) return -1;

              return 0;
            });
            expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
              const valA = a[col.field] ? a[col.field] : '--/--/--';
              const valB = b[col.field] ? b[col.field] : '--/--/--';
              const [dayA, monthA, yearA] = valA.split(' ')[0].split('/');
              const [dayB, monthB, yearB] = valB.split(' ')[0].split('/');
              const strDateA = `${monthA}-${dayA}-${yearA} ${
                /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valA)
                  ? valA.split(' - ')[1]
                  : '00:00:00'
              }`;
              const strDateB = `${monthB}-${dayB}-${yearB} ${
                /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valB)
                  ? valB.split(' - ')[1]
                  : '00:00:00'
              }`;
              const dateA = new Date(
                valA !== '--/--/--' ? strDateA : '1970-01-01',
              );
              const dateB = new Date(
                valB !== '--/--/--' ? strDateB : '1970-01-01',
              );

              if (dateA.getTime() > dateB.getTime()) return -1;
              if (dateA.getTime() < dateB.getTime()) return 1;

              return 0;
            });
            break;
          case 'innerHTML':
            expectedSortedDataASC = [...unsortedData].sort((a, b) => {
              const _valA = a[col.field] ? a[col.field] : '';
              const _valB = b[col.field] ? b[col.field] : '';
              const strippedStringA = _valA.replace(/(<([^>]+)>)/gi, ' ');
              const strippedStringB = _valB.replace(/(<([^>]+)>)/gi, ' ');

              if (strippedStringA == strippedStringB) return 0;

              return strippedStringA > strippedStringB ? 1 : -1;
            });
            expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
              const _valA = a[col.field] ? a[col.field] : '';
              const _valB = b[col.field] ? b[col.field] : '';
              const strippedStringA = _valA.replace(/(<([^>]+)>)/gi, ' ');
              const strippedStringB = _valB.replace(/(<([^>]+)>)/gi, ' ');

              if (strippedStringA == strippedStringB) return 0;

              return strippedStringB > strippedStringA ? 1 : -1;
            });
            break;
          case 'integer':
          case 'decimal':
          case 'financial':
          case 'percent':
          case 'formula':
            expectedSortedDataASC = [...unsortedData].sort((a, b) => {
              const vA = a[col.field];
              const vB = b[col.field];

              // Handling null values
              if (vA === null || vA === undefined || vA === '')
                return vB === null || vB === undefined || vB === '' ? 0 : -1;
              if (vB === null || vB === undefined || vB === '') return 1;

              const v1 = new BigNumber(vA.replace(/[^0-9.-]+/g, ''));
              const v2 = new BigNumber(vB.replace(/[^0-9.-]+/g, ''));

              return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
            });
            expectedSortedDataDESC = [...unsortedData].sort((a, b) => {
              const vA = a[col.field];
              const vB = b[col.field];

              // Handling null values
              if (vB === null || vB === undefined || vB === '')
                return vA === null || vA === undefined || vA === '' ? 0 : -1;
              if (vA === null || vA === undefined || vA === '') return 1;

              const v1 = new BigNumber(vA.replace(/[^0-9.-]+/g, ''));
              const v2 = new BigNumber(vB.replace(/[^0-9.-]+/g, ''));

              return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? 1 : -1;
            });
            break;
          default:
            expectedSortedDataASC = [...unsortedData];
            expectedSortedDataDESC = [...unsortedData];
            break;
        }

        expectedSortedDataASC = expectedSortedDataASC.slice(
          0,
          _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
            20,
        );
        expectedSortedDataDESC = expectedSortedDataDESC.slice(
          0,
          _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
            20,
        );

        cy.then(() => {
          cy.react('DataGridControlAgGrid')
            .react('AgGridReact')
            .find(`.ag-header-cell[col-id="${col.field}"]`)
            .agGridSortColumn(
              _escapeForRegExp(col.headerName) as string,
              'ascending',
            )
            .then(() => {
              const actualTableData = cyWindow[
                'Features_Edit_Control_DataGridControlAgGrid' +
                  _control.control_id
              ].gridRef.current.api
                .getRenderedNodes()
                .map(processRowData);
              // console.log('u', unsortedData);
              // console.log('a', actualTableData);
              // console.log('asc', expectedSortedDataASC);
              expect(actualTableData).to.deep.equal(expectedSortedDataASC);
            });
        }).then(() => {
          cy.react('DataGridControlAgGrid')
            .react('AgGridReact')
            .find(`.ag-header-cell[col-id="${col.field}"]`)
            .agGridSortColumn(
              _escapeForRegExp(col.headerName) as string,
              'descending',
            )
            .then(() => {
              const actualTableData = cyWindow[
                'Features_Edit_Control_DataGridControlAgGrid' +
                  _control.control_id
              ].gridRef.current.api
                .getRenderedNodes()
                .map((rowNode) => processRowData(rowNode));
              expect(actualTableData).to.deep.equal(expectedSortedDataDESC);
            });
        });
      } else {
        cyWindow[
          'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
        ].gridRef.current.api.paginationSetPageSize(
          _control.data_grid_detail?.datagrid_options?.pagination_row_size ??
            9999,
        );
        cy.react('DataGridControlAgGrid')
          .react('AgGridReact')
          .find(`.ag-header-cell[col-id="${col.field}"]`)
          .realClick()
          .then(() => {
            const actualTableData = cyWindow[
              'Features_Edit_Control_DataGridControlAgGrid' +
                _control.control_id
            ].gridRef.current.api
              .getRenderedNodes()
              .map((rowNode: RowNode) => processRowData(rowNode));
            // console.log('u', unsortedData);
            // console.log('a', actualTableData);
            expect(actualTableData).to.deep.equal(
              unsortedData.slice(
                0,
                _control.data_grid_detail?.datagrid_options
                  ?.pagination_row_size ?? 9999,
              ),
            );
          });
      }
    });
  });
}

function _assertCanFiltering(_control: IApiControl) {
  const withControlData = getData(_control);

  withControlData(1, ({ columns }) => {
    cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
      cy.waitUntil(() => {
        const $col = Cypress.$(
          `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
        );

        if (!$col.is(':visible') && !col.hide) {
          cy.wrap(
            new Array(
              Cypress.$('.ag-header-cell:not(.ag-floating-filter)').length,
            ),
          ).each(() => cy.realPress('ArrowRight'));
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
          });
      });
    });
  });
}

function _assertCellStyle(_control: IApiControl) {
  Cypress.config('defaultCommandTimeout', 6000);

  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ rowValues, indexRow, columns }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .getAgGridElements()
      .then((elRows) => {
        cy.wrap(rowValues).each((c, indexCell: number) => {
          const cell = rowValues[indexCell];
          const listCells = Object.values(elRows[indexRow]);
          const elCell: HTMLElement = listCells[indexCell];

          if (cell.component !== 'checkbox_select_datagrid')
            cy.wrap(elCell)
              .should(
                'have.css',
                'text-align',
                columns[indexCell].alignment
                  ? columns[indexCell].alignment
                  : 'left',
              )
              .should(
                'have.css',
                'border-right',
                columns[indexCell].borderRight
                  ? `${columns[indexCell].borderRightWidth}px solid ${_hexToRgb(
                      columns[indexCell].borderRightColor
                        ? columns[indexCell].borderRightColor
                        : '#000000',
                    )}`
                  : '0px none rgb(0, 0, 0)',
              );

          if (cell.control_editable && columns[indexCell].track_modification) {
            let beenEdited = false;
            const bgColor: string | undefined = JSON.parse(
              columns[indexCell].track_modification_option,
            )?.['background-color'];
            const color: string | undefined = JSON.parse(
              columns[indexCell].track_modification_option,
            )?.['color'];

            switch (cell.component) {
              case 'select_list':
              case 'dynamic_select_list': {
                const elCellText = Cypress.$(elCell).text();

                cy.window().then((w) => {
                  w[
                    `Features_Edit_Control_DataGridControlAgGrid_CustomSelectRenderer${cell?.row_num}-${cell?.col_elm_id}`
                  ].setCanSendApi(false);
                });
                cy.wrap(elCell).click();
                cy.get('.MuiMenu-paper')
                  .find('ul li')
                  .then((lis) => {
                    for (const li of lis as any as HTMLLIElement[]) {
                      if (Cypress.$(li).text() !== elCellText) {
                        cy.wrap(li).click().clickOutside();
                        beenEdited = true;
                        break;
                      }
                    }
                  });
                break;
              }
              case 'text':
              case 'integer':
              case 'decimal':
              case 'financial':
              case 'percent':
                cy.wrap(elCell).focus().realType('1').clickOutside();
                beenEdited = true;
                break;
              case 'long_text':
              case 'comment':
                cy.wrap(elCell).focus().realType('1');
                cy.react('DataGridControlAgGrid')
                  .react('AgGridReact')
                  .find('.ag-large-text-input textarea')
                  .focus()
                  .type('strMatch')
                  .clickOutside();
                beenEdited = true;
                break;
              default:
                break;
            }

            cy.then(() => {
              if (beenEdited) {
                if (bgColor)
                  cy.wrap(elCell).should(
                    'have.css',
                    'background-color',
                    _hexToRgb(bgColor),
                  );
                if (color)
                  cy.wrap(elCell).should('have.css', 'color', _hexToRgb(color));
              }
            });
          }
        });
      });
  });
}

function _assertColumnHeaderStyle(_control: IApiControl) {
  const withControlData = getData(_control);

  withControlData(1, ({ columns }) => {
    cy.get('.ag-cell').eq(0).focus();

    cy.wrap(columns).each((cl, iCol: number) => {
      const col = columns[iCol];
      const colId = col.field;

      cy.waitUntil(() => {
        const $col = Cypress.$(
          `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
        );

        if (!$col.is(':visible') && !col.hide) {
          cy.wrap(
            new Array(
              Cypress.$('.ag-header-cell:not(.ag-floating-filter)').length,
            ),
          ).each(() => cy.realPress('ArrowRight'));
        } else return true;
      }).then(() => {
        if (!col.hide)
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
}

function _assertTrackModifTooltip(_control: IApiControl) {
  Cypress.config('defaultCommandTimeout', 6000);

  cy.window().then((w) => {
    w[
      'Features_Edit_Control_DataGridControlAgGrid' + _control.control_id
    ].setCanSendApi(false);
  });

  const withControlData = getData(_control);

  withControlData(1, ({ indexRow, columns, rowValues }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .getAgGridElements()
      .then((elRows) => {
        cy.wrap(rowValues).each(
          (cell: DataGridDetailsRowsCell, indexCell: number) => {
            const listCells = Object.values(elRows[indexRow]);
            const elCell: HTMLElement = listCells[indexCell];

            if (cell.control_editable) {
              let beenEdited = false;

              switch (cell.component) {
                case 'select_list':
                case 'dynamic_select_list': {
                  const elCellText = Cypress.$(elCell).text();

                  cy.window().then((w) => {
                    w[
                      `Features_Edit_Control_DataGridControlAgGrid_CustomSelectRenderer${cell.row_num}-${cell.col_elm_id}`
                    ].setCanSendApi(false);
                  });
                  cy.wrap(elCell).click();
                  cy.get('.MuiMenu-paper')
                    .find('ul li')
                    .then((lis) => {
                      for (const li of lis as any as HTMLLIElement[]) {
                        if (Cypress.$(li).text() !== elCellText) {
                          cy.wrap(li).click().clickOutside();
                          beenEdited = true;
                          break;
                        }
                      }
                    });
                  break;
                }
                case 'text':
                case 'integer':
                case 'decimal':
                case 'financial':
                case 'percent':
                  cy.wrap(elCell).focus().realType('1').clickOutside();
                  beenEdited = true;
                  break;
                case 'long_text':
                case 'comment':
                  cy.wrap(elCell).focus().realType('1');
                  cy.react('DataGridControlAgGrid')
                    .react('AgGridReact')
                    .find('.ag-large-text-input textarea')
                    .focus()
                    .type('strMatch')
                    .clickOutside();
                  beenEdited = true;
                  break;
                default:
                  break;
              }

              cy.then(() => {
                if (beenEdited) {
                  cy.wrap(elCell).focus().realHover();

                  if (
                    columns[indexCell].track_modification &&
                    columns[indexCell].track_modification_tooltip
                  ) {
                    cy.get(
                      '.ag-theme-alpine.ag-popup .ag-popup-child .custom-tooltip',
                    )
                      .should('be.visible')
                      .invoke('text')
                      .then((t) => {
                        expect(t).to.equal(
                          `Previous Value:${(() => {
                            switch (cell.component) {
                              case 'decimal':
                              case 'integer':
                              case 'percent':
                                return kFormatter(cell?.reference_value);
                              case 'financial':
                                return `${
                                  columns[indexCell]?.currency_symbol
                                }${kFormatter(cell?.reference_value)}`;
                              default:
                                return cell?.reference_value || '';
                            }
                          })()}`,
                        );
                      });
                  } else
                    cy.get(
                      '.ag-theme-alpine.ag-popup .ag-popup-child .custom-tooltip',
                    )
                      .should('have.css', 'display', 'none')
                      .should('not.be.visible');

                  cy.wrap(elCell).realMouseMove(0, 50, { position: 'center' });
                  cy.wait(2000);
                }
              });
            }
          },
        );
      });
  });
}

function _assertColHeaderTooltip(_control: IApiControl) {
  Cypress.config('defaultCommandTimeout', 6000);

  const withControlData = getData(_control);

  withControlData(1, ({ columns }) => {
    cy.react('DataGridControlAgGrid')
      .react('AgGridReact')
      .find('.ag-header-row.ag-header-row-column .ag-header-cell')
      .should('be.visible')
      .each(($el, i) => {
        cy.wrap($el).focus().realHover();

        if (columns[i].col_header_display_tooltip) {
          cy.get('.ag-theme-alpine.ag-popup .ag-popup-child')
            .should('be.visible')
            .invoke('text')
            .then((t) => {
              expect(t).to.be.equal(columns[i].col_header_tooltip ?? '');
            });
        } else {
          cy.wait(3000);
          cy.get('.ag-theme-alpine.ag-popup .ag-popup-child .custom-tooltip')
            // .should('have.css', 'display', 'none')
            .should('not.be.visible');
        }

        cy.wrap($el).realMouseMove(0, 50, { position: 'center' });
        cy.wait(2000);
      });
  });
}

function _assertResizableColumns(_control: IApiControl) {
  const withControlData = getData(_control);

  withControlData(1, ({ columns }) => {
    cy.wrap(columns).each((col: DataGridDetailsColumnType) => {
      const colId = col.field;
      let initialColWidth: number;

      cy.waitUntil(() => {
        const $col = Cypress.$(
          `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
        );
        initialColWidth = $col[0].getBoundingClientRect().width;

        if (!$col.is(':visible') && !col.hide) {
          cy.wrap(
            new Array(
              Cypress.$('.ag-header-cell:not(.ag-floating-filter)').length,
            ),
          ).each(() => cy.realPress('ArrowRight'));
        } else return true;
      }).then(() => {
        if (!col.hide)
          if (col.resizable) {
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
              )
              .should('not.have.css', 'display', 'none !important')
              .should('not.have.css', 'display', 'none');
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
              )
              .realMouseDown()
              .realMouseMove(Math.floor(-1 * (initialColWidth / 2)), 0)
              .realMouseUp();
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
              )
              .then(($headCell) => {
                const width = $headCell[0].getBoundingClientRect().width;

                expect(width).to.lessThan(initialColWidth);
              });
          } else {
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
              )
              .should('have.css', 'display')
              .and('match', new RegExp('none'));
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"] .ag-header-cell-resize`,
              )
              .realMouseDown()
              .realMouseMove(Math.floor(-1 * (initialColWidth / 2)), 0)
              .realMouseUp();
            cy.react('AgGridReact')
              .find(
                `.ag-header-row.ag-header-row-column .ag-header-cell[col-id="${colId}"]`,
              )
              .then(($headCell) => {
                const width = $headCell[0].getBoundingClientRect().width;

                expect(width).to.equal(initialColWidth);
              });
            cy.get('.ag-cell').eq(0).realClick();
          }
      });
    });
  });
}

function _assertHiddenColumns(_control: IApiControl) {
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
}

function _assertPinnedPositionColumns(_control: IApiControl) {
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
    const isPinned: Partial<Record<'left' | 'right', boolean | undefined>> = {};

    compileIsPinned('left');
    compileIsPinned('right');
    cy.waitUntil(
      () => isPinned.left !== undefined && isPinned.right !== undefined,
    ).then(() => {
      if (col.pinned) {
        switch (col.pinned) {
          case 'left':
            if (col.hide) {
              expect(isPinned.left, col.headerName).to.be.false;
              expect(isPinned.right, col.headerName).to.be.false;
            } else {
              expect(isPinned.left, col.headerName).to.be.true;
              expect(isPinned.right, col.headerName).to.be.false;
            }
            break;
          case 'right':
            if (col.hide) {
              expect(isPinned.left, col.headerName).to.be.false;
              expect(isPinned.right, col.headerName).to.be.false;
            } else {
              expect(isPinned.left, col.headerName).to.be.false;
              expect(isPinned.right, col.headerName).to.be.true;
            }
            break;
          default:
            expect(isPinned.left, col.headerName).to.be.false;
            expect(isPinned.right, col.headerName).to.be.false;
            break;
        }
      } else {
        expect(isPinned.left, col.headerName).to.be.false;
        expect(isPinned.right, col.headerName).to.be.false;
      }

      if (col.pinned && (col.pinned === 'left' || col.pinned === 'right')) {
        cy.wrap(['ArrowRight', 'ArrowLeft']).each(
          (arrowDir: keyof typeof keyCodeDefinitions) => {
            cy.wrap(columns).each(() => {
              cy.realPress(arrowDir).then(() => {
                const isVisible = Cypress.$(
                  `.ag-theme-alpine ${classHeaderCellSelector}[col-id="${col.field}"]`,
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
}

function _assertManuallyPinnedPositionColumns(_control: IApiControl) {
  const withControlData = getData(_control);

  withControlData(1, ({ columns, indexRow, getJqueryRowElement }) => {
    cy.wrap(columns)
      .each((col: DataGridDetailsColumnType, i) => {
        cy.waitUntil(() => {
          const $col = Cypress.$(
            `.ag-theme-alpine .ag-header-row.ag-header-row-column .ag-header-cell[col-id="${col.field}"]`,
          );

          if (!$col.is(':visible') && !col.hide) {
            const l = Cypress.$(
              '.ag-header-viewport .ag-header-cell:not(.ag-floating-filter)',
            ).length;
            cy.wrap(new Array(l < 7 ? 7 : l)).each(() =>
              cy.realPress('ArrowRight'),
            );
          } else return true;
        }).then(() => {
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
}

function _assertSelectListOptionsStyles(_control: IApiControl) {
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
                      expect(_hexToRgb(cell.choice_options[i].choice_bg_color))
                        .to.not.null;
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
      getJqueryRowElement: (beforeSelector: string) => JQuery<HTMLElement>;
    }) => void,
  ): void => {
    const count = numberRows === 'all' ? rows.length : numberRows;

    cy.wrap(new Array(count)).each((i, indexRow: number) => {
      const getJqueryRowElement = (beforeSelector = '') =>
        Cypress.$(`${beforeSelector} .ag-row[row-index="${indexRow}"]:eq(0)`);
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
