// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomSelectRenderer/CustomSelectRenderer.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import { cloneDeep } from 'lodash';

import CustomSelectRenderer from './CustomSelectRenderer';

import '../../../../../../apiRoutes/control';

describe('<CustomSelectRenderer />', function () {
  const props = {
    value: '3',
    setValue: () => undefined,
    data: { row_uuid: 'qsdpoqkshdn-qsfqsffshfhjk-eazrt', row_editable: true },
  };
  const field_data = {
    choice_options: [
      { choice_id: 1, choice_lib: 'hello world1' },
      { choice_id: 3, choice_lib: 'hello world3' },
    ],
    col_elm_id: 1,
    row_num: 1,
    control_editable: true,
    choice_font_weight: '',
  };
  const control = {
    data_grid_detail: {
      datagrid_options: { datagrid_font_size: '', datagrid_font_color: '' },
    },
  };

  it('should render without crash', function () {
    const _props = cloneDeep(props);
    const _field_data = cloneDeep(field_data);
    const _control = cloneDeep(control);

    cy.mount(
      <SetupTestsComponents>
        <CustomSelectRenderer
          props={_props}
          field_data={_field_data}
          control={_control}
          fileId={'fileId'}
          jwt={''}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSelectRenderer').should('exist');
  });

  it('should have the correct value selected, in list options', function () {
    const _props = {
      ...cloneDeep(props),
      value: '2',
    };
    const _field_data = {
      ...cloneDeep(field_data),
      choice_options: [
        ...cloneDeep(field_data.choice_options),
        { choice_id: 2, choice_lib: 'hello world2' },
      ],
    };
    const _control = cloneDeep(control);

    cy.mount(
      <SetupTestsComponents>
        <CustomSelectRenderer
          props={_props}
          field_data={_field_data}
          control={_control}
          fileId={'fileId'}
          jwt={''}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSelectRenderer').realClick();
    cy.get('ul')
      .find('li[aria-selected="true"]', { timeout: 50 })
      .should('have.text', 'hello world2');
  });

  it('should have the default value displayed', function () {
    const _props = {
      ...cloneDeep(props),
      value: '2',
    };
    const _field_data = {
      ...cloneDeep(field_data),
      choice_options: [
        ...cloneDeep(field_data.choice_options),
        { choice_id: 2, choice_lib: 'hello world2' },
      ],
    };
    const _control = cloneDeep(control);

    cy.mount(
      <SetupTestsComponents>
        <CustomSelectRenderer
          props={_props}
          field_data={_field_data}
          control={_control}
          fileId={'fileId'}
          jwt={''}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSelectRenderer').should('contain.text', 'hello world2');
  });

  it('should make one request at a time and payload/queries not empty', function () {
    const _props = {
      ...cloneDeep(props),
      value: '2',
    };
    const _field_data = {
      ...cloneDeep(field_data),
      choice_options: [
        ...cloneDeep(field_data.choice_options),
        { choice_id: 2, choice_lib: 'hello world2' },
      ],
    };
    const _control = cloneDeep(control);
    const fileId = 'fileIDdpfjdsklfh';
    let reqCount = 0;

    cy.intercept('POST', '/control/data_grid/save_value\\?*', (req) => {
      reqCount++;
      req.reply({ statusCode: 200, body: {} });
    }).as('reqPostControlValue');

    cy.mount(
      <SetupTestsComponents>
        <CustomSelectRenderer
          props={_props}
          field_data={_field_data}
          control={_control}
          fileId={fileId}
          jwt={''}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomSelectRenderer').realClick();
    cy.get('ul li').contains('hello world3').realClick();

    cy.wait('@reqPostControlValue').then((interception) => {
      const { request } = interception;
      const { query } = request;

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(300).then(() => {
        expect(reqCount).to.eq(1);
        cy.wrap(query).should('have.property', 'row_uuid');
        cy.wrap(query).should('have.property', 'elm_val');
        cy.wrap(query).should('have.property', 'fileId');
        cy.wrap(query)
          .should('have.property', 'col_elm_id')
          .then(() => {
            expect(query['fileId']).to.be.eq(fileId);
            expect(query['row_uuid']).to.be.eq(_props.data.row_uuid);
            expect(query['elm_val']).to.be.eq('3');
            expect(query['col_elm_id']).to.be.eq(_field_data.col_elm_id + '');
          });
      });
    });
  });
});
