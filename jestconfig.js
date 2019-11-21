module.exports = {
  collectCoverageFrom: [
    '/src/**.js',
    '/src/**.jsx',
  ],
  globalSetup: './jestGlobalSetup.js',
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  roots: [process.cwd()],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg)$': 'identity-obj-proxy',
    'github-markdown-css': 'identity-obj-proxy',
  },
};
