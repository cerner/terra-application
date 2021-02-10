import React from 'react';

import ActionMenu from '../../../src/action-menu/ActionMenu';

const MockComponent = () => {
  return <li>item</li>;
};
MockComponent.interactiveType = false;

describe('ActionMenu', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ActionMenu ariaLabel="test menu" />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ActionMenu
        ariaLabel="test menu"
        isHeaderDisplayed
        onRequestClose={jest.fn()}
        isHeightBounded
        isWidthBounded
      >
        <MockComponent />
      </ActionMenu>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
