import React from 'react';
import * as stories from './DataGridControlAgGrid.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { DataGridAgGrid } = composeStories(stories);

describe('Data Grid Control AG Grid', () => {
  test('Should have a button for pdf export', async () => {
    const { getByText } = render(<DataGridAgGrid />);
    expect(getByText('Export PDF')).toBeInTheDocument();
  });
  test('Should render the columns header and the grid', async () => {
    const { container } = render(<DataGridAgGrid />);
    const longtext = container.querySelector('[col-id="LongText"]');
    expect(longtext).toHaveTextContent('LongText');
    const decimal = container.querySelector('[col-id="Decimal"]');
    expect(decimal).toHaveTextContent('Decimal');
    const boolean = container.querySelector('[col-id="Boolean"]');
    expect(boolean).toHaveTextContent('Boolean');
    const text = container.querySelector('[col-id="Text"]');
    expect(text).toHaveTextContent('Text');
    const select = container.querySelector('[col-id="Select"]');
    expect(select).toHaveTextContent('Select');
    const file_upload = container.querySelector('[col-id="File_upload"]');
    expect(file_upload).toHaveTextContent('File_upload');
    const date = container.querySelector('[col-id="Date"]');
    expect(date).toHaveTextContent('Date');
    const financial = container.querySelector('[col-id="Financial"]');
    expect(financial).toHaveTextContent('Financial');
    const percent = container.querySelector('[col-id="Percent"]');
    expect(percent).toHaveTextContent('Percent');
    const integer = container.querySelector('[col-id="Integer"]');
    expect(integer).toHaveTextContent('Integer');
  });
  // test('Should have a click button to add a row', async () => {
  //   const { getByTitle } = render(<DataGridAgGrid />);
  //   expect(getByTitle("Ajouter une ligne'")).toBeInTheDocument();
  // });
  // test('Should call for a new row while clicking on button', async () => {
  //   const { getByTitle } = render(<DataGridAgGrid />);
  //   const button = getByTitle("Ajouter une ligne'");
  //   expect(button).toBeInTheDocument();
  //   fireEvent.click(button);
  // });
});
