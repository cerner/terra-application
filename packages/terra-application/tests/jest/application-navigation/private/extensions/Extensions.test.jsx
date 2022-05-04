import React from 'react';
import { mockIntl } from '@cerner/terra-enzyme-intl';
import Extensions from '../../../../../src/application-navigation/private/extensions/_Extensions';

describe('Extensions', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <Extensions.WrappedComponent intl={mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <Extensions.WrappedComponent
        intl={mockIntl}
        activeBreakpoint="small"
        extensionItems={[{ text: 'test-text', icon: <span>my icon</span>, key: 'my-test-key' }]}
        notifications={{ myComponent: 3 }}
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
