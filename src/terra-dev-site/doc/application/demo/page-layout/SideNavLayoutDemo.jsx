import React from 'react';

import SecondaryNavigationPageContainer, { NavigationPage } from '../../../../../application-page/SecondaryNavigationPageContainer';

import ExamplePage from './shared/ExamplePage';
import SideNavigationList from './shared/SideNavigationList';
import ChartReviewPage from '../../clinical-demo/pages/ChartReviewPage';

const PageLayoutDemo = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState();

  return (
    <SecondaryNavigationPageContainer
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
      <NavigationPage
        pageKey="item-1"
        render={() => (
          <ExamplePage prefix="Item 1" index={0} />
        )}
      />
      <NavigationPage
        pageKey="item-2"
        render={() => (
          <ExamplePage prefix="Item 2" index={0} />
        )}
      />
      <NavigationPage
        pageKey="item-3"
      >
        <ExamplePage prefix="Item 3" index={0} />
      </NavigationPage>
      <NavigationPage
        pageKey="chart-summary"
      >
        <ChartReviewPage />
      </NavigationPage>
    </SecondaryNavigationPageContainer>
  );
};

export default PageLayoutDemo;
