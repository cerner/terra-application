Terra.describeViewports('ApplicationStatusOverlay', ['large'], () => {
  describe('Status View', () => {
    it('renders with all props', () => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-all-props');
    });

    Terra.it.validatesElement('all props', { selector: '#root' });
  });

  describe('Status Variant variant', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-variant');
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('renders with no-data variant', () => {
      browser.click('#no-data-button');
    });

    Terra.it.validatesElement('no-data', { selector: '#root' });

    it('renders with error variant', () => {
      browser.click('#reset-button');
      browser.click('#error-button');
    });

    Terra.it.validatesElement('error', { selector: '#root' });

    it('renders with no-matching-results variant', () => {
      browser.click('#reset-button');
      browser.click('#no-matching-results-button');
    });

    Terra.it.validatesElement('no-matching-results', { selector: '#root' });

    it('renders with not-authorized variant', () => {
      browser.click('#reset-button');
      browser.click('#not-authorized-button');
    });

    Terra.it.validatesElement('not-authorized', { selector: '#root' });
  });
});
