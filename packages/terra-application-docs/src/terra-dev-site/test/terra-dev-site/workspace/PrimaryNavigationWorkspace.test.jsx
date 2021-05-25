import React from 'react';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import ApplicationContainer from '@cerner/terra-application/lib/application-container';
import PrimaryNavigationLayout, { NavigationItem } from '@cerner/terra-application/lib/primary-navigation-layout';

import PrimaryNavigationWorkspace from '@cerner/terra-application/lib/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspace';
import PrimaryNavigationWorkspaceItem from '@cerner/terra-application/lib/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspaceItem';
import { WorkspaceContent } from '@cerner/terra-application/lib//workspace';

import TestPage from '../pages/MyReusablePage';

const Tab1 = () => (
  <WorkspaceContent>
    <p>Wombat 1</p>
  </WorkspaceContent>
);

const Tab2 = () => (
  <WorkspaceContent>
    <p>Wombat 2</p>
  </WorkspaceContent>
);

const PrimaryNavigationLayout5 = () => {
  const [
    activeNavigationItemKey,
    setActiveNavigationItemKey,
  ] = React.useState('1');

  const wrapper = (
    <PrimaryNavigationWorkspace
      id="derp"
      initialActiveItemKey="tab-1"
      initialSize={{ scale: 0.50 }}
      initialIsOpen
      onActiveItemChange={(newActiveItemKey) => {
        console.log(`Workspace active item: ${newActiveItemKey}`); // eslint-disable-line no-console
      }}
      onSizeChange={(size) => {
        console.log(`Workspace size changed: ${size}`); // eslint-disable-line no-console
      }}
      onPresentationStateChange={(isPresented) => {
        console.log(`Workspace presentation changed. isOpen - ${isPresented}`); // eslint-disable-line no-console
      }}
    >
      <PrimaryNavigationWorkspaceItem
        itemKey="tab-1"
        label="Tab 1"
        metaData={{ key: 'tab-1' }}
        render={() => <Tab1 />}
      />
      <PrimaryNavigationWorkspaceItem
        itemKey="tab-2"
        label="Tab 2"
        metaData={{ key: 'tab-2' }}
        render={() => <Tab2 />}
      />
    </PrimaryNavigationWorkspace>
  );

  return (
    <ApplicationBase locale="en-US">
      <ApplicationContainer>
        <PrimaryNavigationLayout
          id="primary-nav-test-1"
          titleConfig={{
            title: 'PrimaryNavigationLayout Test 5',
            subline: 'NavigationItems w/ Pages',
          }}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          renderNavigationFallback={() => <div>Navigation Fallback</div>}
          userConfig={{
            name: 'Demo User',
            detail: 'demouser',
          }}
          workspace={wrapper}
        >
          <NavigationItem
            navigationKey="1"
            label="Nav 1"
            renderPage={() => (
              <TestPage />
            )}
          />
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout5;
