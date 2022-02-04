import React from 'react';
import { TimeControl } from './TimeControl';

export default {
  title: 'TimeControl',
  component: TimeControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <TimeControl {...args} />;
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
  control_title: 'Time control',
  control_type: 'time',
  control_value: '11:00',
  control_options: {
    min: '11:09',
    max: '12:06',
    unit: null,
  },
};

export const Time = Template.bind({});
Time.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
