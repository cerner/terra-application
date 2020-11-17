// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('terra-toolkit/config/wdio/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

wdioConfig.specs = [
  '/Users/se028266/Github/terra/terra-application/tests/wdio/application-base/application-base-spec.js',
  '/Users/se028266/Github/terra/terra-application/tests/wdio/application-error-boundary/application-error-boundary-spec.js',
  '/Users/se028266/Github/terra/terra-application/tests/wdio/application-loading-overlay/application-loading-overlay-spec.js',
  '/Users/se028266/Github/terra/terra-application/tests/wdio/application-status-overlay/application-status-overlay-spec.js',
];

const defaultBefore = wdioConfig.before;
wdioConfig.before = () => {
  if (defaultBefore) {
    defaultBefore();
  }

  global.browser.addCommand('disableCSSAnimations', () => {
    global.browser.execute(`
      var animationOverride = document.createElement('style');
      animationOverride.appendChild(document.createTextNode('body * { animation: none !important; }'));
      document.head.appendChild(animationOverride);
    `);
  });
};

exports.config = wdioConfig;
