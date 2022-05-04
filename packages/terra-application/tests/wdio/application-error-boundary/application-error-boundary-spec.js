Terra.describeViewports('ApplicationErrorBoundary', ['large'], () => {
  describe('Status view management', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-application/application-error-boundary/error-boundary-test');
      browser.moveToObject('#root', 0, 0);
    });

    $('#root').moveTo({ xOffset: 0, yOffset: 0 });

    it('shows the status view when error occurs', () => {
      browser.click('button');
    });

    $('button').click();

    Terra.validates.element('error boundary', { selector: '#root' });
  });
});
