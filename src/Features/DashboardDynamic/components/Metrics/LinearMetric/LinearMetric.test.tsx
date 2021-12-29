import React from 'react';
import * as stories from './LinearMetric.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from '../../../../../setupTests';
const { LinearIndicator } = composeStories(stories);

describe('Linear Metric', () => {
  describe('metric', () => {
    test('Should render the linear metric', async () => {
      const { getByRole } = render(<LinearIndicator />);
      expect(getByRole('progressbar')).toBeInTheDocument();
      expect(getByRole('progressbar')).toHaveAttribute('role', 'progressbar');
      expect(getByRole('progressbar')).toHaveAttribute(
        'title',
        'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
      );
      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '54');
    });
  });
});
