const path = require('path');
const { merge } = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
} = require('./packages/terra-dev-site');



const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const loadSiteConfig = require('./packages/terra-dev-site/scripts/generate-app-config/loadSiteConfig');

const devSiteConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;
  const processPath = process.cwd();

  // Load the site configuration.
  const siteConfig = loadSiteConfig();

  siteConfig.appConfig = {
    ...siteConfig.appConfig,
    subline: 'Extended',
  };

  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({
        env,
        sites: [{
          siteConfig,
          prefix: 'terra-application',
          indexPath: path.resolve(path.join(__dirname, 'packages', 'terra-dev-site', 'lib', 'ExtendDevSite')),
        }],
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.jst'],
      plugins: [
        new DirectorySwitcherPlugin({
          shouldSwitch: !production,
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
        new LocalPackageAliasPlugin({
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
      ],
    },
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
