Terra.describeViewports('ApplicationStatusOverlay', ['large'], () => {
  describe('Status View', () => {
    it('renders with all props', () => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-all-props');
    });

    Terra.it.validatesElement('all props', { selector: '#root' });
  });

  describe('Status View variant', () => {
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

    it('should make background elements inert when status view is overlaid', () => {
      browser.click('#reset-button');
      browser.click('#error-button');
      expect(browser.getAttribute('#test-status-view-container > [data-status-overlay-container-content="true"]', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
      expect(browser.getAttribute('#test-status-view-container > [data-status-overlay-container-content="true"]', 'aria-hidden')).to.equal('true');
    });

    it('should enable interaction of background elements once status view is removed', () => {
      browser.click('#reset-button');
      expect(browser.getAttribute('#test-status-view-container > [data-status-overlay-container-content="true"]', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
      expect(browser.getAttribute('#test-status-view-container > [data-status-overlay-container-content="true"]', 'aria-hidden')).to.equal(null);
    });
  });

  describe('Status View registration order', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-priority');
    });

    it('renders with last registered status view', () => {
      browser.click('#show-status');
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('renders with same last registered status view even after updates to other status views', () => {
      browser.click('#button1');
      browser.click('#button2');
    });

    Terra.it.validatesElement('other status view updates', { selector: '#root' });

    it('renders with updated last registered status view', () => {
      browser.click('#button3');
    });

    Terra.it.validatesElement('updated last registered status view', { selector: '#root' });
  });
});
