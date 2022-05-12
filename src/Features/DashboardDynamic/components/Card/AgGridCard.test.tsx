import React from 'react';
import * as stories from './AgGridCard.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
const { AgCardDashboard } = composeStories(stories);

describe('Ad Grid Card Dashboard', () => {
  test('Should display header on ag card', async () => {
    const { getByText } = render(<AgCardDashboard />);
    expect(getByText('Contracts in progress')).toBeInTheDocument();
  });
  test('Should display ag grid header on ag card', async () => {
    const { getByText } = render(<AgCardDashboard />);
    expect(getByText('Contrôle')).toBeInTheDocument();
    expect(getByText('Période')).toBeInTheDocument();
    expect(getByText('Liste')).toBeInTheDocument();
    expect(getByText('Dernier')).toBeInTheDocument();
    expect(getByText('Nouveau')).toBeInTheDocument();
  });
  test('Should display rows on ag card', async () => {
    const { getByText } = render(<AgCardDashboard />);
    expect(getByText('A La fonction de tri')).toBeInTheDocument();
    expect(getByText('SERVICE PARTENARIAT RECHERCHE')).toBeInTheDocument();
  });
});
