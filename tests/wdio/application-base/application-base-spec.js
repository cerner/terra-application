Terra.describeViewports('ApplicationBase', ['small', 'large'], () => {
  it('should render the active breakpoint and locale', () => {
    browser.url('/raw/tests/terra-application/application-base/application-base-test');

    Terra.validates.element('active breakpoint and locale', { selector: '#root' });
  });

  it('should render the application loading overlay', () => {
    browser.url('/raw/tests/terra-application/application-base/application-base-test');

    $('button#overlay').click();
    browser.disableCSSAnimations();

    Terra.validates.element('loading overlay', { selector: '#root' });
  });

  it('should render the application status overlay', () => {
    browser.url('/raw/tests/terra-application/application-base/application-base-test');

    $('button#statusView').click();

    Terra.validates.element('status overlay', { selector: '#root' });
  });

  it('should render the application error boundary', () => {
    browser.url('/raw/tests/terra-application/application-base/application-base-test');

    $('button#error').click();

    Terra.validates.element('error boundary', { selector: '#root' });
  });

  // describe('with navigation prompt', () => {
  //   function hasAlert() {
  //     // try {
  //     //   // alertText will throw an exception if no alert is presented.
  //     //   browser.pause(1000);
  //     //   const alert = browser.getAlertText();
  //     //   console.log('*********ALERT', alert);
  //     //   return true;
  //     // } catch (e) {
  //     //   return false;
  //     // }

  //     browser.pause(1000);
  //     const alert = browser.getAlertText();
  //     console.log('*********ALERT', alert);

  //     if (alert.length) {
  //       return true;
  //     }

  //     return false;
  //   }

  //   // before(() => {
  //   //   browser.url('/raw/tests/terra-application/application-base/application-base-test');
  //   // });

  //   it('presents prompt on unload', () => {
  //     browser.url('/raw/tests/terra-application/application-base/application-base-test');
  //     $('button#prompt').click();
  //     browser.execute('location.reload(true);');

  //     expect(hasAlert()).toEqual(true);
  //   });

  //   it('does not present prompt on unload if no navigation prompts present', () => {
  //     // browser.url('/raw/tests/terra-application/application-base/application-base-test');
  //     browser.dismissAlert();
  //     $('button#prompt').click();
  //     browser.execute('location.reload(true);');

  //     expect(hasAlert()).toEqual(false);
  //   });
  // });
});
