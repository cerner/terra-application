Terra.describeViewports('anchor tag', ['tiny', 'huge'], () => {
  it('Links to the anchor tag', () => {
    browser.url('/raw/tests/cerner-terra-dev-site/terra-dev-site/anchor-tag#act-v');
    Terra.validates.element('links to the anchor tag', { selector: '#root' });
  });
});
