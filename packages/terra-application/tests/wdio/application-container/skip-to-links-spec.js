const selector = '#root';

Terra.describeViewports('ApplicationContainer SkipToLinks', ['large'], () => {
  before(() => {
    console.log('before set browser url');
    browser.url('terra-application-test/#/skip-to-links');
    console.log('after set browser url');
  });

  it('renders initial page without focus on skip to links', () => {
    console.log('before validate element');
    Terra.validates.element('1. initial rendering', { selector });
    console.log('after validate element');
  });

  it('renders first link when focus is set to it', () => {
    browser.keys('Tab');
    Terra.validates.element('2. content link visible', { selector });
  });

  it('sets focus to content region after selection', () => {
    browser.keys('Enter');
    Terra.validates.element('3. focus set to content region', { selector });
  });

  it('renders second link when focus is set to it', () => {
    browser.keys(['Tab', 'Tab']);
    Terra.validates.element('4. other link visible', { selector });
  });

  it('sets focus to other region after selection', () => {
    browser.keys('Enter');
    Terra.validates.element('5. focus set to content region', { selector });
  });
});
