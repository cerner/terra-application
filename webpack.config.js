const path = require('path');
const { merge } = require('webpack-merge');
const WebpackConfigTerra = require('@cerner/webpack-config-terra');
const TerraDevSite = require('./packages/terra-dev-site/src/webpack/plugin/TerraDevSite');

const devSiteConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;
  const processPath = process.cwd();

  // Load the site configuration.
  // const siteConfig = loadSiteConfig();

  // siteConfig.appConfig = {
  //   ...siteConfig.appConfig,
  //   subline: 'Extended',
  // };

  return {
    plugins: [
      new TerraDevSite({
        defaultLocale: env.defaultLocale,
        excludeChunks: ['terra-application-test/index'],
      }),
    ],
  };
};

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), devSiteConfig())
);

module.exports = (env, argv) => {
  const config = mergedConfig(env, argv);
  // Brittle
  config.module.rules[0].oneOf[0].test = /\.(jsx|js|jst)$/;
  return config;
};
