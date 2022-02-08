import React from 'react';
import { IntegerControl } from './IntegerControl';

export default {
  title: 'IntegerControl',
  component: IntegerControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <IntegerControl {...args} />;
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
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Integer control',
  control_type: 'integer',
  control_value: 50,
  control_options: {
    min: 0,
    max: 100,
    unit: 'metres',
  },
};

export const Integer = Template.bind({});
Integer.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
