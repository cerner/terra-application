const selector = '#root';

Terra.describeViewports('PrimaryNavigationLayout - Configuration 2', ['large', 'huge', 'enormous'], () => {
  before(() => {
    browser.url('/terra-application-test/#/primary-navigation-layout-2');
  });

  afterEach(() => {
    browser.keys('Escape');
    browser.execute('document.activeElement = document.body;');
  });

  it('renders as expected for size', () => {
    Terra.validates.element('1. initial rendering with standard layout', { selector });
  });
});

Terra.describeViewports('PrimaryNavigationLayout - Configuration 2', ['tiny', 'small', 'medium'], () => {
  before(() => {
    browser.url('/terra-application-test/#/primary-navigation-layout-2');
  });

  afterEach(() => {
    browser.keys('Escape');
    browser.execute('document.activeElement = document.body;');
  });

  it('renders as expected for size', () => {
    Terra.validates.element('1. initial rendering with compact layout', { selector });
  });

  it('renders drawer menu when selected', () => {
    $('[data-compact-header-toggle="true"]').click();

    Terra.validates.element('2. renders drawer menu part 1', { selector });
  });
});
