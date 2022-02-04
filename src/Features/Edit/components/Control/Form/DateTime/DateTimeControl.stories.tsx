import React from 'react';
import { DateTimeControl } from './DateTimeControl';

export default {
  title: 'DateTimeControl',
  component: DateTimeControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <DateTimeControl {...args} />;
};

const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1988',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'DateTime control',
  control_type: 'timestamp',
  control_value: '2022-03-10T11:23',
  control_options: {
    min: '2022-03-10T11:20',
    max: '2022-03-10T11:30',
    unit: null,
  },
};

export const DateTime = Template.bind({});
DateTime.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
