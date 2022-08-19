import React from 'react';
import { shallowWithIntl } from '@cerner/terra-enzyme-intl';
import ApplicationNavigation from '../../../src/application-navigation/ApplicationNavigation';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intl = reactIntl.createIntl({
    locale: 'en',
  });

  return {
    ...reactIntl,
    useIntl: () => intl,
  };
});

describe('ApplicationNavigation', () => {
  it('should render default element', () => {
    const shallowComponent = shallowWithIntl(
      <ApplicationNavigation
        id="test-application-id"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const shallowComponent = shallowWithIntl(
      <ApplicationNavigation
        id="test-application-id"
        activeBreakpoint="large"
        titleConfig={{
          title: 'test-title',
        }}
        activeNavigationItemKey="my-test-key"
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        userActionConfig={{
          text: 'Edit Photo',
          userActionCallback: () => jest.fn(),
        }}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        navigationRenderFunction={jest.fn()}
        onSelectNavigationItem={jest.fn()}
        onSelectExtensionItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
        onDrawerMenuStateChange={jest.fn()}
      >
        <div>test child content</div>
      </ApplicationNavigation>,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
