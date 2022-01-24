import React from 'react';
import { DecimalControl } from './DecimalControl';

export default {
  title: 'Decimal',
  component: DecimalControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DecimalControl {...args} />;
};

export const InputDecimal = Template.bind({});
InputDecimal.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    control_family: 'standard',
    control_id: '1929',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Decimal control',
    control_type: 'decimal',
    control_value: 50.2334,
    control_options: {
      min: 0,
      max: 100,
      unit: null,
      precision: 3,
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
        precision: 2,
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
      control_title: 'Decimal control 2',
      control_type: 'decimal',
      control_value: 50,
      control_options: {
        min: 0,
        max: 90,
        unit: 'centimetres',
        precision: 8,
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};

export const InputWithUnitDecimal = Template.bind({});
InputWithUnitDecimal.args = {
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
    control_title: 'Decimal control',
    control_type: 'decimal',
    control_value: 50.2784,
    control_options: {
      min: 0,
      max: 100,
      unit: 'metres',
      precision: 3,
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
      control_title: 'Decimal control',
      control_type: 'decimal',
      control_value: 50.2,
      control_options: {
        min: 0,
        max: 100,
        unit: 'metres',
        precision: 3,
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
      control_title: 'Decimal control 2',
      control_type: 'decimal',
      control_value: 50.1,
      control_options: {
        min: 0,
        max: 90,
        unit: 'centimetres',
        precision: 3,
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};
