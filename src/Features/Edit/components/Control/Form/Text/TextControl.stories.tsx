import React from 'react';
import { TextControl } from './TextControl';

export default {
  title: 'TextControl',
  component: TextControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <TextControl {...args} />;
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
  control_title: 'Text control',
  control_type: 'text',
  control_value: 'toto',
};
export const Text = Template.bind({});
Text.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
