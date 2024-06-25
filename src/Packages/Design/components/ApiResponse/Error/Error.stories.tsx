import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Error } from './Error';
import { componentsDecorator } from '../../../../../.storybook/componentsDecorator';

export default {
  title: 'Packages/Design/components/ApiResponse/Error/Error',
  component: Error,
  decorators: [componentsDecorator({})],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Error>;

type Story = StoryObj<typeof Error>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  return (
    <>
      <Error {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  title: 'hello',
};
