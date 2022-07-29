import React from 'react';
import * as stories from './RichTextControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent, waitFor } from 'setupTests';
const { RichText, RichTextDisabled } = composeStories(stories);


describe('Rich Text Control', () => {
  test('Should render options rich text control', async () => {
    const { getByTitle, getByRole } = render(<RichText />);
    expect(getByTitle('Gras')).toBeInTheDocument();
    expect(getByTitle('Italique')).toBeInTheDocument();
    expect(getByTitle('Souligner')).toBeInTheDocument();
    expect(getByTitle('Barrer')).toBeInTheDocument();
    expect(getByRole('textbox')).toHaveAttribute('contenteditable', 'true');
    // Todo enhanced test with actions and screen.logTestingPlaygroundURL()
  });
});
