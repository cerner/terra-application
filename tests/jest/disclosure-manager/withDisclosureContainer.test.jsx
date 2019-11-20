import React from 'react';
import withDisclosureContainer from '../../../src/disclosure-manager/withDisclosureContainer';

describe('withDisclosureContainer', () => {
  it('should return a render function', () => {
    const disclosureContainer = withDisclosureContainer();
    expect(disclosureContainer).toBeInstanceOf(Function);
  });

  it('when executed, withDisclosureContainer returns a wrapped component', () => {
    const disclosureContainer = withDisclosureContainer();
    const wrappedComponent = disclosureContainer(<dif>wrapped content</dif>);

    const wrapper = shallow(wrappedComponent);
    expect(wrapper).toMatchSnapshot();
  });
});
