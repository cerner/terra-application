import React from 'react';

import ActionMenuRadio from '../../../src/action-menu/ActionMenuRadio';

describe('ActionMenuRadio', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ActionMenuRadio
        actionKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ActionMenuRadio
        actionKey="test key"
        label="test label"
        icon={<p>test icon</p>}
        isDisabled
        isChecked
        onAction={jest.fn()}
        onArrow={jest.fn()}
        onChar={jest.fn()}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
