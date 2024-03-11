// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomDateRenderer/CustomDateRenderer.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../../cypress/utils/SetupTestsComponents';
import CustomDateRenderer from './CustomDateRenderer';
// import { _requestJWT } from '../../../../../../../../../cypress/utils';

describe('<CustomDateRenderer />', () => {
  let jwt: string;

  // before(() => {
  //   _requestJWT();
  // });

  before(() => {
    // jwt = Cypress.env('JWT');
    jwt = '';
  });

  it('Should render', () => {
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer').should('exist');
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('exist')
      .should('be.visible');
  });

  it('Input date should have font-size', () => {
    const fontSize = 23;
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: fontSize,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.css', 'font-size', fontSize + 'px');
  });

  it('Input date should have default value', () => {
    const defaultValue = '2023-06-28';
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
            max_date: '2270-05-12',
          },
        },
      },
      value: defaultValue,
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .then(($el) => {
        expect($el.val()).to.equal(defaultValue);
      });
  });

  it('Assert min date', () => {
    const minDate = '1987-05-12';
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: minDate,
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.attr', 'min', minDate);
  });

  it('Should have default min date', () => {
    const defaultMinDate = '1970-05-12';
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.attr', 'min', defaultMinDate);
  });

  it('Assert max date', () => {
    const maxDate = '2270-05-12';
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1987-05-12',
            max_date: maxDate,
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.attr', 'max', maxDate);
  });

  it('Should have default max date', () => {
    const defaultMaxDate = '2270-05-12';
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.attr', 'max', defaultMaxDate);
  });

  it('Should not be disabled', () => {
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: true,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: true,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('not.have.attr', 'disabled');
  });

  it('Should be disabled', () => {
    const control = {
      data_grid_detail: {
        datagrid_options: {
          datagrid_font_size: 13,
        },
      },
    };
    const props = {
      colDef: {
        field: 'col1.value',
      },
      data: {
        row_editable: false,
        row_uuid: '5d1380e4-ab13-4652-bb85-175f42d50bfc',
        col1: {
          control_editable: false,
          col_elm_id: 7254,
          row_num: 1,
          control_options: {
            min_date: '1970-05-12',
            max_date: '2270-05-12',
          },
        },
      },
      value: '2023-06-28',
      setValue: () => undefined,
    };

    cy.mount(
      <SetupTestsComponents>
        <CustomDateRenderer
          props={props}
          control={control}
          fileId={'18aafcb7-803b-4abb-9045-2e3589864574'}
          jwt={jwt}
          seterrors={() => undefined}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('CustomDateRenderer')
      .find('input[type="date"]')
      .should('have.attr', 'disabled');
  });
});
