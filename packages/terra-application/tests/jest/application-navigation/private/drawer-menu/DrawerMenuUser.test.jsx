import React from 'react';
import DrawerMenuUser from '../../../../../src/application-navigation/private/drawer-menu/_DrawerMenuUser';

const userActionConfig = {
  text: 'Edit Photo',
  userActionCallback: () => jest.fn(),
};

describe('DrawerMenuUser', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        menuClosingCallback={() => jest.fn()}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        userActionConfig={userActionConfig}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with small variant', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        menuClosingCallback={() => jest.fn()}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        variant="small"
        userActionConfig={userActionConfig}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with large variant', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        menuClosingCallback={() => jest.fn()}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        variant="large"
        userActionConfig={userActionConfig}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
