import React from 'react';
import { SecondaryNavigationLayout } from '../../../layouts';
import SecondaryNavigationLayoutWorkspace from '../../../layouts/secondary-navigation-layout/workspace/SecondaryNavigationLayoutWorkspace';
import WorkspaceTab from '../../../layouts/secondary-navigation-layout/workspace/WorkspaceTab';
import Page1 from '../pages/Page1';
import Tab1 from '../workspace/Tab1';
import Tab2 from '../workspace/Tab2';
import Tab3 from '../workspace/Tab3';
import Tab4 from '../workspace/Tab4';
import Tab5 from '../workspace/Tab5';

const propTypes = {};

const NavBLayout = () => (
  <SecondaryNavigationLayout
    id="nav-b-layout"
    label="Nav B"
    renderPage={() => <Page1 />}
    workspace={(
      <SecondaryNavigationLayoutWorkspace
        initialActiveItemKey="tab-1"
        initialSize={{ scale: 0.50 }}
        initialIsOpen
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
          label="Tab 2 Tab 2 Tab 2"
          metaData={{ key: 'tab-2' }}
          render={() => <Tab2 />}
        />
        <WorkspaceTab
          itemKey="tab-3"
          label="Tab 3"
          metaData={{ key: 'tab-3' }}
          render={() => <Tab3 />}
        />
        <WorkspaceTab
          itemKey="tab-4"
          label="Tab 4 Tab 4 Tab 4 Tab 4 Tab 4 Tab 4 Tab 4 Tab 4 Tab 4"
          metaData={{ key: 'tab-4' }}
          render={() => <Tab4 />}
        />
        <WorkspaceTab
          itemKey="tab-5"
          label="Tab 5"
          metaData={{ key: 'tab-5' }}
          render={() => <Tab5 />}
        />
      </SecondaryNavigationLayoutWorkspace>
    )}
  />
);

NavBLayout.propTypes = propTypes;

export default NavBLayout;
