import React from 'react';
import * as stories from './DashboardDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
import data from '../../../mocks/fixtures/dashboard/dashboard';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
const { Dashboard } = composeStories(stories);

// Establish API mocking before all tests.
beforeAll(() => server?.listen({ onUnhandledRequest: 'warn' }));

// Reset any request handlers that we may add during the tests,
afterEach(() => server?.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server?.close());

describe('DashboardDynamic', () => {
  describe('DashboardDynamic', () => {
    test('Should render the Dashboard', async () => {
      render(<Dashboard />);
    });
    test('Should call the mocked API to get datas', async () => {
      rest.get(
        'https://controle-api-dev.deltarm.com:8082/dashboard/contr_perm',
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({ data: data }));
        },
      );
      render(<Dashboard />);
      // screen.debug();
      // verify here that we have the correct informations in the dom
    });
  });
});
