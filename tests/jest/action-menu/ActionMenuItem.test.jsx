import React from 'react';

import ActionMenuItem from '../../../src/action-menu/ActionMenuItem';

describe('ActionMenuItem', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ActionMenuItem
        actionKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ActionMenuItem
        actionKey="test key"
        label="test label"
        icon={<p>test icon</p>}
        isDisabled
        onAction={jest.fn()}
        onArrow={jest.fn()}
        onChar={jest.fn()}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
