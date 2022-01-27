import React from 'react';
import { InfoBlockControl } from './InfoBlockControl';

export default {
  title: 'InfoBlockControl',
  component: InfoBlockControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <InfoBlockControl {...args} />;
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
  control_title: 'Info block control can have a long title like this',
  control_type: 'info_block',
  control_value: 'toto is the new info block control value',
};

export const InfoBlock = Template.bind({});
InfoBlock.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
