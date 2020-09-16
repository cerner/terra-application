import React from 'react';
import PopupCount from '../../../../../src/application-navigation/terra-application-navigation/common/_PopupCount';

describe('PopupCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <PopupCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <PopupCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
