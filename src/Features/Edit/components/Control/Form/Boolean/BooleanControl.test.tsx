import React from 'react';
import * as stories from './BooleanControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
const { Boolean, BooleanDisabled } = composeStories(stories);

describe('Boolean control tests suite', () => {

  test('it should render the boolean control', async () => {
    const result = render(<Boolean />);
    const containerBoolean = result.container.querySelector(
      '#checkbox-boolean1951',
    );
    expect(containerBoolean).toHaveAttribute('type', 'checkbox');
  });
  test('it should be disabled', async () => {
    const result = render(<BooleanDisabled />);
    const containerBoolean = result.container.querySelector(
      '#checkbox-boolean1951',
    );
    expect(containerBoolean).toHaveAttribute('disabled');
  });
});
