// @ts-check
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../.storybook/componentsDecorator';
import { Button } from './Button';
import { styled } from 'styled-components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    msw: {
      handlers: {
        profile: http.post('**/control/set_value', () => {
          return HttpResponse.json({
            firstName: 'Neil',
            lastName: 'Maverick',
          });
        }),
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
      // description: 'Overwritten description',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [componentsDecorator({})],
} as Meta<typeof Button>;

// export default meta;
type Story = StoryObj<typeof Button>;

const Styled = styled.div`
  button {
    color: red !important;
  }
`;

// Define your component story
const DefaultTemplate = (args) => {
  return (
    <Styled>
      <Button {...args} />
    </Styled>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
