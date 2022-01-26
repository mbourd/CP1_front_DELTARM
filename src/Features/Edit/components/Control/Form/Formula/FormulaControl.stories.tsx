import React from 'react';
import { FormulaControl } from './FormulaControl';

export default {
  title: 'FormulaControl',
  component: FormulaControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <FormulaControl {...args} />;
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
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Formula control',
  control_type: 'formula',
  control_value: 'value formula',
};

export const Formula = Template.bind({});
Formula.args = {
  control,
  fileId: 1233,
  formState: [control],
  setFormState: () => {
    return undefined;
  },
};
