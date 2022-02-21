import React from 'react';
import { DataGridControl } from './DataGridControl';
import { dataGridDetail } from '../../../../../../mocks/fixtures/datagrid/datagrid';

export default {
  title: 'DataGrid',
  component: DataGridControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DataGridControl {...args} />;
};

const control = {
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
  data_grid_detail: dataGridDetail,
};

export const DataGrid = Template.bind({});
DataGrid.args = {
  context: 'edit',
  control,
  fileId: 134,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};

// const controlDisabled = {
//   control_desc1: null,
//   control_desc2: null,
//   control_editable: true,
//   editable: false,
//   control_family: 'standard',
//   control_id: '1931',
//   isConditional: false,
//   isCalculated: false,
//   manageCompliance: false,
//   control_mandatory: false,
//   mandatory: false,
//   control_previous_value: null,
//   control_regex: null,
//   control_regex_msg: null,
//   control_title: 'data grid control',
//   control_type: 'data_grid',
//   control_value: null,
//   control_options: null,
//   data_grid_detail: dataGridDetail,
// };
//
// export const DataGridDisabled = Template.bind({});
// DataGridDisabled.args = {
//   context: 'edit',
//   control: controlDisabled,
//   fileId: 133,
//   formState: [{ controls: [control] }],
//   setFormState: () => {
//     return undefined;
//   },
// };
