import React from 'react';
import * as stories from './DisplayControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components/macro';
import { BPITheme } from '../../../../../Packages/Design';
import { DisplayControl } from './DisplayControl';
const { TextControl, UploadFileControl, EmailControl } = composeStories(
  stories,
);

describe('DisplayControl', () => {
  describe('Display Control', () => {
    test('Should render the controls', async () => {
      // why theme is not handled by preview.js ?
      render(
        <ThemeProvider theme={BPITheme}>
          <TextControl />
          <EmailControl />
          <UploadFileControl />
        </ThemeProvider>,
      );
      // expect(wrapper.instance()).toBeCalled();
      // userEvent.click(getByText('Click me!'));
      // https://testing-library.com/docs/queries/about/
      // expect.toBeInTheDocument();
    });

    // it('has an initial state', () => {
    //   expect(wrapper.state()).toBeValid();
    // });
  });
});
