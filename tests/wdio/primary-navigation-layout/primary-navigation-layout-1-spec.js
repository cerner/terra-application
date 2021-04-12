const selector = '#root';

Terra.describeViewports('PrimaryNavigationLayout - Configuration 1', ['large', 'huge', 'enormous'], () => {
  before(() => {
    browser.url('#/primary-navigation-layout-1');
  });

  afterEach(() => {
    browser.keys('Escape');
    browser.execute('document.activeElement = document.body;');
  });

  it('renders as expected for size', () => {
    Terra.validates.element('1. initial rendering with standard layout', { selector });
  });

  it('renders renders utility menu from header when selected', () => {
    $('[data-application-header-utility="true"]').click();
    Terra.validates.element('2. renders utility menu', { selector });
  });

  it('renders renders an extensions rollup menu from header when selected', () => {
    $('[data-application-extension-rollup="true"]').click();
    Terra.validates.element('3. renders extensions rollup menu', { selector });
  });

  it('renders renders an navigation item rollup when selected', () => {
    const moreNavigationButton = $('#terra-navigation-link-More');
    if (moreNavigationButton.isExisting()) {
      moreNavigationButton.click();
    }
    Terra.validates.element('4. renders navigation item rollup menu', { selector });
  });
});

Terra.describeViewports('PrimaryNavigationLayout - Configuration 1', ['tiny', 'small', 'medium'], () => {
  before(() => {
    browser.url('#/primary-navigation-layout-1');
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

    $('[data-navigation-drawer-item-help="true"').scrollIntoView();

    Terra.validates.element('3. renders drawer menu part 2', { selector });
  });

  it('renders renders an extensions rollup menu from header when selected', () => {
    $('[data-application-extension-rollup="true"]').click();
    Terra.validates.element('4. renders extensions rollup menu', { selector });
  });
});
