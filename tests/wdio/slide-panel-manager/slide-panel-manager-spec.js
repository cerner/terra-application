const selector = '#root';

Terra.describeViewports('SlidePanelManager', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-application/slide-panel-manager/navigation-prompt'));

  it('opens the slide-panel', () => {
    browser.click('#root-component .disclose-large');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    Terra.validates.element('1. root panel', { selector });
  });

  it('marks panel as having a pending action', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle');
  });

  it('displays navigation prompt when attempting to close the panel', () => {
    browser.click('[class*="SlidePanel"] [class*="ActionHeader"] .header-close-button');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    Terra.validates.element('2. root panel-on close-navigation prompt', { selector });
  });

  it('it rejects the closure and keeps the panel open', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    Terra.validates.element('3. root panel-on close-rejected prompt', { selector });
  });

  it('opens a nested slide-panel', () => {
    browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    Terra.validates.element('4. nested panel', { selector });
  });

  it('marks panel as having a pending action', () => {
    browser.click('[class*="slide-group"] #DemoContainer-2 .pending-action-toggle');
  });

  it('opens a 2nd nested slide-panel', () => {
    browser.click('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-3 .disclose-tiny');
  });

  it('does not display a navigation prompt when attempting to go back to the nested panel', () => {
    browser.click('[class*="SlidePanel"] [class*="ActionHeader"] .header-back-button');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
  });

  it('displays a navigation prompt when attempting to go back to the root panel', () => {
    browser.click('[class*="SlidePanel"] [class*="ActionHeader"] .header-back-button');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    Terra.validates.element('5. nested panel-on back-navigation-prompt', { selector });
  });

  it('rejects the closure and keeps the panel open', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.false;
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
    Terra.validates.element('6. nested panel-on back-rejected prompt', { selector });
  });

  it('displays navigation prompt when attempting to close the panel', () => {
    browser.click('[class*="SlidePanel"] [class*="ActionHeader"] .header-close-button');
    browser.waitForVisible('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    Terra.validates.element('7. nest panel-on close-navigation prompt', { selector });
  });

  it('accepts the go back and displays the previous panel', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
  });

  it('keeps the navigation prompt open since the root panel also has a pending action', () => {
    expect(browser.isExisting('[class*="notification-dialog"]')).to.be.true;
    Terra.validates.element('8. root panel-on close-navigation prompt', { selector });
  });

  it('successfully closes the panel', () => {
    browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)');
    expect(browser.isExisting('[class*="slide-group"] #DemoContainer-1 .disclose-tiny')).to.be.false;
    Terra.validates.element('9. panel-closed', { selector });
  });
});
