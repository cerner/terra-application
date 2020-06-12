import React from 'react';

import SideNavLayout, { SideNavPage } from '../../../../../application-page/SideNavLayout';

import ExamplePage from './shared/ExamplePage';
import SideNavigationList from './shared/SideNavigationList';
import ChartSummaryPage from './clinical-demo/pages/ChartSummaryPage';

const PageLayoutDemo = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState();

  return (
    <SideNavLayout
      sidebar={(
        <SideNavigationList
          selectedItemKey={activeSideNavItemKey}
          onSelectItem={(key) => { setActiveSideNavItemKey(key); }}
        />
      )}
      activeItemKey={activeSideNavItemKey}
      itemKeys={['item-1', 'item-2', 'item-3']}
      onChangeActiveItem={(key) => { setActiveSideNavItemKey(key); }}
    >
      <SideNavPage
        sideNavKey="item-1"
        rootPageTitle="Item 1 - Page 0"
        cleanupRenderIfPossible
        render={() => (
          <ExamplePage prefix="Item 1" index={0} />
        )}
      />
      <SideNavPage
        sideNavKey="item-2"
        rootPageTitle="Item 2 - Page 0"
        render={() => (
          <ExamplePage prefix="Item 2" index={0} />
        )}
      />
      <SideNavPage
        sideNavKey="item-3"
        rootPageTitle="Item 3 - Page 0"
      >
        <ExamplePage prefix="Item 3" index={0} />
      </SideNavPage>
      <SideNavPage
        sideNavKey="chart-summary"
      >
        <ChartSummaryPage />
      </SideNavPage>
    </SideNavLayout>
  );
};

export default PageLayoutDemo;
