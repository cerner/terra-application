import React from 'react';

import Page from '../../../page';
import { SecondaryNavigationLayout, SecondaryNavigationGroup, NavigationItem } from '../../../layouts';

import SecondaryNavigationLayoutWorkspace from '../../../layouts/secondary-navigation-layout/workspace/SecondaryNavigationLayoutWorkspace';
import WorkspaceTab from '../../../layouts/secondary-navigation-layout/workspace/WorkspaceTab';
import MainContainer from '../../../main-container';

import Tab1 from '../workspace/Tab1';
import Tab2 from '../workspace/Tab2';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import NotAPage from '../shared/NotAPage';

const NavDLayout = () => {
  const [navigationState, setNavigationState] = React.useState('nav-D-1');

  return (
    <SecondaryNavigationLayout
      id="nav-d-layout"
      workspace={(
        <SecondaryNavigationLayoutWorkspace
          initialActiveTabKey="tab-1"
          onSizeChange={(size) => {
            console.log(`Workspace size changed: ${size}`);
          }}
          onPresentationStateChange={(isPresented) => {
            console.log(`Workspace presentation changed. isOpen - ${isPresented}`);
          }}
        >
          <WorkspaceTab
            tabKey="tab-1"
            label="Tab 1"
            metaData={{ key: 'tab-1' }}
            render={() => <Tab1 />}
          />
          <WorkspaceTab
            tabKey="tab-2"
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
        text="Group 1"
      >
        <NavigationItem
          navigationKey="nav-D-1"
          text="Nav D-1 Page 1"
          renderPage={() => <Page1 />}
        />
        <NavigationItem
          navigationKey="nav-D-2"
          text="Nav D-2 Page 2"
          renderPage={() => <Page2 />}
        />
      </SecondaryNavigationGroup>
      <SecondaryNavigationGroup
        text="Group 2"
      >
        <NavigationItem
          navigationKey="nav-D-3"
          text="Nav D-3 Page 3"
          renderPage={() => <Page3 />}
        />
        <NavigationItem
          navigationKey="nav-D-4"
          text="Nav D-4 Page 4"
          renderPage={() => <Page4 />}
        />
        <NavigationItem
          navigationKey="nav-D-5"
          text="Nav D-4 Page 5"
          renderPage={() => <Page5 />}
        />
      </SecondaryNavigationGroup>
      <SecondaryNavigationGroup
        text="Group 3"
      >
        <NavigationItem
          navigationKey="nav-D-6"
          text="Nav D-6 Page In Group"
          renderPage={() => (
            <Page pageKey="page-in-group" title="Page In Group">
              <div style={{ padding: '1rem' }}>
                Page content here...
              </div>
            </Page>
          )}
        />
        <SecondaryNavigationGroup
          text="Nested Group"
        >
          <NavigationItem
            navigationKey="nav-D-7"
            text="Nav D-7 Not A Page"
          >
            <MainContainer documentTitle="Not A Page">
              <NotAPage />
            </MainContainer>
          </NavigationItem>
        </SecondaryNavigationGroup>
      </SecondaryNavigationGroup>
      <NavigationItem
        navigationKey="nav-D-8"
        text="Nav D-8 Page Not In Group"
        renderPage={() => (
          <Page pageKey="page-not-in-group" title="Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </Page>
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavDLayout;
