import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from '@cerner/terra-enzyme-intl';
import UtilityMenu from '../../../../../src/application-navigation/private/utility-menu/_UtilityMenu';

describe('UtilityMenu', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenu />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenu
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        utilityItems={[{
          id: 'test-utility-2-id', text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span>, metaData: { meta: 'metaData' },
        }]}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with skip callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <UtilityMenu
        onSelectLogout={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
