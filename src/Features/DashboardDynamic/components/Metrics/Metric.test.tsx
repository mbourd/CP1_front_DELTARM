import React from 'react';
import * as stories from './Metric.stories';
import { composeStories } from '@storybook/testing-react';
import { renderWithTheme } from '../../../../Packages/Helpers/src/test';
const { MetricCustom } = composeStories(stories);

describe('Metric', () => {
  describe('Metric', () => {
    test('Should render the Metric', async () => {
      renderWithTheme(<MetricCustom />);
    });
  });
});
