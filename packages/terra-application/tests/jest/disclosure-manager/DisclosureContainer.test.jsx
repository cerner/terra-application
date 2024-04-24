import React from 'react';

import DisclosureContainer from '../../../src/disclosure-manager/_DisclosureContainer';

describe('DisclosureContainer', () => {
  // Snapshot Tests
  it('should render the provided children', () => {
    const disclosureContainer = (
      <DisclosureContainer.WrappedComponent
        intl={enzymeIntl.mockIntl}
      >
        <div>Test Child</div>
      </DisclosureContainer.WrappedComponent>
    );

    const wrapper = enzyme.shallow(disclosureContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
