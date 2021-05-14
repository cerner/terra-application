Terra.describeViewports('custom file extension', ['huge'], () => {
  it('checks accessibility on the raw route', () => {
    browser.url('/raw/tests/cerner-terra-dev-site/terra-dev-site/file-extension-test');
    Terra.validates.element('accessibility on raw route');
  });
});
