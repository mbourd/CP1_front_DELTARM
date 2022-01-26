import React from 'react';
import { CheckboxControl } from './CheckboxControl';

export default {
  title: 'CheckboxControl',
  component: CheckboxControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <CheckboxControl {...args} />;
};
const control = {
  control_desc_1: null,
  control_desc_2: null,
  control_editable: true,
  editable: true,
  control_id: '1928',
  control_mandatory: true,
  control_previous_value: null,
  control_title: 'Select list',
  control_type: 'checkbox',
  control_value: '1',
  control_family: 'standard',
  control_regex: new RegExp(''),
  control_regex_msg: '',
  control_manage_compliance: false,
  control_conditional: false,
  control_options: null,
  answerChoices: {
    '1': {
      id: '1',
      label: 'CONFORME',
      value: '1',
      isKo: false,
    },
    '2': {
      id: '2',
      label: 'NON APPLICABLE',
      value: '2',
      isKo: false,
    },
    '3': {
      id: '3',
      label: 'NON CONFORME',
      value: '3',
      isKo: false,
    },
  },
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
