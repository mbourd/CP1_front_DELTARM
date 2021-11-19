import React from 'react';
import * as stories from './Card.stories';
import { composeStories } from '@storybook/testing-react';
import { renderWithTheme } from '../../../../Packages/Helpers/src/test';
const { CardDashboard } = composeStories(stories);

describe('Card Dashboard', () => {
  describe('Card dashboard', () => {
    test('Should render the card dashboard', async () => {
      renderWithTheme(<CardDashboard />);
    });
  });
});
