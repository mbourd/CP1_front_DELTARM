import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';
import { worker } from '../src/mocks/server';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();
addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

addDecorator(ThemeDecorator);
