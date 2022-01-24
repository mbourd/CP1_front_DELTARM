import React from 'react';
import { Logout } from './Logout';

export default {
  title: 'Logout',
  component: Logout,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <Logout {...args} />;
};

export const LogOut = Template.bind({});
