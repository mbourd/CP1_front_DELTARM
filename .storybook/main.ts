import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  webpackFinal: async (config, { configType }) => {
    config.resolve?.modules?.push(path.resolve(__dirname, '../src'));
    config.resolve?.modules?.push('node_modules');
    config.resolve?.extensions?.push('.ts', '.tsx');

    // config.resolve!.alias = {
    //   ...config.resolve!.alias,
    //   '@': path.resolve(__dirname, '../src'),
    // };

    // config.resolve!.plugins!.push(
    //   new TsconfigPathsPlugin({
    //     extensions: config.resolve!.extensions,
    //     configFile: path.resolve(__dirname, '../tsconfig.json'),
    //   }),
    // );

    return config;
  },
  stories: [
    // '../src/**/*.mdx',
    '../**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
};
export default config;
