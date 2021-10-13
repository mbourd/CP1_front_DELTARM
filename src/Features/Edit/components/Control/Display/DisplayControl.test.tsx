import React from 'react';
import * as stories from './DisplayControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { ControlText } = composeStories(stories);

describe('DisplayControl', () => {
  describe('ControlText', () => {
    test('should render the input', async () => {
      const { getByLabelText, getByText, getByTitle, getByTestId, queryByText } = render(<ControlText />);
      getByLabelText('Text label control');
      // userEvent.click(getByText('Click me!'));
      // https://testing-library.com/docs/queries/about/
      expect(queryByText('Hello')).not.toBeInTheDocument();
    });
  });
});
