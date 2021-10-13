import React from 'react';
import { DisplayControl, IProps } from './DisplayControl';

export default {
  title: 'DisplayControl',
  component: DisplayControl,
  decorators: [(story: any) => <div className="p-4">{story()}</div>],
};

const Template: any = (args: IProps) => <DisplayControl {...args} />;

export const ControlText = Template.bind({});
ControlText.args = {
  controls: [
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      fontColor: undefined,
      fontSize: undefined,
      id: '1746',
      isConditional: false,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: null,
    },
  ],
};
