const path = require('path');
const { merge } = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
} = require('terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const devSiteConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;
  const processPath = process.cwd();

  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({ env }),
    ],
    resolve: {
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

module.exports = mergedConfig;
