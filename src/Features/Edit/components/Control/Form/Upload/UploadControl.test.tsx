import React from 'react';
import * as stories from './UploadControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { Upload, UploadDisabled } = composeStories(stories);

describe('Upload Control', () => {
  test('Should render the upload control', async () => {
    const { queryByText } = render(<Upload />);
    expect(queryByText('tata.png')).toBeInTheDocument();
    expect(queryByText('tutu.png')).toBeInTheDocument();
  });
  test('Should render the upload disabled control', async () => {
    const { queryByText } = render(<UploadDisabled />);
    expect(queryByText('disabled.png')).toBeInTheDocument();
    expect(queryByText('disabled2.png')).toBeInTheDocument();
    const result = render(<UploadDisabled />);
    const containerUpload = result.container.querySelector('#disabled-button');
    expect(containerUpload).toHaveAttribute('disabled');
  });
});
