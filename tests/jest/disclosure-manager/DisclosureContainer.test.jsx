import React from 'react';
import { mockIntl } from 'terra-enzyme-intl';

import DisclosureContainer from '../../../src/disclosure-manager/_DisclosureContainer';

describe('DisclosureContainer', () => {
  // Snapshot Tests
  it('should render the provided children', () => {
    const disclosureContainer = (
      <DisclosureContainer.WrappedComponent
        intl={mockIntl}
      >
        <div>Test Child</div>
      </DisclosureContainer.WrappedComponent>
    );

    const wrapper = shallow(disclosureContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
