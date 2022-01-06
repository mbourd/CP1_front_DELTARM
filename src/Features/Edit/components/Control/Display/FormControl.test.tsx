import React from 'react';
import * as stories from './FormControl.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from 'setupTests';
// import userEvent from '@testing-library/user-event';
const { TextControl, UploadFileControl, EmailControl } =
  composeStories(stories);

describe('Form Control', () => {
  describe('Form Controls Fields', () => {
    test('Should render the controls', async () => {
      render(
        <>
          <TextControl />
          <EmailControl />
          <UploadFileControl />
        </>,
      );
      // expect(wrapper.instance()).toBeCalled();
      // userEvent.click(getByText('Click me!'));
      // https://testing-library.com/docs/queries/about/
      // expect.toBeInTheDocument();
    });
  });
});
