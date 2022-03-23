module.exports = {
  webpack: function override(config, env) {
    const analyzeBundle = process.argv.indexOf('--analyze-bundle') !== -1;

    if (analyzeBundle) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
      config = rewireWebpackBundleAnalyzer(config, env, {
        analyzerMode: 'static',
        reportFilename: 'report.html',
      });
    }

    // If App is in embedded mode, freeze output filenames
    if (process.env.REACT_APP_MODE === 'embedded') {
      // Adapt code spliting to single entry-point
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      config.optimization.runtimeChunk = false;

      // Freeze filenames
      config.output.filename = 'static/js/cp1.embedded.js';

      // Prefix all URLs
      const PUBLIC_URL = (process.env.PUBLIC_URL || '').replace(/\/?$/, '/');
      config.output.publicPath = PUBLIC_URL;

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/assets/index_embed.html',
        }),
      );
    }

    return config;
  },
  devServer: function (configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const defaultConfig = configFunction(proxy, allowedHost);

      return {
        ...defaultConfig,
        hot: true,
        historyApiFallback: true,
      };
    };
  },
};
