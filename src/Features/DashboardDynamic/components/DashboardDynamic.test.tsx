import React from 'react';
import * as stories from './DashboardDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { renderWithTheme } from '../../../Packages/Helpers/src/test';
import data from '../../../mocks/fixtures/dashboard/dashboard';
import { rest } from 'msw';
const { Dashboard } = composeStories(stories);

describe('DashboardDynamic', () => {
  describe('DashboardDynamic', () => {
    test('Should render the Dashboard', async () => {
      renderWithTheme(<Dashboard />);
    });
    test('Should call the mocked API to get datas', async () => {
      rest.get(
        'https://controle-api-dev.deltarm.com:8082/dashboard/contr_perm',
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({ data: data }));
        },
      );
      renderWithTheme(<Dashboard />);
      // verify here that we have the correct informations in the dom
    });
  });
});
