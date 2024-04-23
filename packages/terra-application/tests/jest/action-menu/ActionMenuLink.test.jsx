import React from 'react';

import ActionMenuLink from '../../../src/action-menu/ActionMenuLink';

describe('ActionMenuItem', () => {
  it('should render with minimal props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuLink
        actionKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuLink
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
