import React from 'react';
import * as stories from './Card.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
const { CardDashboard } = composeStories(stories);

describe('Card Dashboard', () => {
  // describe is a test suite
  describe('Display dashboard', () => {
    // test is a test case
    test('Should display text on card dashboard', async () => {
      const { getByText, getByRole } = render(<CardDashboard />);
      expect(getByRole('banner')).toBeInTheDocument();
      expect(getByText('4 Contrôles à réaliser')).toBeInTheDocument();
    });
  });
});
