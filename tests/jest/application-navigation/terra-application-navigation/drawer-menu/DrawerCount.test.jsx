import React from 'react';
import DrawerCount from '../../../../../src/application-navigation/terra-application-navigation/drawer-menu/_DrawerCount';

describe('DrawerCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <DrawerCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
