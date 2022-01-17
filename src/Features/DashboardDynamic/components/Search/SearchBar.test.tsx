import React from 'react';
import * as stories from './SearchBar.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
const { Search } = composeStories(stories);

describe('Search Bar', () => {
  describe('Search Bar', () => {
    test('Should render the search bar and buttons', async () => {
      const { getByText } = render(<Search />);
      expect(getByText('Un libellé storybookien')).toBeInTheDocument();
      expect(getByText('Rechercher par numéro')).toBeInTheDocument();
      expect(getByText("Rechercher par nom d'utilisateur")).toBeInTheDocument();
      expect(getByText('Recherche Globale')).toBeInTheDocument();
    });
  });
});
