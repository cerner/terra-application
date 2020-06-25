const path = require('path');
const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const demoConfig = (env = {}, argv = {}) => ({
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
  // plugins: [
  //   new TerraDevSite({ env }),
  // ],
  // resolve: {
  //   plugins: [
  //     new DirectorySwitcherPlugin({
  //       shouldSwitch: hotReloading && !production,
  //       rootDirectories: [
  //         processPath,
  //         path.resolve(processPath, 'packages', '*'),
  //       ],
  //     }),
  //     new LocalPackageAliasPlugin({
  //       rootDirectories: [
  //         processPath,
  //         path.resolve(processPath, 'packages', '*'),
  //       ],
  //     }),
  //   ],
  // },
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), demoConfig(env, argv))
);

module.exports = mergedConfig;
