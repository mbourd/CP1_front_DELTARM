import React from 'react';
import * as stories from './Heading.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
const { Header } = composeStories(stories);

describe('Heading', () => {
  describe('Heading', () => {
    test('Should render the header with the title', async () => {
      const { getByText } = render(<Header>Title</Header>);
      expect(getByText('Title')).toBeInTheDocument();
    });
  });
});
