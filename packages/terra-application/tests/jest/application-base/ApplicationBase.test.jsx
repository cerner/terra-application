import React from 'react';
import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('ApplicationBase', () => {
  it('should render with minimal props', () => {
    const wrapper = enzymeIntl.mountWithIntl((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzymeIntl.mountWithIntl((
      <ApplicationBase
        locale="en"
        unloadPromptIsDisabled
        themeName="test-theme"
      >
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with the preferred browser locale', () => {
    const wrapper = enzymeIntl.mountWithIntl((
      <ApplicationBase>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without scroll', () => {
    const wrapper = enzymeIntl.mountWithIntl((
      <ApplicationBase noScroll>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
