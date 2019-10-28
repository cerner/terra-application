module.exports = {
  globalSetup: './jestGlobalSetup.js',
  collectCoverageFrom: [
    '/src/**.js',
    '/src/**.jsx',
  ],
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    'github-markdown-css': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
};
