import React from 'react';
import DrawerCount from '../../../../../src/application-navigation/private/drawer-menu/_DrawerCount';

describe('DrawerCount', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
