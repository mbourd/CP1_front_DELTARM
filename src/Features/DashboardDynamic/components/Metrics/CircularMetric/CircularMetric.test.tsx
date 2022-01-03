import React from 'react';
import * as stories from './CircularMetric.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
const { CircularIndicator } = composeStories(stories);

describe('Metric', () => {
  describe('Metric', () => {
    test('Should render the circular metric', async () => {
      const { getByRole } = render(<CircularIndicator />);
      expect(getByRole('progressbar')).toBeInTheDocument();
      expect(getByRole('progressbar')).toHaveAttribute('role', 'progressbar');
      expect(getByRole('progressbar')).toHaveAttribute(
        'title',
        'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
      );
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '74');
    });
  });
});
