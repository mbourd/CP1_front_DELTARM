import React from 'react';
import * as stories from './TimeControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
const { Time } = composeStories(stories);

describe('Time control tests suite', () => {
  test('it should render the time control', async () => {
    const result = render(<Time />);
    const inputTime = result.container.querySelector('#time-control1987');
    expect(inputTime).toHaveAttribute('type', 'time');
    expect(inputTime).toHaveAttribute('value', '11:00');
  });
});
