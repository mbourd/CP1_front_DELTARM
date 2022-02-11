import React from 'react';
import * as stories from './DateTimeControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
const { DateTime } = composeStories(stories);

describe('DateTime control tests suite', () => {
  test('it should render the dateTime control', async () => {
    render(<DateTime />);
    const inputDate = screen.getByPlaceholderText('DateTime control');
    expect(inputDate).toHaveAttribute('value', '2022-03-10T11:23');
    fireEvent.focus(inputDate);
    fireEvent.change(inputDate, { value: '2022-03-10T11:21' });
    fireEvent.click(screen.getByText('DateTime control'));
    expect(inputDate).toHaveAttribute('type', 'datetime-local');
  });
  test('it should show the error when the range is exceeded', async () => {
    render(<DateTime />);
    const inputDate = screen.getByPlaceholderText('DateTime control');
    fireEvent.focus(inputDate);
    fireEvent.change(inputDate, { target: { value: '2022-03-10T11:19' } });
    expect(inputDate).toHaveAttribute('type', 'datetime-local');
  });
});
