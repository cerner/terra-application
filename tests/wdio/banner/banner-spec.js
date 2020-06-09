Terra.describeViewports('Banner', ['small', 'large'], () => {
  it('validates banners in [default banner checkpoint]', () => {
    browser.url('/#/raw/tests/terra-application/banner/banner');
    Terra.validates.element();
  });
});
