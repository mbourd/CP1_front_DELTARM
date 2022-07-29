import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';
import { worker } from '../src/mocks/server';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import i18n from './i18n';

initialize();
export const decorators = [mswDecorator];

export const parameters = {
  i18n,
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'fr',
  locales: {
    fr: { title: 'Français', left: '🇫🇷' },
  },
};

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

addDecorator(ThemeDecorator);
