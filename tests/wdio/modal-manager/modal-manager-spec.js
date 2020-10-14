const selector = '#root';

Terra.describeViewports('ModalManager', ['large'], () => {
  before(() => browser.url('/raw/tests/cerner-terra-application/modal-manager/navigation-prompt'));

  it('opens the modal', () => {
    browser.click('#root-component .disclose-large');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    Terra.validates.element('1. root modal', { selector });
  });

  it('marks modal as having a pending action', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle');
  });

  it('displays navigation prompt when attempting to close the modal', () => {
    browser.click('[class*="Modal"] [class*="ActionHeader"] .close-button');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    Terra.validates.element('2. root modal-on close-navigation prompt', { selector });
  });

  it('it rejects the closure and keeps the modal open', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    Terra.validates.element('3. root modal-on close-rejected prompt', { selector });
  });

  it('opens a nested modal', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    Terra.validates.element('4. nested modal', { selector });
  });

  it('marks modal as having a pending action', () => {
    browser.click('[class*="slide-group"] #DemoContainer-2 .pending-action-toggle');
  });

  it('opens a 2nd nested modal', () => {
    browser.click('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-3 .disclose-tiny');
  });

  it('does not display a navigation prompt when attempting to go back to the nested modal', () => {
    browser.click('[class*="Modal"] [class*="ActionHeader"] [data-terra-action-header="back-button"]');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
  });

  it('displays a navigation prompt when attempting to go back to the root modal', () => {
    browser.click('[class*="Modal"] [class*="ActionHeader"] [data-terra-action-header="back-button"]');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    Terra.validates.element('5. nested modal-on back-navigation-prompt', { selector });
  });

  it('rejects the closure and keeps the modal open', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    Terra.validates.element('6. nested modal-on back-rejected prompt', { selector });
  });

  it('displays navigation prompt when attempting to close the modal', () => {
    browser.click('[class*="Modal"] [class*="ActionHeader"] .close-button');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    Terra.validates.element('7. nest modal-on close-navigation prompt', { selector });
  });

  it('accepts the go back and displays the previous modal', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
  });

  it('keeps the navigation prompt open since the root modal also has a pending action', () => {
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.true;
    Terra.validates.element('8. root modal-on close-navigation prompt', { selector });
  });

  it('successfully closes the modal', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    expect(browser.isExisting('[class*="slide-group"] #DemoContainer-1 .disclose-tiny')).to.be.false;
    Terra.validates.element('9. modal-closed', { selector });
  });

  it('opens the modal with a nested modal', () => {
    browser.click('#root-component .disclose-large');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure');

    browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure');

    Terra.validates.element('10. nested modal-reopened', { selector });
  });

  it('dismisses the nested modal using the global close', () => {
    browser.click('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure');
    Terra.validates.element('11. nested modal-global dismiss', { selector });
  });

  it('dismisses the nested modal using the global close', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure');
    Terra.validates.element('12. root modal-global dismiss', { selector });
  });

  it('opens medium modal', () => {
    browser.click('#root-component .disclose-medium');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-medium');
  });

  it('renders notification banners in modal', () => {
    browser.click('#toggle-hazard-medium-banner-DemoContainer-1');
    browser.waitForExist('[data-terra-application-notification-banner="hazard-medium"]');
    browser.click('#toggle-hazard-low-banner-DemoContainer-1');
    browser.waitForExist('[data-terra-application-notification-banner="hazard-low"]');
    browser.click('#toggle-error-banner-DemoContainer-1');
    browser.waitForExist('[data-terra-application-notification-banner="error"]');
    Terra.validates.element('14. modal notification banners', { selector });
  });
});

Terra.describeViewports('CustomDismissCheckWorkflow', ['large'], () => {
  before(() => browser.url('/raw/tests/cerner-terra-application/modal-manager/custom-dismiss-check'));

  it('opens the modal', () => {
    browser.click('#root-component .disclose-large');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    Terra.validates.element('1. shows modal with custom dismiss check', { selector });
  });

  it('marks modal as having a pending action', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle');
  });

  it('attempts to close modal and fails due to custom dismiss check implementation', () => {
    browser.click('[class*="Modal"] [class*="ActionHeader"] .close-button');
    Terra.validates.element('2. modal persists after close attempt', { selector });
  });
});
