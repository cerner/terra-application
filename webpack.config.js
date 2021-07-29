const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const TerraDevSite = require('./packages/terra-dev-site/src/webpack/plugin/TerraDevSite');

const html = fs.readFileSync(require.resolve('./tests/terra-dev-site/head.html'), 'utf8');

const terraApplicationConfig = (env = {}, argv = {}) => ({
  // temporary fix to enable live reloading.
  target: argv.p || argv.mode === 'production' ? 'browserslist' : 'web',
  entry: {
    'terra-application-test/index': './tests/test-harness/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      lang: env.defaultLocale || 'en',
      filename: 'terra-application-test/index.html',
      template: './tests/test-harness/index.html',
      chunks: [
        'terra-application-test/index',
      ],
      rootElementId: 'root',
    }),
    new DefinePlugin({
      TERRA_APPLICATION_LOCALE: JSON.stringify(env.defaultLocale || 'en'),
    }),
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
      excludeChunks: ['terra-application-test/index'],
    }),
    new TerraDevSite({
      pathPrefix: 'extended',
      contentDirectory: 'dev-site-extended-test',
      primaryNavigationItems: [{
        path: '/home',
        label: 'Home',
        contentExtension: 'home',
        additionalContent: [
          {
            label: 'Home',
            filePath: path.resolve(process.cwd(), 'packages', 'terra-dev-site', 'README.md'),
          },
        ],
      }, {
        path: '/extended',
        label: 'Extended',
        contentExtension: 'extended',
      }, {
        path: '/dev_tools',
        label: 'Developer Tools',
        contentExtension: 'tool',
      }, {
        path: '/single-page-test',
        label: 'Single Page Test',
        contentExtension: 'spt',
      }, {
        path: '/secondary-nav-test',
        label: 'Secondary Nav Test',
        contentExtension: 'snt',
      }, {
        path: '/folder-first',
        label: 'Folder First Test',
        contentExtension: 'ff',
      }, {
        path: '/empty',
        label: 'Empty',
        contentExtension: 'empty',
      }, {
        path: '/components',
        label: 'Components',
        contentExtension: 'doc',
      }, {
        path: '/test',
        label: 'Test',
        contentExtension: 'test',
      }],
      titleConfig: {
        title: 'Terra Dev Site - Extended',
      },
      additionalSearchDirectories: [
        path.resolve(process.cwd(), 'packages', 'terra-application-docs', 'lib', 'additionalSearchDirectory'),
      ],
      headHtml: [
        '<script> console.log("Inline head html script") </script>',
        html,
      ],
      // extensionItems: [
      //   {
      //     iconPath: 'terra-icon/lib/icon/IconAllergy',
      //     key: 'terra-application-docs.test-extension',
      //     text: 'Test Extension',
      //     modalFilePath: '@cerner/terra-application-docs/lib/test-extension/TestExtension',
      //   },
      // ],
      excludeChunks: ['terra-application-test/index'],
    }),
  ],
  resolve: {
    extensions: ['.jst'],
  },
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

const hackedConfig = (env = {}, argv = {}) => {
  const config = mergedConfig(env, argv);
  // Brittle
  config.module.rules[0].oneOf[0].test = /\.(jsx|js|jst)$/;

  return config;
};

module.exports = hackedConfig;
