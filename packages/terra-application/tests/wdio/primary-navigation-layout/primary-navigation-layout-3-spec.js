const selector = '#root';

Terra.describeViewports('PrimaryNavigationLayout - Configuration 3', ['small', 'enormous'], () => {
  before(() => {
    browser.url('/terra-application-test/#/primary-navigation-layout-3');
  });

  after(() => {
    browser.refresh();
  });

  it('renders as expected for size', () => {
    Terra.validates.element('1. initial rendering with page', { selector });
  });

  it('renders with nested Page', () => {
    browser.clickWithTestId('test-page-show-child-page');
    Terra.validates.element('2. render with nested page', { selector });
  });
});

