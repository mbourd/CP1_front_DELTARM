import React from 'react';
import * as stories from './DataGridControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { DataGrid } = composeStories(stories);

describe('Data Grid Control', () => {
  test('Should render the columns header and the grid', async () => {
    const { getByRole } = render(<DataGrid />);
    const grid = getByRole('grid');
    expect(grid).toBeVisible();
    const header1 = getByRole('columnheader', {
      name: /column title to display file_upload/i,
    });
    expect(header1).toBeInTheDocument();
    const header2 = getByRole('columnheader', {
      name: /column title to display integer/i,
    });
    expect(header2).toBeInTheDocument();
  });
  // test('Should have a click button', async () => {
  //   const { getByTitle } = render(<DataGrid />);
  //   expect(getByTitle("Ajouter une ligne'")).toBeInTheDocument();
  // });
  // test('Should call for a new row while clicking on button', async () => {
  //   const { getByTitle } = render(<DataGrid />);
  //   const button = getByTitle("Ajouter une ligne'");
  //   expect(button).toBeInTheDocument();
  //   fireEvent.click(button);
  // });
});
