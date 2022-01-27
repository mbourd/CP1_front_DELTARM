import React from 'react';
import { DecimalControl } from './DecimalControl';

export default {
  title: 'DecimalControl',
  component: DecimalControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DecimalControl {...args} />;
};

const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1929',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: true,
  mandatory: true,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Decimal control',
  control_type: 'decimal',
  control_value: 50.23123443,
  control_options: {
    min: 0,
    max: 100,
    unit: 'metres',
    precision: 2,
  },
};

export const Decimal = Template.bind({});
Decimal.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
