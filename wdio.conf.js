// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

const defaultBefore = config.before;
config.before = () => {
  if (defaultBefore) {
    defaultBefore();
  }

  global.browser.addCommand('disableCSSAnimations', () => {
    global.browser.execute(`
      if (!document.getElementById('wdio-animation-override')) {
        var animationOverride = document.createElement('style');
        animationOverride.id = 'wdio-animation-override';
        animationOverride.appendChild(document.createTextNode('body * { animation: none !important; }'));
        document.head.appendChild(animationOverride);
      }
    `);
  });

  global.browser.addCommand('enableCSSAnimations', () => {
    global.browser.execute(`
      var animationOverride = document.getElementById('wdio-animation-override');
      if (animationOverride) {
        animationOverride.parentNode.removeChild(animationOverride);
      }
    `);
  });

  global.browser.addCommand('clickWithTestId', (testId) => {
    const selector = global.browser.$(`[data-testid="${testId}"]`);
    selector.waitForDisplayed();
    selector.click();
  });

  global.browser.addCommand('clickWithAttribute', (key, value) => {
    const selector = global.browser.$(`[${key}=${value}]`);
    selector.waitForDisplayed();
    selector.click();
  });
};

config.logLevel = 'trace';

exports.config = config;
