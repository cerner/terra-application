import React from 'react';
import DrawerMenuTitle from '../../../../../src/application-navigation/terra-application-navigation/drawer-menu/_DrawerMenuTitle';

describe('DrawerMenuTitle', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerMenuTitle
        titleConfig={{
          title: 'test-title',
        }}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
