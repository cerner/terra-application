const selector = '#root';

Terra.describeViewports('MainContainer - Navigation Integration', ['large'], () => {
  before(() => {
    browser.url('#/main-container/navigation');
  });

  it('renders with active main as nav 1', () => {
    Terra.validates.element('1. rendering with active main as nav 1', { selector });
  });

  it('renders with active main as nav 2', () => {
    $('#main-container-navigation-integration-NavigationItem-2').click();
    Terra.validates.element('2. rendering with active main as nav 2', { selector });
  });

  it('renders with active main as nav 3', () => {
    $('#main-container-navigation-integration-NavigationItem-3').click();
    Terra.validates.element('3. rendering with active main as nav 3', { selector });
  });

  it('renders no active main with nav 4', () => {
    // Nav 4 does not use the MainContainer
    $('#main-container-navigation-integration-NavigationItem-4').click();
    Terra.validates.element('4. rendering without active main for nav 4', { selector });
  });
});
