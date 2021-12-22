import React from 'react';
import { DashboardDynamic } from './DashboardDynamic';
import { worker } from '../../../mocks/server';
import { rest } from 'msw';
import data from '../../../mocks/fixtures/dashboard/dashboard';
import { RecoilRoot } from 'recoil';

export default {
  title: 'DashboardDynamic',
  component: DashboardDynamic,
  decorators: [
    (story: any) => (
      <RecoilRoot>
        <div className="p-6">{story()}</div>
      </RecoilRoot>
    ),
  ],
};

const Template: any = (args: any) => {
  worker?.use(
    rest.get(
      'https://controle-api-dev.deltarm.com:8082/dashboard/contr_perm',
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
      },
    ),
  );

  return <DashboardDynamic {...args} />;
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  // all the data comes from ths msw mock
};
