const path = require('path');

module.exports = (api) => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
    ignore: [(filename) => filename === path.resolve(path.join(__dirname, 'packages', 'terra-polyfill', 'src', 'index.js'))],
  };
};
