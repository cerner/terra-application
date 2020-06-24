import React from 'react';

import SideNavigationPageContainer, { SideNavPage } from '../../../../../application-page/SideNavigationPageContainer';

import ExamplePage from './shared/ExamplePage';
import SideNavigationList from './shared/SideNavigationList';
import ChartReviewPage from '../../clinical-demo/pages/ChartReviewPage';

const PageLayoutDemo = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState();

  return (
    <SideNavigationPageContainer
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
        cleanupRenderIfPossible
        render={() => (
          <ExamplePage prefix="Item 1" index={0} />
        )}
      />
      <SideNavPage
        sideNavKey="item-2"
        render={() => (
          <ExamplePage prefix="Item 2" index={0} />
        )}
      />
      <SideNavPage
        sideNavKey="item-3"
      >
        <ExamplePage prefix="Item 3" index={0} />
      </SideNavPage>
      <SideNavPage
        sideNavKey="chart-summary"
      >
        <ChartReviewPage />
      </SideNavPage>
    </SideNavigationPageContainer>
  );
};

export default PageLayoutDemo;
