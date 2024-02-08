import React, { useEffect } from 'react';
import { DashboardDynamic } from './DashboardDynamic';
import { worker } from '../../../mocks/server';
import { rest } from 'msw';
import {
  DASHBOARD_KLESIA,
  DASHBOARD_BPI,
  DASHBOARD_CHANTIER_ABC,
  DASHBOARD_CNIM,
  AG_GRID_DASHBOARD,
} from '../../../mocks/fixtures/dashboard/dashboard';
import { data as MODAL } from '../../../mocks/fixtures/modal/modal';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { appStore } from 'Services';

import '../reducer';

export default {
  title: 'DashboardDynamic',
  component: DashboardDynamic,
  decorators: [
    (story: any) => (
      <Provider store={appStore}>
        <RecoilRoot>
          <div className="p-6">{story()}</div>
        </RecoilRoot>
      </Provider>
    ),
  ],
};

const Template: any = (args: any) => {
  useEffect(() => () => worker?.resetHandlers());

  return <DashboardDynamic {...args} />;
};

export const DashboardBPI = Template.bind({});
DashboardBPI.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(DASHBOARD_BPI));
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

export const DashboardKlesia = Template.bind({});
DashboardKlesia.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(DASHBOARD_KLESIA));
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

export const DashboardChantierABC = Template.bind({});
DashboardChantierABC.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(DASHBOARD_CHANTIER_ABC));
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

export const DashboardCNIM = Template.bind({});
DashboardCNIM.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(DASHBOARD_CNIM));
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

export const DashboardAgGrid = Template.bind({});
DashboardAgGrid.decorators = [
  (story: any) => {
    worker?.use(
      rest.get('https://undefined/dashboard/contr_perm', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(AG_GRID_DASHBOARD));
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
