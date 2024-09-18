import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// import { componentsDecorator } from '../../../../../.storybook/componentsDecorator';
import { NotFound } from './NotFound';

export default {
  title: 'Features/Edit/components/NotFound/NotFound',
  component: NotFound,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof NotFound>;

type Story = StoryObj<typeof NotFound>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  return (
    <>
      <NotFound {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  title: 'hello',
};
