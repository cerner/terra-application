Terra.describeViewports('NotificationBanner', ['small', 'large'], () => {
  it('validates notification banners', () => {
    browser.url('/raw/tests/cerner-terra-application/notification-banner/notification-banner');
    Terra.validates.element();
  });
});
