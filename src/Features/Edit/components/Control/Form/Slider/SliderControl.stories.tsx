import React from 'react';
import { SliderControl } from './SliderControl';

export default {
  title: 'SliderControl',
  component: SliderControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <SliderControl {...args} />;
};

const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1927',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
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
};

export const Slider = Template.bind({});
Slider.args = {
  control,
  fileId: 1230,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
