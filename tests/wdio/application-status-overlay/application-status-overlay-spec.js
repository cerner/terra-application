Terra.describeViewports('ApplicationStatusOverlay', ['large'], () => {
  describe('Status View', () => {
    it('should render a status overlay with all props', () => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-all-props');

      Terra.validates.element('all props', { selector: '#root' });
    });
  });

  describe('Status View variant', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-variant');
    });

    it('should render the initial view', () => {
      Terra.validates.element('initial', { selector: '#root' });
    });

    it('should render with no-data variant', () => {
      browser.click('#no-data-button');

      Terra.validates.element('no-data', { selector: '#root' });
    });

    it('should render with error variant', () => {
      browser.click('#reset-button');
      browser.click('#error-button');

      Terra.validates.element('error', { selector: '#root' });
    });

    it('should render with no-matching-results variant', () => {
      browser.click('#reset-button');
      browser.click('#no-matching-results-button');

      Terra.validates.element('no-matching-results', { selector: '#root' });
    });

    it('should render with not-authorized variant', () => {
      browser.click('#reset-button');
      browser.click('#not-authorized-button');

      Terra.validates.element('not-authorized', { selector: '#root' });
    });

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

    it('should render with last registered status view', () => {
      browser.click('#show-status');

      Terra.validates.element('initial', { selector: '#root' });
    });

    it('should render with same last registered status view even after updates to other status views', () => {
      browser.click('#button1');
      browser.click('#button2');

      Terra.validates.element('other status view updates', { selector: '#root' });
    });

    it('should render with updated last registered status view', () => {
      browser.click('#button3');

      Terra.validates.element('updated last registered status view', { selector: '#root' });
    });
  });
});
