import React from 'react';
import { FormControls } from './FormControl';

export default {
  title: 'Controls',
  component: FormControls,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <FormControls {...args} />;
};

export const TextControl = Template.bind({});
TextControl.args = {
  controls: [
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '1746',
      isConditional: false,
      isCalculated: false,
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
      id: '1747',
      isConditional: false,
      isCalculated: false,
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
      id: '1748',
      isConditional: false,
      isCalculated: false,
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

export const CalculatedFields = Template.bind({});
CalculatedFields.args = {
  controls: [
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '1',
      isConditional: false,
      isCalculated: true,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: 'toto',
    },
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '3',
      isConditional: false,
      isCalculated: true,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: null,
      calculated: {
        byField: [1, 2],
        display: false,
        formula: '$ + $',
      },
    },
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '2',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: '56',
    },
  ],
};

export const DisabledFields = Template.bind({});
DisabledFields.args = {
  controls: [
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '7',
      isConditional: false,
      isCalculated: true,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: '19',
    },
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '6',
      isConditional: true,
      isCalculated: false,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: null,
      conditional: {
        byField: 7,
        displayType: 'enable',
        formula: '$ > 20',
        conditionalInitState: true,
      },
    },
    {
      desc1: null,
      desc2: null,
      editable: true,
      family: 'standard',
      id: '8',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      mandatory: false,
      previousValue: null,
      regex: '^(i?)aut\\d{6}$',
      regexMsg: "Le Numéro d'Autorisation doit comporter : AUT + 6 chiffres",
      title: 'Text label control',
      type: 'text',
      value: '56',
    },
  ],
};
