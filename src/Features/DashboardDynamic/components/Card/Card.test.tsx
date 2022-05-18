import React from 'react';
import * as stories from './Card.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
const { CardDashboard } = composeStories(stories);

describe('Card Dashboard', () => {
  // describe is a test suite
  describe('Display dashboard', () => {
    // test is a test case
    test('Should display header on card dashboard', async () => {
      const { getByText, getByRole } = render(<CardDashboard />);
      expect(getByRole('banner')).toBeInTheDocument();
      expect(getByText('4 Contrôles à réaliser')).toBeInTheDocument();
    });
    test('Should display table header on card dashboard', async () => {
      const { getByText } = render(<CardDashboard />);
      expect(getByText('Etat')).toBeInTheDocument();
      expect(getByText('+')).toBeInTheDocument();
      expect(getByText('Fini')).toBeInTheDocument();
      expect(getByText('BI')).toBeInTheDocument();
    });
  });
});
