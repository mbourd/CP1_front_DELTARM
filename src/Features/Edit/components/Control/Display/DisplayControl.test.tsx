// import React from 'react';
import * as stories from './DisplayControl.stories';
import { composeStories } from '@storybook/testing-react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

const { Controls } = composeStories(stories);

describe('DisplayControl', () => {
  describe('Display Control', () => {
    test('Should render the controls', async () => {
      // render(<Controls />);
      // userEvent.click(getByText('Click me!'));
      // https://testing-library.com/docs/queries/about/
      // expect.toBeInTheDocument();
    });
  });
});
