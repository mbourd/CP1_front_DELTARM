import React, { useEffect } from 'react';
import { DashboardDynamic } from './DashboardDynamic';
import { worker } from '../../../mocks/server';
import { rest } from 'msw';
import DASHBOARD from '../../../mocks/fixtures/dashboard/dashboard';
import { data as MODAL } from '../../../mocks/fixtures/modal/modal';
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
  useEffect(() => () => worker?.resetHandlers());

  return <DashboardDynamic {...args} />;
};

export const Dashboard = Template.bind({});
Dashboard.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(DASHBOARD));
      }),
      rest.get(
        'https://undefined/contr_perm/get_search_test',
        (req, res, ctx) => {
          req.url.searchParams.get('value');

          return res(ctx.status(200), ctx.json(MODAL));
        },
      ),
    );

    return story();
  },
];
