Terra.describeViewports('ApplicationLoadingOverlay', ['large'], () => {
  before(() => {
    browser.url('/raw/tests/terra-application/application-loading-overlay/loading-overlay-test');
    browser.disableCSSAnimations();
    browser.moveToObject('#root', 0, 0);
  });

  it('should render the initial page', () => {
    Terra.validates.element('initial', { selector: '#root' });
  });

  it('should render the clear overlay', () => {
    browser.click('#clear-button');

    Terra.validates.element('clear overlay', { selector: '#root' });
  });

  it('should render the light overlay', () => {
    browser.click('#reset-button');
    browser.click('#light-button');

    Terra.validates.element('light overlay', { selector: '#root' });
  });

  it('should render the dark overlay', () => {
    browser.click('#reset-button');
    browser.click('#dark-button');

    Terra.validates.element('dark overlay', { selector: '#root' });
  });
});
