import React from 'react';
import TabCount from '../../../../../src/application-navigation/private/tabs/_TabCount';

describe('TabCount', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <TabCount.WrappedComponent intl={enzymeIntl.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <TabCount.WrappedComponent
        intl={enzymeIntl.mockIntl}
        value={1}
        isRollup
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
