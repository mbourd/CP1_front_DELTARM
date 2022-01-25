import React from 'react';
import { SliderControl } from './SliderControl';

export default {
  title: 'Slider',
  component: SliderControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <SliderControl {...args} />;
};

export const ControlSlider = Template.bind({});
ControlSlider.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    control_family: 'standard',
    control_id: '1927',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Slider control',
    control_type: 'slider',
    control_value: 50,
    control_options: {
      min: 0,
      max: 100,
      step: 10,
      disable_swap: true,
      marks: true,
      color: '#000',
      disabled: false,
      boundaries: [
        {
          value: 0,
          label: '0°C',
        },
        {
          value: 20,
          label: '20°C',
        },
        {
          value: 37,
          label: '37°C',
        },
        {
          value: 100,
          label: '100°C',
        },
      ],
    },
  },
  fileId: 1230,
  formState: [
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1927',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Slider control',
      control_type: 'slider',
      control_value: 50,
      control_options: {
        min: 0,
        max: 100,
        step: 10,
        disable_swap: true,
        marks: false,
        disabled: false,
      },
    },
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1928',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Slider control',
      control_type: 'slider',
      control_value: 50,
      control_options: {
        min: 0,
        max: 10,
        step: 1,
        disable_swap: true,
        marks: false,
        disabled: false,
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};

export const ControlSlider2 = Template.bind({});
ControlSlider2.args = {
  control: {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    control_family: 'standard',
    control_id: '1927',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Slider control',
    control_type: 'slider',
    control_value: 50,
    control_options: {
      min: 0,
      max: 100,
      step: 10,
      disable_swap: true,
      marks: true,
      color: '#000',
      disabled: false,
    },
  },
  fileId: 1230,
  formState: [
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1927',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Slider control',
      control_type: 'slider',
      control_value: 50,
      control_options: {
        min: 0,
        max: 100,
        step: 10,
        disable_swap: true,
        marks: false,
        disabled: false,
      },
    },
    {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      control_family: 'standard',
      control_id: '1928',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Slider control',
      control_type: 'slider',
      control_value: 50,
      control_options: {
        min: 0,
        max: 10,
        step: 1,
        disable_swap: true,
        marks: false,
        disabled: false,
      },
    },
  ],
  setFormState: () => {
    return undefined;
  },
};
