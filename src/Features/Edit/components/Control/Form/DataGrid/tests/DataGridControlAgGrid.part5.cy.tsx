// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part5.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailButtonsType, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import {
  _translate,
  _hexToRgb,
  _getRandomNumberBetween,
  _escapeForRegExp,
} from '../../../../../../../../cypress/utils';
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
  it('should make one request at a time and payload/queries not empty when click "Add row"', function () {
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
        source: 'source' + _getRandomNumberBetween(0, 6546878),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: 'controlID' + _getRandomNumberBetween(0, 77865),
    } as IApiControl;
    const fileId = 'fileIDsfq' + _getRandomNumberBetween(0, 6546);
    let reqC = 0;

    cy.intercept('POST', '/control/data_grid/add_row\\?*', (req) => {
      reqC++;
      req.reply({
        statusCode: 200,
        fixture: 'controlDataGridAgGrid-2-resp-add-row.json',
      });
    }).as('reqPostAddRow');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileId} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('._Button')
      .contains(new RegExp(translations.join('|')))
      .realClick();

    cy.wait('@reqPostAddRow').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqC).to.eq(1);
        cy.wrap(query).should('have.property', 'file_id');
        cy.wrap(query).should('have.property', 'elm_id');
        cy.wrap(query).should('have.property', 'source');
        cy.then(() => {
          expect(query.file_id).to.eq(fileId);
          expect(query.elm_id).to.eq(_control.control_id);
          expect(query.source).to.eq(_control.data_grid_detail?.source);
        });
      });
    });
  });
  it('should display error message if an error occur when "Add row"', function () {
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

    cy.intercept('POST', '/control/data_grid/add_row\\?*', (req) => {
      req.reply({ statusCode: 400, body: {} });
    }).as('reqPostAddRow');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={''} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('._Button')
      .contains(new RegExp(translations.join('|')))
      .realClick();

    cy.wait('@reqPostAddRow').then(() => {
      cy.react('DataGridControlAgGrid').formErrorShouldBeVisible([
        _escapeForRegExp(
          "Une erreur est survenue lors de l'ajout de la ligne",
        ) as string,
      ]);
    });
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
        source: 'source' + _getRandomNumberBetween(24, 98765),
      },
      mandatory: false,
      upload_detail: null,
      rich_text_detail: null,
      control_rejectable: null,
      control_id: 'contrid' + _getRandomNumberBetween(654, 86853),
    } as IApiControl;
    const fileid = 'qsqsf' + _getRandomNumberBetween(654, 8654);
    let reqCount = 0;

    cy.intercept('POST', '**/*/declare_values?*', (req) => {
      reqCount++;
      req.reply({
        statusCode: 200,
        body: {},
      });
    }).as('declareValueRequest');

    cy.mount(
      <SetupTestsComponents>
        <DataGridControlAgGrid control={_control} fileId={fileid} />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.contains('Select All').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(50).then(() => {
      cy.get('._Button').contains('Declare Values').click();
      cy.window().then((w) => {
        cy.wait('@declareValueRequest').then((intercept) => {
          const { request } = intercept;
          const { query } = request;
          const selected: any[] = [];

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(300).then(() => {
            expect(reqCount).to.eq(1);
            cy.wrap(query).should('have.property', 'file_id');
            cy.wrap(query).should('have.property', 'control_id');
            cy.wrap(query).should('have.property', 'source');
            cy.then(() => {
              expect(query.file_id).to.eq(fileid);
              expect(query.control_id).to.eq(_control.control_id);
              expect(query.source).to.eq(_control.data_grid_detail?.source);
              w[
                'Features_Edit_Control_DataGridControlAgGrid' +
                  _control.control_id
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
              expect(request.body.selected_rows.length).to.be.eq(
                selected.length,
              );
              expect(request.body.selected_rows.length).to.be.gt(0);
              selected.forEach((node: RowNode) => {
                expect(request.body.selected_rows).to.include(
                  node.data.row_uuid,
                );
              });
            });
          });
        });
      });
    });
  });
});
