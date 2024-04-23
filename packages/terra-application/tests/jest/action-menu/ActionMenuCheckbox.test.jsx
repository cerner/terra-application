import React from 'react';

import ActionMenuCheckbox from '../../../src/action-menu/ActionMenuCheckbox';

describe('ActionMenuCheckbox', () => {
  it('should render with minimal props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuCheckbox
        actionKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuCheckbox
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
