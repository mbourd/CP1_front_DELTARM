import React from 'react';
import * as stories from './JoditRichTextControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
const { JoditRichText, JoditRichTextDisabled } = composeStories(stories);

describe('Jodit Rich Text Control', () => {
  test('Should render jodit rich text control', async () => {
    const { getByText } = render(<JoditRichText />);
    expect(getByText('test data')).toBeInTheDocument();
  });
  test('Should render the options jodit rich text control', async () => {
    const { container } = render(<JoditRichText />);
    const brush = container.querySelector('[ref="brush"]');
    expect(brush).toBeInTheDocument();
    const image = container.querySelector('[ref="image"]');
    expect(image).toBeInTheDocument();
  });
  test('Should be disabled jodit rich text control', async () => {
    const { container } = render(<JoditRichTextDisabled />);
    const bold = container.querySelector('[data-ref="bold"]');
    expect(bold).toHaveAttribute('disabled');
  });
});
