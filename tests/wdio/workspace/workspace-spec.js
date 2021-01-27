const selector = '#root';

Terra.describeViewports('Workspace', ['huge'], () => {
  before(() => {
    browser.url('/raw/tests/terra-application/workspace/workspace');
    browser.disableCSSAnimations();
  });

  after(() => {
    browser.enableCSSAnimations();
  })

  it('renders as expected at the initial large size', () => {
    Terra.validates.element('1. initial rendering at large size', { selector });
  });

  it('renders Tab 2 after selection', () => {
    browser.click('#test-id-tab-2');
    Terra.validates.element('2. Tab 2 renders after selection', { selector });
  });

  it('renders settings menu on button selection', () => {
    browser.clickWithTestId('workspace-test-id-settings-button');
    Terra.validates.element('3. Settings menu renders after button selection', { selector });
  });

  it('renders workspace at small size', () => {
    browser.clickWithAttribute('data-action-menu-key', 'small');
    Terra.validates.element('4. Workspace renders at small size', { selector });
  });

  it('renders workspace at tiny size', () => {
    browser.clickWithTestId('workspace-test-id-settings-button');
    browser.clickWithAttribute('data-action-menu-key', 'tiny');
    Terra.validates.element('5. Workspace renders at tiny size', { selector });
  });

  it('renders tabs rollup after selection', () => {
    browser.clickWithTestId('workspace-tabs-more-button');
    Terra.validates.element('6. Workspace renders more tabs dropdown', { selector });
  });
  
  it('renders tab selected from rollup', () => {
    browser.click('#test-id-tab-3');
    Terra.validates.element('7. Workspace renders Tab 3 after dropdown selection', { selector });
  });

  it('renders tab with status overlay', () => {
    browser.clickWithTestId('workspace-test-id-settings-button');
    browser.clickWithAttribute('data-action-menu-key', 'large');  
    browser.click('#test-id-tab-5');
    Terra.validates.element('8. Workspace renders Tab 5 with status overlay after dropdown selection', { selector });
  });

  it('renders tab with loading overlay', () => {
    browser.click('#test-id-tab-6');
    Terra.validates.element('9. Workspace renders Tab 6 with loading overlay after dropdown selection', { selector });
  });

  it('renders tab with loading overlay', () => {
    browser.click('#test-id-tab-1');
    browser.clickWithTestId('test-workspace-banner-button');
    Terra.validates.element('10. Workspace renders Tab 1 with notification banner', { selector });
  });
});