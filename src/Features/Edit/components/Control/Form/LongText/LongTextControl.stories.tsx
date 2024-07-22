import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../../../../../../.storybook/componentsDecorator';
import { LongTextControl } from './LongTextControl';
import { IApiControl, IChapter } from '../../../../types';

export default {
  title: 'Features/Edit/components/Control/Form/LongText/LongTextControl',
  component: LongTextControl,
  decorators: [componentsDecorator({})],
  parameters: {
    msw: {
      handlers: {
        setControlValue: http.post('**/control/set_value', () => {
          return HttpResponse.json(
            { },
            { status: 201 },
          );
        }),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof LongTextControl>;

type Story = StoryObj<typeof LongTextControl>;


const control: IApiControl = {
  control_desc_1: null,
  control_desc_2: null,
  control_editable: false,
  control_conditional: false,
  control_id: 'control_id_wxcvb',
  control_mandatory: false,
  mandatory: false,
  editable: true,
  control_previous_value: null,
  control_title: '',
  control_type: 'boolean',
  control_value: null,
  control_family: 'control_fam_wxccvvbbn',
  control_regex: null,
  control_regex_msg: null,
  control_manage_compliance: false,
  control_options: undefined,
  upload_detail: null,
  rich_text_detail: null,
  control_rejectable: null,
};
const fileId = '1234';
const formState: IChapter[] = [
  {
    controls: [control],
    label: '',
    id: '',
  },
];
const setFormState = () => undefined;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  useEffect(() => {

  }, []);

  return (
    <>
      <LongTextControl {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  control: structuredClone(control),
  fileId,
  context: 'edit',
  formState: structuredClone(formState),
  setFormState,
};
