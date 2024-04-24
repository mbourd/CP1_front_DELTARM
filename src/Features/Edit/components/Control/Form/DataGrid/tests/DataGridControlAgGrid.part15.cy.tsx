// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/Form/DataGrid/tests/DataGridControlAgGrid.part15.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../../../../cypress/utils/SetupTestsComponents';
import { DataGridDetailsRowsCell, IApiControl } from '../../../../../types';
import { DataGridControlAgGrid } from '../DataGridControlAgGrid';
import { _assertPinnedPositionColumns } from './helpers/_assertPinnedPositionColumns';

describe('<DataGridControlAgGrid /> - part 15', function () {
  // int,dec,fin,perc
  let controlExample1: IApiControl;
  // int,dec,fin,formula*3
  let controlExample3: IApiControl;
  // text,comment,long_text
  let controlExample4: IApiControl;
  // text*n,select*n,number*n
  let controlExample5: IApiControl;
  // action_button,icon,checkbox
  let controlExample6: IApiControl;
  //
  let controlExample7: IApiControl;

  let originalTimeout: number;

  // because v31 we can't pin all columns so at least one not pinned
  const fakeColumn = {
    alignment: 'left',
    borderRight: null,
    borderRightColor: null,
    borderRightWidth: null,
    col_header_display_tooltip: false,
    col_header_tooltip: 'Integer',
    currency_symbol: null,
    decimal_digit: 0,
    field: 'rdg_0.value',
    field_type: 'integer',
    filter: true,
    floatingFilter: false,
    headerColor: '#FFFFFF',
    headerName: 'Fake',
    hide: false,
    lockPinned: false,
    pinned: null,
    resizable: true,
    sortable: true,
    thousand_separator: false,
    track_modification: false,
    track_modification_option: null,
    track_modification_tooltip: false,
  };
  const fakeCell_rdg0 = {
    choice_options: [],
    col_elm_id: 7915,
    component: 'integer',
    control_editable: true,
    control_mandatory: false,
    control_options: null,
    control_regex: '^-?[0-9]\\d*$',
    control_regex_msg: "La valeur saisie n'est pas une valeur entière",
    reference_value: null,
    row_num: 1,
    value: null,
  };

  before(() => {
    cy.fixture('controlDataGridAgGrid-1.json').then(
      (d) => (controlExample1 = d),
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
        columns: (() => {
          const _columns = structuredClone(
            controlExample1.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'left' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample3.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'left' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample3.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample4.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'left' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
        columns: (() => {
          const _columns = structuredClone(
            controlExample6.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'left' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample6.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to left only - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample7.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'left' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample7.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });

  it('Should have columns pinned to right only - controlExample1', function () {
    const _control = {
      ...structuredClone(controlExample1),
      data_grid_detail: {
        ...structuredClone(controlExample1.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample1.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'right' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample1.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample3', function () {
    const _control = {
      ...structuredClone(controlExample3),
      data_grid_detail: {
        ...structuredClone(controlExample3.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample3.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'right' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample3.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample4', function () {
    const _control = {
      ...structuredClone(controlExample4),
      data_grid_detail: {
        ...structuredClone(controlExample4.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample4.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'right' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample4.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
        columns: (() => {
          const _columns = structuredClone(
            controlExample6.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'right' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample6.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
    _assertPinnedPositionColumns(_control);
  });
  it('Should have columns pinned to right only - controlExample7', function () {
    const _control = {
      ...structuredClone(controlExample7),
      data_grid_detail: {
        ...structuredClone(controlExample7.data_grid_detail),
        columns: (() => {
          const _columns = structuredClone(
            controlExample7.data_grid_detail?.columns || [],
          );

          // @ts-ignore
          _columns.unshift(fakeColumn);

          return _columns.map((col, i) => {
            const _col = { ...structuredClone(col) };
            _col.pinned = i > 0 ? 'right' : null;

            return _col;
          });
        })(),
        rows: structuredClone(controlExample7.data_grid_detail?.rows || []).map(
          (row) => {
            const _row = structuredClone(row);

            // @ts-ignore
            _row['rdg_0'] = fakeCell_rdg0;

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
});
