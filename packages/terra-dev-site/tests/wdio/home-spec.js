Terra.describeViewports('home', ['tiny', 'huge'], () => {
  it('checks accessibility', () => {
    browser.url('/');
    Terra.validates.accessibility({ selector: '#root' });
  });
});
