import React from 'react';
import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('ApplicationBase', () => {
  it('should render with minimal props', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase
        locale="en"
        customTranslatedMessages={{ custom: 'messages' }}
        translationsLoadingPlaceholder={<div>placeholder</div>}
        themeName="test-theme"
        themeIsGlobal
        fitToParentIsDisabled
      >
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with the preferred browser local', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without scroll', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase noScroll>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with theme and density', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase themeName="test-theme" themeDensity="compact">
        <div>content</div>
      </ApplicationBase>
    ));

    const themeProvider = wrapper.find('ThemeProvider');
    expect(themeProvider.props().themeName).toBe('test-theme');
    expect(themeProvider.props().density).toBe('compact');

    const themeContext = wrapper.find('ThemeContextProvider');
    expect(themeContext.props().theme).toStrictEqual({ name: 'test-theme', className: 'test-theme', density: 'compact' });
  });

  it('should render with density', () => {
    const wrapper = enzyme.shallow((
      <ApplicationBase themeDensity="compact">
        <div>content</div>
      </ApplicationBase>
    ));

    const themeProvider = wrapper.find('ThemeProvider');
    expect(themeProvider.props().themeName).toBeUndefined();
    expect(themeProvider.props().density).toBe('compact');

    const themeContext = wrapper.find('ThemeContextProvider');
    expect(themeContext.props().theme).toStrictEqual({ name: 'terra-default-theme', className: undefined, density: 'compact' });
  });
});
