import React from 'react';
import * as stories from './DashboardDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
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
    test('Should call the msw api to get dashboard data', async () => {
      render(<Dashboard />);
      screen.debug();
      // verify here that we have the correct informations in the dom
    });
    test('Should call the msw api to get modal data from search bar', async () => {
      const { getByText } = render(<Dashboard />);
      fireEvent.click(getByText('Lancer la recherche'));
      console.log(screen.debug());
    });
  });
});
