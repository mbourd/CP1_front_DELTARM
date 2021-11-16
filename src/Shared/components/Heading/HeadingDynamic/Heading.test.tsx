import React from 'react';
import * as stories from './Heading.stories';
import { composeStories } from '@storybook/testing-react';
import { renderWithTheme } from '../../../../Packages/Helpers/src/test';
const { Header } = composeStories(stories);

describe('Heading', () => {
  describe('Heading', () => {
    test('Should render the header with the title', async () => {
      renderWithTheme(<Header>Title</Header>);
    });
  });
});
