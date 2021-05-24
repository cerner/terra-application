import React from 'react';
import PrimaryNavigationWorkspaceItem from '../../../../src/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspaceItem';

describe('ActionMenuHeader', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <PrimaryNavigationWorkspaceItem
        itemKey="test key"
        label="test label"
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <PrimaryNavigationWorkspaceItem
        itemKey="test-key"
        label="test label"
        metaData={{ key: 'test-key' }}
        render={() => {}}
      />
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
