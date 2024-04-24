import React from 'react';

import ActionMenuGroup from '../../../src/action-menu/ActionMenuGroup';

describe('ActionMenuGroup', () => {
  it('should render with minimal props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuGroup
        actionKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuGroup
        onArrow={jest.fn()}
        onClose={jest.fn()}
        indentChildren
      >
        <li>test element</li>
      </ActionMenuGroup>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
