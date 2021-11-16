import React from 'react';
import * as stories from './SearchBar.stories';
import { composeStories } from '@storybook/testing-react';
import { renderWithTheme } from '../../../../Packages/Helpers/src/test';
const { Search } = composeStories(stories);

describe('Search Bar', () => {
  describe('Search Bar', () => {
    test('Should render the search bar with props', async () => {
      renderWithTheme(<Search />);
      // verify informations in the DOM
    });
  });
});
