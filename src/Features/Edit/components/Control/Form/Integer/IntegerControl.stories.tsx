import React from 'react';
import { IntegerControl } from './IntegerControl';

export default {
  title: 'Integer',
  component: IntegerControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <IntegerControl {...args} />;
};

export const InputInteger = Template.bind({});
InputInteger.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    control_family: 'standard',
    control_id: '1987',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Integer control',
    control_type: 'integer',
    control_value: 50,
    control_options: {
      min: 0,
      max: 100,
      unit: null,
    },
  },
  fileId: 1233,
  formState: [
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1987',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
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
    },
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1997',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Integer control 2',
      control_type: 'integer',
      control_value: 50,
      control_options: {
        min: 0,
        max: 90,
        unit: 'centimetres',
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};

export const InputWithUnitInteger = Template.bind({});
InputWithUnitInteger.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    control_family: 'standard',
    control_id: '1987',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
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
  },
  fileId: 1233,
  formState: [
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1987',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
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
    },
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1997',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Integer control 2',
      control_type: 'integer',
      control_value: 50,
      control_options: {
        min: 0,
        max: 90,
        unit: 'centimetres',
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};
