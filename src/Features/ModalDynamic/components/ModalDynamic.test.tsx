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
    test('Should render the text component', async () => {
      render(<Modal />);
      const text = screen.getByText('Le texte a afficher');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Le texte a afficher');
    });
    test('Should render the img on the modal', async () => {
      render(<Modal />);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('src', 'https://picsum.photos/200/300');
      expect(img).toHaveAttribute('alt', 'modal-image');
    });
    test('Should render the input text', async () => {
      render(<Modal />);
      const inputs = screen.getAllByRole('textbox');
      inputs.forEach((input: HTMLInputElement) => {
        expect(input).toBeInTheDocument();
      });
    });
    test('Should render the select list', async () => {
      render(<Modal />);
      const select = screen.getByText('Sélectionner une valeur');
      expect(select).toBeInTheDocument();
    });
    test('Should have a cancel button', async () => {
      render(<Modal />);
      const button = screen.getByText('Annuler');
      expect(button).toBeInTheDocument();
    });
    test('Should render the table component', async () => {
      render(<Modal />);
      const table = screen.getByText('DELCOURT FERROVIAIRE');
      const text = screen.getByText('CTR019/00');
      expect(table).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });
});
