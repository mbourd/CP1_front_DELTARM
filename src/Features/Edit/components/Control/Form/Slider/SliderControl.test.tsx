import React from 'react';
import * as stories from './SliderControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
const { Slider } = composeStories(stories);

describe('Slider control', () => {
  describe('Slider', () => {
    test('Should render the slider', async () => {
      render(<Slider />);
    });
    // test('Should render the correct UI', async () => {
    //   const { queryByText, getByRole, getByDisplayValue } = render(<Slider />);
    //   expect(screen.getByText('Slider control')).toBeInTheDocument();
    //   expect(screen.getByDisplayValue('50')).toBeInTheDocument();
    //   const input = screen.getByDisplayValue('50');
    //   expect(input).toHaveAttribute('min');
    //   expect(input).toHaveAttribute('max');
    //   expect(input).toHaveAttribute('step');
    // });
    // test('should save new value when change the cursor', async () => {
    //   const { queryByText, getByRole, getByDisplayValue } = render(<Slider />);
    //   const input = screen.getByDisplayValue('50');
    //   fireEvent.change(input, { target: { value: '10' } });
    //   expect(screen.getByDisplayValue('10')).toBeInTheDocument();
    // });
  });
});
