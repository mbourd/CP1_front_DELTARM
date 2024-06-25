import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'msw-storybook-addon';
// import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../src/.storybook/componentsDecorator';
import { BPIGlobalStyle, BPITheme } from '../src/Packages/Design';
import { ThemeProvider } from 'styled-components';
import { http, HttpResponse } from 'msw';

initialize({
  // onUnhandledRequest: 'bypass',
  onUnhandledRequest: ({ method, url }) => {
    if (url.startsWith('https://undefined/'))
      console.error(`Unhandled ${method} request to ${url}

      This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

      If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
    `);
  },
});

const styledComponentsDecorator = withThemeFromJSXProvider({
  GlobalStyles: BPIGlobalStyle,
  themes: {
    default: BPITheme,
  },
  defaultTheme: 'default',
  Provider: ThemeProvider,
});

const preview: Preview = {
  decorators: [componentsDecorator({}), styledComponentsDecorator],
  parameters: {
    layout: 'centered',
    actions: {
      // // We recommend removing the argTypesRegex and assigning explicit action with the fn function from @storybook/test instead:
      // // https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
      // argTypesRegex: '^on[A-Z].*'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: {
        setControlValue: http.post('**/control/set_value', () => {
          return HttpResponse.json({}, { status: 201 });
        }),
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;

// export const decorators = [componentsDecorator({})];
