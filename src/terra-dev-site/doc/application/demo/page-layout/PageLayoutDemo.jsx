import React from 'react';

import PageLayout from '../../../../../application-page/PageLayout';
import SideNavLayout, { SideNavPage } from '../../../../../application-page/SideNavLayout';

import ExamplePage from './shared/ExamplePage';
import SideNavigationList from './shared/SideNavigationList';

const PageLayoutDemo = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState('item-1');

  return (
    <SideNavLayout
      sidebar={(
        <SideNavigationList
          selectedItemKey={activeSideNavItemKey}
          onSelectItem={(key) => { setActiveSideNavItemKey(key); }}
        />
      )}
      activeItemKey={activeSideNavItemKey}
    >
      <SideNavPage
        sideNavKey="item-1"
        cleanupRenderIfPossible
        render={() => (
          <PageLayout rootPageTitle="Item 1 - Page 0">
            <ExamplePage prefix="Item 1" index={0} />
          </PageLayout>
        )}
      />
      <SideNavPage
        sideNavKey="item-2"
        render={() => (
          <PageLayout rootPageTitle="Item 2 - Page 0">
            <ExamplePage prefix="Item 2" index={0} />
          </PageLayout>
        )}
      />
      <SideNavPage
        sideNavKey="item-3"
      >
        <PageLayout rootPageTitle="Item 3 - Page 0">
          <ExamplePage prefix="Item 3" index={0} />
        </PageLayout>
      </SideNavPage>
    </SideNavLayout>
  );
};

export default PageLayoutDemo;
