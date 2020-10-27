Terra.describeViewports('ApplicationLoadingOverlay', ['large'], () => {
  describe('Loading overlay management', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-loading-overlay/loading-overlay-test');
      browser.disableCSSAnimations();
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('shows the clear overlay', () => {
      browser.click('#clear-button');
    });

    Terra.it.validatesElement('with clear overlay', { selector: '#root' });

    it('shows the light overlay', () => {
      browser.click('#reset-button');
      browser.click('#light-button');
    });

    Terra.it.validatesElement('with light overlay', { selector: '#root' });

    it('shows the dark overlay', () => {
      browser.click('#reset-button');
      browser.click('#dark-button');
    });

    Terra.it.validatesElement('with dark overlay', { selector: '#root' });
  });
});
