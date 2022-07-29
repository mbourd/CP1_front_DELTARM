import React from 'react';
import * as stories from './ModalDynamic.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from 'setupTests';
const { Modal, ModalWorksite } = composeStories(stories);

describe('ModalDynamic', () => {
  describe('ModalDynamic', () => {

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
      const text = screen.getByText('CTR019/01');
      expect(table).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
    test('Should show error message when mandates fields are not set', async () => {
       render(<ModalWorksite />);
      const buttonCreate = screen.getByText('Créer le chantier');
      fireEvent.click(buttonCreate);

    });
    test('Should NOT show error message when mandates fields are set', async () => {
      const { getByText, getByPlaceholderText } = render(<ModalWorksite />);
      const selectListMandate = getByText('Sélectionner une valeur');
      fireEvent.click(selectListMandate);
      fireEvent.click(getByText('Client Chantier ABC'));
      const input = getByPlaceholderText('Renseignez le nom du chantier');
      fireEvent.change(input, {
        target: { value: 'Une valeur mandatory' },
      });
    });
  });
});
