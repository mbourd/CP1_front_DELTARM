import React from 'react';
import * as stories from './CircularMetric.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
const { CircularIndicator } = composeStories(stories);

describe('Metric', () => {
  describe('Metric', () => {
    test('Should render the Metric', async () => {
      render(<CircularIndicator />);
    });
  });
});
