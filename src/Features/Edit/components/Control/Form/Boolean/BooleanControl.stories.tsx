import React from 'react';
import { BooleanControl } from './BooleanControl';

export default {
  title: 'BooleanControl',
  component: BooleanControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <BooleanControl {...args} />;
};
const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1951',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Boolean Control',
  control_type: 'boolean',
  control_value: 'true',
};
export const Boolean = Template.bind({});
Boolean.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};

export const BooleanDisabled = Template.bind({});
BooleanDisabled.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: false,
    editable: false,
    control_family: 'standard',
    control_id: '1951',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Boolean Control',
    control_type: 'boolean',
    control_value: 'true',
  },
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
