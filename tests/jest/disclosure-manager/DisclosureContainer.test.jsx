import React from 'react';
import { mockIntl } from '@cerner/terra-enzyme-intl';

import DisclosureContainer from '../../../src/disclosure-manager/_DisclosureContainer';

describe('DisclosureContainer', () => {
  // Snapshot Tests
  it('should render the provided children', () => {
    const disclosureContainer = (
      <DisclosureContainer
        intl={mockIntl}
      >
        <div>Test Child</div>
      </DisclosureContainer>
    );

    const wrapper = shallow(disclosureContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
