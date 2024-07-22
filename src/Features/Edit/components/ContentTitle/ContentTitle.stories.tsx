import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../../../../.storybook/componentsDecorator';
import { ContentTitle } from './ContentTitle';

export default {
  title: 'Features/Edit/components/ContentTitle/ContentTitle',
  component: ContentTitle,
  decorators: [componentsDecorator({})],
  parameters: {
    msw: {
      handlers: {
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ContentTitle>;

type Story = StoryObj<typeof ContentTitle>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  useEffect(() => {}, []);

  return (
    <>
      <ContentTitle {...args}>{args.children}</ContentTitle>
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  children: 'hello world'
};
