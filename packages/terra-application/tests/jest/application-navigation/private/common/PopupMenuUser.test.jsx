import React from 'react';
import PopupMenuUser from '../../../../../src/application-navigation/private/common/_PopupMenuUser';

describe('PopupMenuUser', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <PopupMenuUser userConfig={{
        name: 'user-name',
        detail: 'user-detail',
        initials: 'user-initials',
        imageSrc: 'user-src',
      }}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
