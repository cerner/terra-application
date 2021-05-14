Terra.describeViewports('Locale', ['tiny'], () => {
  it('correctly sets the application locale', () => {
    browser.url('/extended/single-page-test');
    const actualLocale = $('html').getAttribute('lang');
    expect(actualLocale).toEqual('en');
  });
});
