import React from 'react';
import { shallowWithIntl } from '@cerner/terra-enzyme-intl';
import ActionMenuHeader from '../../../src/action-menu/_ActionMenuHeader';

describe('ActionMenuHeader', () => {
  it('should render with minimal props', () => {
    const wrapper = shallowWithIntl((
      <ActionMenuHeader
        label="test label"
      />
    ));
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallowWithIntl((
      <ActionMenuHeader
        label="test label"
        onClose={jest.fn()}
      />
    ));
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
