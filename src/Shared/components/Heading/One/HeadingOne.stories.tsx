// @ts-ignore
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { componentsDecorator } from '../../../../.storybook/componentsDecorator';

import { HeadingOne } from './HeadingOne';

export default {
  title: 'Shared/components/Heading/One/HeadingOne',
  component: HeadingOne,
  decorators: [componentsDecorator({})],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof HeadingOne>;

type Story = StoryObj<typeof HeadingOne>;

/*************** DEFAULT ***************/
const DefaultTemplate = ({ children, ...rest }) => {
  return (
    <>
      <HeadingOne {...rest}>{children}</HeadingOne>
    </>
  );
};
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  children: 'hello',
};

/*************** Dark ***************/
const DarkTemplate = ({ children, ...rest }) => {
  return (
    <>
      <HeadingOne {...rest}>{children}</HeadingOne>
    </>
  );
};
export const Dark: Story = DarkTemplate.bind({});
Dark.args = {
  variant: 'dark',
  children: 'hello',
};

/*************** Dark ***************/
const LightTemplate = ({ children, ...rest }) => {
  return (
    <>
      <HeadingOne {...rest}>{children}</HeadingOne>
    </>
  );
};
export const Light: Story = LightTemplate.bind({});
Light.args = {
  variant: 'light',
  children: 'hello',
};
