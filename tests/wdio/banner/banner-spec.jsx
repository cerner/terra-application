Terra.describeViewports('Banner', ['tiny', 'large'], () => {
  it('validates banners in [default banner checkpoint]', () => {
    browser.url('/#/raw/tests/banner/banner');
    Terra.validates.element();
  });

  it('validates banners in [modal banner checkpoint]', () => {
    Terra.validates.element();
  });

  it('validates banners in [slide panel banner checkpoint]', () => {
    Terra.validates.element();
  });
});
