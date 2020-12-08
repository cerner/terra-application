import React from 'react';

import Page from '../../../page';
import { SecondaryNavigationLayout, SecondaryNavigationGroup, NavigationItem } from '../../../layouts';

import SecondaryNavigationLayoutWorkspace from '../../../layouts/secondary-navigation-layout/workspace/SecondaryNavigationLayoutWorkspace';
import WorkspaceTab from '../../../layouts/secondary-navigation-layout/workspace/WorkspaceTab';

import Tab1 from '../workspace/Tab1';
import Tab2 from '../workspace/Tab2';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import NotAPage from '../shared/NotAPage';

const NavDLayout = () => {
  const [navigationState, setNavigationState] = React.useState('nav-D-1');

  return (
    <SecondaryNavigationLayout
      id="nav-d-layout"
      label="Nav D"
      workspace={(
        <SecondaryNavigationLayoutWorkspace
          initialActiveItemKey="tab-1"
          onActiveItemChange={(newActiveItemKey) => {
            console.log(`Workspace active item: ${newActiveItemKey}`);
          }}
          onSizeChange={(size) => {
            console.log(`Workspace size changed: ${size}`);
          }}
          onPresentationStateChange={(isPresented) => {
            console.log(`Workspace presentation changed. isOpen - ${isPresented}`);
          }}
        >
          <WorkspaceTab
            itemKey="tab-1"
            label="Tab 1"
            metaData={{ key: 'tab-1' }}
            render={() => <Tab1 />}
          />
          <WorkspaceTab
            itemKey="tab-2"
            label="Tab 2"
            metaData={{ key: 'tab-2' }}
            render={() => <Tab2 />}
          />
        </SecondaryNavigationLayoutWorkspace>
      )}
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <SecondaryNavigationGroup
        label="Group 1"
      >
        <NavigationItem
          navigationKey="nav-D-1"
          label="Nav D-1 Page 1"
          renderPage={() => <Page1 />}
        />
        <NavigationItem
          navigationKey="nav-D-2"
          label="Nav D-2 Page 2"
          renderPage={() => <Page2 />}
        />
      </SecondaryNavigationGroup>
      <SecondaryNavigationGroup
        label="Group 2"
      >
        <NavigationItem
          navigationKey="nav-D-3"
          label="Nav D-3 Page 3"
          renderPage={() => <Page3 />}
        />
        <NavigationItem
          navigationKey="nav-D-4"
          label="Nav D-4 Page 4"
          renderPage={() => <Page4 />}
        />
        <NavigationItem
          navigationKey="nav-D-5"
          label="Nav D-5 Page 5"
          renderPage={() => <Page5 />}
        />
      </SecondaryNavigationGroup>
      <SecondaryNavigationGroup
        label="Group 3"
      >
        <NavigationItem
          navigationKey="nav-D-6"
          label="Nav D-6 Page In Group"
          renderPage={() => (
            <Page pageKey="page-in-group" label="Page In Group">
              <div style={{ padding: '1rem' }}>
                Page content here...
              </div>
            </Page>
          )}
        />
        <SecondaryNavigationGroup
          label="Nested Group"
        >
          <NavigationItem
            navigationKey="nav-D-7"
            label="Nav D-7 Not A Page"
          >
            <NotAPage />
          </NavigationItem>
        </SecondaryNavigationGroup>
      </SecondaryNavigationGroup>
      <NavigationItem
        navigationKey="nav-D-8"
        label="Nav D-8 Page Not In Group"
        renderPage={() => (
          <Page pageKey="page-not-in-group" label="Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </Page>
        )}
      />
      <NavigationItem
        navigationKey="nav-D-9"
        label="Nav D-9 Page 6"
        renderPage={() => <Page6 />}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavDLayout;
