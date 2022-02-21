import React from 'react';
import * as stories from './DataGridControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { DataGrid, DataGridDisabled } = composeStories(stories);

describe('Data Grid Control', () => {
  test('Should render data grid', async () => {
    render(<DataGrid />);
  });
  test('Should render data grid disabled', async () => {
    render(<DataGrid />);
  });
});
