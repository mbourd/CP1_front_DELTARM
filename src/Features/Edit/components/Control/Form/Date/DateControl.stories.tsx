import React from 'react';
import { DateControl } from './DateControl';

export default {
  title: 'DateControl',
  component: DateControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DateControl {...args} />;
};

const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1987',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Date control',
  control_type: 'date',
  control_value: '2022-12-31',
  control_options: {
    min: 0,
    max: 100,
    unit: 'metres',
  },
};

export const Date = Template.bind({});
Date.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
