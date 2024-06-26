import React from 'react';
import ActionMenuHeader from '../../../src/action-menu/_ActionMenuHeader';

describe('ActionMenuHeader', () => {
  it('should render with minimal props', () => {
    const wrapper = enzymeIntl.shallowWithIntl((
      <ActionMenuHeader
        label="test label"
      />
    ));
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzymeIntl.shallowWithIntl((
      <ActionMenuHeader
        label="test label"
        onClose={jest.fn()}
      />
    ));
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
