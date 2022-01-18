import React from 'react';
import * as stories from './DashboardDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { Dashboard } = composeStories(stories);
import DASHBOARD from '../../../mocks/fixtures/dashboard/dashboard';
import { rest } from 'msw';

describe('DashboardDynamic', () => {
  describe('DashboardDynamic', () => {
    test('Should render the Dashboard', async () => {
      render(<Dashboard />);
    });
    test('Should call the msw api to get dashboard data', async () => {
      const { queryByText } = render(<Dashboard />);
      // expect(screen.getByText('Aucun contrôle disponible')).toBeInTheDocument();
      // await waitFor(() => {
      //   expect(
      //     queryByText('Aucun contrôle disponible'),
      //   ).not.toBeInTheDocument();
      // });
      // screen.debug();
      // why msw storybook are not imported in test ?
    });
    // test('Should call the msw api to get modal data from search bar', async () => {
    //   const { getByText } = render(<Dashboard />);
    //   fireEvent.click(getByText('Lancer la recherche'));
    // });
  });
});
