import React from 'react';
import { LongTextControl } from './LongTextControl';

export default {
  title: 'LongTextControl',
  component: LongTextControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <LongTextControl {...args} />;
};
const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: false,
  control_family: 'standard',
  control_id: '23891',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Long text control',
  control_type: 'long_text',
  control_value: 'A long text',
};
export const LongText = Template.bind({});
LongText.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
