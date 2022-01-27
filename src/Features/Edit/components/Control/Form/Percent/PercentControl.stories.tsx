import React from 'react';
import { PercentControl } from './PercentControl';

export default {
  title: 'PercentControl',
  component: PercentControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <PercentControl {...args} />;
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
  control_title: 'Percent control',
  control_type: 'percent',
  control_value: 29.2312343,
  control_options: {
    min: 0,
    max: 100,
    unit: null,
    precision: 2,
  },
};

export const Percent = Template.bind({});
Percent.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
