import React from 'react';
import { mountWithIntl } from '@cerner/terra-enzyme-intl';
import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('ApplicationBase', () => {
  it('should render with minimal props', () => {
    const wrapper = mountWithIntl((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = mountWithIntl((
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
    const wrapper = mountWithIntl((
      <ApplicationBase>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
