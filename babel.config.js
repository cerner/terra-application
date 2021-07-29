module.exports = (api) => {
  api.cache(false);
  api.assertVersion('^7.4.4');

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: '3.15' }],
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
  };
};
