// const selector = '#root';

// Terra.describeViewports('ModalManager', ['large'], () => {
//   before(() => browser.url('/#/raw/tests/terra-application/modal-manager/navigation-prompt'));
//   it('opens the slide-panel', () => {
//     browser.click('#root-component .disclose-large');
//     browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
//     Terra.validates.element({ selector });
//   });

//   it('marks panel as having a pending action', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle');
//   });

//   it('displays navigation prompt when attempting to close the panel', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
//     browser.waitForVisible('[class*="notification-dialog"]');
//     Terra.validates.element('navigation prompt', { selector });
//   });

//   it('it rejects the closure and keeps the panel open', () => {
//     browser.click('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)');
//     browser.waitForVisible('[class*="notification-dialog"]', 1000, false);
//     Terra.validates.element('closure rejected', { selector });
//   });

//   it('opens a nested slide-panel', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
//     browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
//     Terra.validates.element('nested disclosure', { selector });
//   });

//   it('marks panel as having a pending action', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-2 .pending-action-toggle');
//   });

//   it('opens a 2nd nested slide-panel', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
//     browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny');
//   });

//   it('does not display a navigation prompt when attempting to go back to the nested panel', () => {
//     browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
//     browser.waitForVisible('[class*="notification-dialog"]', 1000, false);
//     expect()
//   });
// });
