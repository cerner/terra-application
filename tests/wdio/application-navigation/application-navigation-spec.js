const selector = '#root';
const NOTIFICATION_DIALOG_SELECTOR = '[data-terra-notification-dialog]';
const ACCEPT_ACTION_SELECTOR = '[data-terra-notification-dialog-button="accept"]';
const REJECT_ACTION_SELECTOR = '[data-terra-notification-dialog-button="reject"]';

Terra.describeViewports('ApplicationNavigation', ['large'], () => {
  describe('Prompts Enabled', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/application-navigation-test'));

    it('prompts user when selecting primary navigation items', () => {
      browser.click('#pending-action-toggle-1');
      browser.click('div[aria-label="Page 2"]');

      browser.waitForVisible(NOTIFICATION_DIALOG_SELECTOR);
      Terra.validates.element('1. primary navigation item prompt', { selector });
    });

    it('rejects prompt on primary navigation', () => {
      browser.click(REJECT_ACTION_SELECTOR);
      Terra.validates.element('2. primary navigation item prompt reject', { selector: '[data-nav-test-content="true"]' });
    });

    it('prompts user when selecting primary navigation items and accepts prompt', () => {
      browser.click('div[aria-label="Page 2"]');
      browser.waitForVisible(NOTIFICATION_DIALOG_SELECTOR);
      browser.click(ACCEPT_ACTION_SELECTOR);
      Terra.validates.element('3. primary navigation item prompt accept', { selector: '[data-nav-test-content="true"]' });
    });

    it('marks multiple items as pending and attempts to navigate away', () => {
      browser.click('#pending-action-toggle-1');
      browser.click('#pending-action-toggle-2');
      browser.click('div[aria-label="Page 1"]');
      browser.waitForVisible(NOTIFICATION_DIALOG_SELECTOR);
      Terra.validates.element('4. primary navigation item prompt with multiple prompts', { selector });
    });

    it('accept prompt on primary navigation with multiple prompts', () => {
      browser.click(ACCEPT_ACTION_SELECTOR);
    });

    it('prompts user when selecting logout', () => {
      browser.click('#pending-action-toggle-1');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-terra-popup-content="true"] button');

      browser.waitForVisible(NOTIFICATION_DIALOG_SELECTOR);
      Terra.validates.element('5. logout prompt item prompt', { selector });
    });

    it('reject prompt on logout', () => {
      browser.click(REJECT_ACTION_SELECTOR);
      Terra.validates.element('6. logout prompt reject', { selector });
    });

    it('accepts prompt to successfully log out', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-terra-popup-content="true"] button');

      browser.waitForVisible(NOTIFICATION_DIALOG_SELECTOR);
      browser.click(ACCEPT_ACTION_SELECTOR);
      Terra.validates.element('7. logout prompt accept', { selector });
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

  it('with notification banner', () => {
    browser.url('/raw/tests/terra-application/application-navigation/application-navigation-test');
    browser.refresh();
    browser.click('#notification-banner');

    Terra.validates.element('with notification banner', { selector: '#root' });
  });
});
