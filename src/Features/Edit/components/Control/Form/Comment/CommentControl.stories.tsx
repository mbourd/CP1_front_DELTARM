import React from 'react';
import { CommentControl } from './CommentControl';

export default {
  title: 'CommentControl',
  component: CommentControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <CommentControl {...args} />;
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
  control_title: 'Comment control',
  control_type: 'comment',
  control_value: 'A long comment',
};
export const Comment = Template.bind({});
Comment.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
