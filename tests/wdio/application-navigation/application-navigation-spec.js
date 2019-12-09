const selector = '#root';

Terra.describeViewports('ApplicationNavigation', ['large'], () => {
  describe('Prompts Enabled', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/application-navigation-test'));

    it('prompts user when selecting primary navigation items', () => {
      browser.click('#pending-action-toggle');
      browser.click('div[aria-label="Page 2"]');

      browser.waitForVisible('[data-terra-notification-dialog="true"]');
      Terra.validates.element('1. primary navigation item prompt', { selector });

      browser.click('[data-terra-notification-dialog="true"] button:nth-child(1)');
      Terra.validates.element('2. primary navigation item prompt reject', { selector });

      browser.click('div[aria-label="Page 2"]');
      browser.waitForVisible('[data-terra-notification-dialog="true"]');
      browser.click('[data-terra-notification-dialog="true"] button:nth-child(2)');
      Terra.validates.element('3. primary navigation item prompt accept', { selector });
    });

    it('prompts user when selecting logout', () => {
      browser.click('#pending-action-toggle');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-terra-popup-content="true"] button');

      browser.waitForVisible('[data-terra-notification-dialog="true"]');
      Terra.validates.element('4. logout prompt item prompt', { selector });

      browser.click('[data-terra-notification-dialog="true"] button:nth-child(1)');
      Terra.validates.element('5. logout prompt reject', { selector });

      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-terra-popup-content="true"] button');

      browser.waitForVisible('[data-terra-notification-dialog="true"]');
      browser.click('[data-terra-notification-dialog="true"] button:nth-child(2)');
      Terra.validates.element('6. logout prompt accept', { selector });
    });
  });

  describe('Prompts Disabled', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/application-navigation-disabled-prompts-test'));

    it('does not prompt user when selecting primary navigation items', () => {
      browser.click('#pending-action-toggle');
      browser.click('div[aria-label="Page 2"]');

      Terra.validates.element('1. no prompt for primary navigation items', { selector });
    });

    it('does not prompt user when selecting logout', () => {
      browser.click('#pending-action-toggle');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-terra-popup-content="true"] button');

      Terra.validates.element('2. no prompt for logout', { selector });
    });
  });
});
