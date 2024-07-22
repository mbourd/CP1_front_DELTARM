import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../../../.storybook/componentsDecorator';
import { NoData } from './NoData';

export default {
  title: 'Features/Edit/components/NoData',
  component: NoData,
  decorators: [componentsDecorator({})],
  parameters: {
    msw: {
      handlers: {
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof NoData>;

type Story = StoryObj<typeof NoData>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  useEffect(() => {}, []);

  return (
    <>
      <NoData {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
};
