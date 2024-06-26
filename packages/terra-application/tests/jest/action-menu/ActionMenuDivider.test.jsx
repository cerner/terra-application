import React from 'react';

import ActionMenuDivider from '../../../src/action-menu/ActionMenuDivider';

describe('ActionMenuDivider', () => {
  it('should render with minimal props', () => {
    const wrapper = enzyme.shallow((
      <ActionMenuDivider />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
