Terra.describeViewports('secondary nav', ['tiny', 'huge'], () => {
  it('checks accessibility', () => {
    browser.url('extended/secondary-nav-test');
    Terra.validates.element('checks a11y', { selector: '#root' });
  });
});
