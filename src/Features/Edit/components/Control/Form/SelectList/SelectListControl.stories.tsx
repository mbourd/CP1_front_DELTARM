import React from 'react';
import { SelectListControl } from './SelectListControl';
import { comments } from '../../../../../../mocks/fixtures/comment/comment';

export default {
  title: 'SelectListControl',
  component: SelectListControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <SelectListControl {...args} />;
};
const control = {
  control_desc_1: null,
  control_desc_2: null,
  control_editable: true,
  editable: true,
  control_id: '1928',
  control_mandatory: true,
  mandatory: true,
  control_previous_value: null,
  control_title: 'Checkbox',
  control_type: 'select_list',
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
export const Select = Template.bind({});
Select.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};

const controlRejectable = {
  control_desc_1: null,
  control_desc_2: null,
  control_editable: true,
  editable: true,
  control_id: '1928',
  control_mandatory: true,
  mandatory: true,
  control_previous_value: null,
  control_title: 'Checkbox',
  control_type: 'select_list',
  control_value: '1',
  control_family: 'standard',
  control_regex: new RegExp(''),
  control_regex_msg: '',
  control_manage_compliance: false,
  control_conditional: false,
  control_options: null,
  control_rejectable: {
    is_rejected: true,
    control_reject_comment: null,
  },
  useRejection: {
    isRejected: true,
    rejectComments: comments,
  },
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
export const SelectRejectable = Template.bind({});
SelectRejectable.args = {
  context: 'edit',
  control: controlRejectable,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
