import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  ApplicationNavigationWorkspace,
  ApplicationNavigationWorkspaceItem,
} from 'terra-application/lib/application-navigation';

import WorkspaceLayout from 'terra-application/lib/application-navigation/workspace-layout/WorkspaceLayout';
import { WorkspaceContent } from 'terra-application/lib/workspace';
const Tab1 = () => (
  <WorkspaceContent>
    <p id="test-workspace-0">Example Workspace Content 1</p>
  </WorkspaceContent>
);

const Tab2 = () => (
  <WorkspaceContent>
    <p id="test-workspace-1">Example Workspace Content 2</p>
  </WorkspaceContent>
);

const renderWorkspace = (initActive = 'tab-1', initSize = { scale: 0.50 }, initIsOpen = false) => (
  <ApplicationNavigationWorkspace
    id="application-workspace-example"
    initialActiveItemKey={initActive}
    initialSize={initSize}
    initialIsOpen={initIsOpen}
  >
    <ApplicationNavigationWorkspaceItem
      itemKey="tab-1"
      label="Tab 1"
      metaData={{ key: 'tab-1' }}
      render={() => <Tab1 />}
    />
    <ApplicationNavigationWorkspaceItem
      itemKey="tab-2"
      label="Tab 2"
      metaData={{ key: 'tab-2' }}
      render={() => <Tab2 />}
    />
  </ApplicationNavigationWorkspace>
);

describe('WorkspaceLayout', () => {
  test('should render a WorkspaceLayout with default props', () => {
    render((
      <WorkspaceLayout
        id="test-id"
      />
    ));

    const containerNode = document.getElementById('test-id');
    expect(containerNode).toBeInTheDocument();

    const mainNode = document.getElementById('test-id-workspace-body');
    expect(mainNode).toBeInTheDocument();
  });

  test('should render a WorkspaceLayout with main content', () => {
    render((
      <WorkspaceLayout
        id="test-id"
      >
        <p>Test Main Content</p>
      </WorkspaceLayout>
    ));

    const mainNode = document.getElementById('test-id-workspace-body');
    expect(mainNode).toBeInTheDocument();
    expect(mainNode).toHaveTextContent('Test Main Content');
  });

  test('should render a WorkspaceLayout defaulting closed', () => {
    render((
      <WorkspaceLayout
        id="test-id"
        workspace={renderWorkspace()}
      />
    ));

    const panelNode = document.getElementById('test-id-workspace-body');
    expect(panelNode).not.toBeInTheDocument();
  });

  test('should render a WorkspaceLayout defaulting open', () => {
    render((
      <WorkspaceLayout
        id="test-id"
        workspace={renderWorkspace(null, null, true)}
      />
    ));

    const panelNode = document.getElementById('test-id-workspace-body');
    expect(panelNode).toBeInTheDocument();
    expect(panelNode).toHaveAttribute('aria-labelledBy', 'test-id-workspace-container');
    expect(panelNode).toHaveAttribute('tabIndex', '-1');
    expect(panelNode).toHaveTextContent('Example Workspace Content 1');
  });
});
