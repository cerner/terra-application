const path = require('path');
const { merge } = require('webpack-merge');
const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const demoConfig = () => ({
  mode: 'development',
  entry: {
    app: './site/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './site/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), demoConfig(env, argv))
);

module.exports = mergedConfig;
