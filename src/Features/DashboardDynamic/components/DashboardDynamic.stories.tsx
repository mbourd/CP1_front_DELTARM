import React from 'react';
import { DashboardDynamic } from './DashboardDynamic';
import { worker } from '../../../mocks/server';
import { rest } from 'msw';
import data from '../../../mocks/fixtures/dashboard/dashboard';

export default {
  title: 'DashboardDynamic',
  component: DashboardDynamic,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  worker?.use(
    rest.get(
      'https://controle-api-dev.deltarm.com:8082/dashboard/contr_perm',
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ data: data }));
      },
    ),
  );

  return <DashboardDynamic {...args} />;
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  title: {
    lib: 'Titre du dashboard',
    font_size: '46px',
    font_color: '#a232a8',
    visible: true,
  },
  subtitle: {
    lib: 'Sous-titre du dashboard',
    font_size: '24px',
    font_color: '#3018a8',
    visible: true,
  },
};
