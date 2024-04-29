// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomActionButtonRenderer/CustomActionButtonRenderer.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';

import CustomActionButtonRenderer from './CustomActionButtonRenderer';
import { Method } from 'cypress/types/net-stubbing';

describe('<CustomActionButtonRenderer />', function () {
  const props = {
    colDef: { field: 'val_0.value' },
    data: {
      val_0: {
        control_editable: true,
        value: 'btn_label;GET;control/set_value',
        col_elm_id: 2323,
        row_num: 1,
      },
    },
  };
  const control = {
    control_id: 'control_idd',
    data_grid_detail: { datagrid_options: { datagrid_font_size: null } },
  };

  it('should render without crash', function () {
    const _props = { ...structuredClone(props) };
    const _control = { ...structuredClone(control) };

    cy.mount(
      <SetupTestsComponents>
        <CustomActionButtonRenderer props={_props} control={_control} />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('CustomActionButtonRenderer').should('exist');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const _props = { ...structuredClone(props) };
    const _control = { ...structuredClone(control) };
    let reqCount = 0;

    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('Network Error')) return false; // Prevent Cypress from failing the test

      return true;
    });

    cy.intercept(
      _props.data.val_0.value.split(';')[1] as Method,
      _props.data.val_0.value.split(';')[2] + '?*',
      (req) => {
        reqCount++;
        req.on('response', (resp) => {
          resp.send({ statusCode: 200, body: {} });
        });
      },
    ).as('reqGetActionButton');

    cy.mount(
      <SetupTestsComponents>
        <CustomActionButtonRenderer props={_props} control={_control} />
      </SetupTestsComponents>,
    ).waitReactApp();

    cy.react('CustomActionButtonRenderer').find('button').realClick();

    cy.wait('@reqGetActionButton').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(255).then(() => {
        expect(reqCount).to.be.eq(1);
        cy.wrap(query).should('have.property', 'control_id');
        cy.wrap(query).should('have.property', 'row_num');
        cy.wrap(query)
          .should('have.property', 'col_elm_id')
          .then(() => {
            expect(query.control_id).to.be.eq(_control.control_id);
            expect(query.row_num).to.be.eq(_props.data.val_0.row_num + '');
            expect(query.col_elm_id).to.be.eq(
              _props.data.val_0.col_elm_id + '',
            );
          });
      });
    });
  });
});
