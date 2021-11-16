import React from 'react';
import { Heading, IProps } from './Heading';

export default {
  title: 'HeadingDynamic',
  component: Heading,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: IProps) => <Heading {...args} />;

export const Header = Template.bind({});
Header.args = {
  variant: 'main',
  children: 'titi',
  style: {
    color: '#a345',
    fontSize: '23px',
  },
};
