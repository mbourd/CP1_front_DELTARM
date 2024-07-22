import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../../../../.storybook/componentsDecorator';
import { IsLoading } from './IsLoading';

export default {
  title: 'Features/Edit/components/IsLoading/IsLoading',
  component: IsLoading,
  decorators: [componentsDecorator({})],
  parameters: {
    msw: {
      handlers: {
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof IsLoading>;

type Story = StoryObj<typeof IsLoading>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  useEffect(() => {}, []);

  return (
    <>
      <IsLoading {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  title: 'Hello world'
};
