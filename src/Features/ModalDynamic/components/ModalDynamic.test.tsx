import React from 'react';
import * as stories from './ModalDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from 'setupTests';
const { Modal } = composeStories(stories);

describe('ModalDynamic', () => {
  describe('ModalDynamic', () => {
    test('Should render the modal', async () => {
      render(<Modal />);
    });
  });
});
