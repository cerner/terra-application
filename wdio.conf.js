// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('terra-toolkit/config/wdio/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

const defaultBefore = wdioConfig.before;
wdioConfig.before = () => {
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
    const selector = `[data-testid="${testId}"]`;

    global.browser.waitForVisible(selector);
    global.browser.click(selector);
  });

  global.browser.addCommand('clickWithAttribute', (key, value) => {
    const selector = `[${key}=${value}]`;

    global.browser.waitForVisible(selector);
    global.browser.click(selector);
  });
};

exports.config = wdioConfig;
