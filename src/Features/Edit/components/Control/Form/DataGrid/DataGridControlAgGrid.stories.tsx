import React from 'react';
import { DataGridControlAgGrid } from './DataGridControlAgGrid';
import {
  dataGridDetailAgGrid,
  GRID_DETAILS_ADD_ROW_AG_GRID,
} from '../../../../../../mocks/fixtures/datagrid/datagrid';
import { worker } from '../../../../../../mocks/server';
import { rest } from 'msw';

export default {
  title: 'DataGridAgGrid',
  component: DataGridControlAgGrid,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DataGridControlAgGrid {...args} />;
};

const controlAgGrid = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1931',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Data grid control',
  control_type: 'data_grid',
  control_value: null,
  control_options: null,
  data_grid_detail_ag_grid: dataGridDetailAgGrid,
};

export const DataGridAgGrid = Template.bind({});
DataGridAgGrid.args = {
  context: 'edit',
  control: controlAgGrid,
  fileId: 134,
  formState: [{ controls: [controlAgGrid] }],
  setFormState: () => {
    return undefined;
  },
};

DataGridAgGrid.decorators = [
  (story: any) => {
    worker?.use(
      rest.post(
        'http://undefined://undefined/control/data_grid/add_row',
        (req, res, ctx) => {
          req.url.searchParams.get('file_id');
          req.url.searchParams.get('elm_id');

          return res(ctx.status(200), ctx.json(GRID_DETAILS_ADD_ROW_AG_GRID));
        },
      ),
    );

    return story();
  },
];
