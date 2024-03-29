const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  globalSetup: './jest.globalSetup.js',
  coveragePathIgnorePatterns: [
    ...jestConfig.coveragePathIgnorePatterns,
    '/packages/terra-polyfill/src/index.js',
  ],
  setupFiles: [
    './jest.enzymeSetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
};
