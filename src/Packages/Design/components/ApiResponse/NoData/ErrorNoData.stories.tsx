import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { componentsDecorator } from '../../../../../.storybook/componentsDecorator';
import { ErrorNoData } from './ErrorNoData';

export default {
  title: 'Packages/Design/components/ApiResponse/NoData/ErrorNoData',
  component: ErrorNoData,
  decorators: [componentsDecorator({})],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof ErrorNoData>;

type Story = StoryObj<typeof ErrorNoData>;

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  return (
    <>
      <ErrorNoData {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  title: 'hello',
};
