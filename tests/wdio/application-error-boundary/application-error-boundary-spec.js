Terra.describeViewports('ApplicationErrorBoundary', ['large'], () => {
  it('should render the application error boundary', () => {
    browser.url('/raw/tests/terra-application/application-error-boundary/error-boundary-test');

    browser.moveToObject('#root', 0, 0);

    Terra.validates.element('initial', { selector: '#root' });

    browser.click('button');

    Terra.validates.element('error boundary', { selector: '#root' });
  });
});
