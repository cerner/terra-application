module.exports = (api) => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
    ignore: ['./packages/terra-polyfill/src/index.js'],
  };
};
