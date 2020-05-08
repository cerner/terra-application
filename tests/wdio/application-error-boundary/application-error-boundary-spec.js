Terra.describeViewports('ApplicationErrorBoundary', ['large'], () => {
  describe('Status view management', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-error-boundary/error-boundary-test');
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('shows the status view when error occurs', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('with error', { selector: '#root' });
  });

  describe('with error and onError callback called', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-error-boundary/error-boundary-on-error-callback');
      browser.click('button#error');
    });

    Terra.it.validatesElement('with onError callback', { selector: '#root' });
  });
});
