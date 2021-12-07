import React from 'react';
import * as stories from './LinearMetric.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from '../../../../../setupTests';
const { LinearIndicator } = composeStories(stories);

describe('Linear Metric', () => {
  describe('metric', () => {
    test('Should render the linear metric', async () => {
      render(<LinearIndicator />);
    });
  });
});
