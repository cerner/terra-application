const selector = '#root';

Terra.describeViewports('MainContainer - Simple Configuration', ['large'], () => {
  before(() => {
    browser.url('#/main-container/simple');
  });

  it('renders active main value output', () => {
    Terra.validates.element('1. rendering with active main data', { selector });
  });

  it('renders SkipToLink', () => {
    browser.keys('Tab');
    Terra.validates.element('2. rendering SkipToLink for main', { selector });
  });

  it('places focus on main', () => {
    browser.keys(['Enter', 'Tab']);
    Terra.validates.element('3. focus placed on main', { selector });
  });
});
