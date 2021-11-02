import React from 'react';
import { DisplayControl, IProps } from './DisplayControl';

export default {
  title: 'DisplayControl',
  component: DisplayControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: IProps) => <DisplayControl {...args} />;

export const TextControl = Template.bind({});
TextControl.args = {
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

export const EmailControl = Template.bind({});
EmailControl.args = {
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
      regexMsg: "L'email est invalide",
      title: 'email label control',
      type: 'email',
      value: null,
    },
  ],
};

export const UploadFileControl = Template.bind({});
UploadFileControl.args = {
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
      regexMsg: "L'upload est impossible",
      title: 'Upload file control',
      type: 'file_upload',
      value: null,
    },
  ],
};
