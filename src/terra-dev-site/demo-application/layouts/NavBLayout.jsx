import React from 'react';
import { SecondaryNavigationLayout } from '../../../layouts';
import SecondaryNavigationLayoutWorkspace from '../../../layouts/secondary-navigation-layout/workspace/SecondaryNavigationLayoutWorkspace';
import WorkspaceTab from '../../../layouts/secondary-navigation-layout/workspace/WorkspaceTab';
import Page2 from '../pages/Page1';
import Tab1 from '../workspace/Tab1';
import Tab2 from '../workspace/Tab2';
import Tab3 from '../workspace/Tab3';
import Tab4 from '../workspace/Tab4';

const propTypes = {};

const NavBLayout = () => (
  <SecondaryNavigationLayout
    renderPage={() => <Page2 />}
    workspace={(
      <SecondaryNavigationLayoutWorkspace
        id="nav-b-workspace"
        initialActiveTabKey="tab-1"
        initialSize={{ scale: 0.75 }}
        initialIsOpen
        onActiveTabChange={(newActiveTabKey) => {
          console.log(`Workspace active tab: ${newActiveTabKey}`);
        }}
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
        <WorkspaceTab
          tabKey="tab-3"
          label="Tab 3"
          metaData={{ key: 'tab-3' }}
          render={() => <Tab3 />}
        />
        <WorkspaceTab
          tabKey="tab-4"
          label="Tab 4"
          metaData={{ key: 'tab-4' }}
          render={() => <Tab4 />}
        />
      </SecondaryNavigationLayoutWorkspace>
    )}
  />
);

NavBLayout.propTypes = propTypes;

export default NavBLayout;
