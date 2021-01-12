import React from 'react';
import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('ApplicationBase', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ApplicationBase
        locale="en"
        themeName="test-theme"
        unloadPromptIsDisabled
      >
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with the preferred browser locale', () => {
    const wrapper = shallow((
      <ApplicationBase>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
