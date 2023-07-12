import React from 'react';
import { RichTextControl } from './RichTextControl';
import { richTextData } from '../../../../../../mocks/fixtures/controls/richtext/richtext';
import { worker } from '../../../../../../mocks/server';
import { rest } from 'msw';
import { RICHTEXT } from '../../../../../../mocks/fixtures/controls/richtext/richtext';

export default {
  title: 'RichTextControl',
  component: RichTextControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <RichTextControl {...args} />;
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
  control_title: 'Rich text editor control',
  control_type: 'rich_text',
  control_value: null,
  control_options: null,
  rich_text_detail: richTextData,
};

export const RichText = Template.bind({});
RichText.args = {
  control,
  fileId: 133,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};

RichText.decorators = [
  (story: any) => {
    worker?.use(
      rest.post('https://undefined/control/set_value', (req, res, ctx) => {
        req.url.searchParams.set('file_id', '133');
        req.url.searchParams.set('elm_id', '1931');
        req.url.searchParams.set('control_family', 'standard');
        // TODO make it available with msw and storybook

        return res(ctx.status(200), ctx.json(RICHTEXT));
      }),
    );

    return story();
  },
];

const controlDisabled = {
  control_desc1: null,
  control_desc2: null,
  control_editable: false,
  editable: false,
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
  control_title: 'Rich text editor control',
  control_type: 'rich_text',
  control_value: null,
  control_options: null,
  rich_text_detail: richTextData,
};

export const RichTextDisabled = Template.bind({});
RichTextDisabled.args = {
  control: controlDisabled,
  fileId: 133,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};
