import React from 'react';
import { FinancialControl } from './FinancialControl';

export default {
  title: 'FinancialControl',
  component: FinancialControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <FinancialControl {...args} />;
};

const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1930',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Financial control',
  control_type: 'financial',
  control_value: 39.2312343,
  control_options: {
    min: 0,
    max: 100,
    unit: null,
    precision: 2,
  },
};

export const Financial = Template.bind({});
Financial.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
