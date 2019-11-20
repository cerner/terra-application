const selector = '#root';

Terra.describeViewports('ModalManager', ['large'], () => {
  describe('Disclosure Container', () => {
    before(() => browser.url('/#/raw/tests/terra-application/slide-panel-manager/navigation-prompt'));
    it('opens the slide-panel', () => {
      browser.click('#root-component .disclose-large');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
    });

    it('renders the panel in an disclosure container', () => {
      expect(browser.isExisting('[data-disclosure-container="true"]')).to.be.true;
      Terra.validates.element({ selector });
    });

    it('opens a nested slide-panel', () => {
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny', 1000);
    });

    it('renders each disclosed component in a disclosure container', () => {
      expect(browser.isExisting('[data-disclosure-container="true"')).to.be.true;
      Terra.validates.element('nested disclosure', { selector });
      browser.click('[class*="slide-group"] #DemoContainer-2 .close-disclosure');
    });
  });
});
