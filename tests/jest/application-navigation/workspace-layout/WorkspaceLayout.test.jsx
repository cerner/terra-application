import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicationNavigation from '../../../../src/application-navigation';
import { WorkspaceContent } from '../../../../src/workspace';
import { ActiveBreakpointContext } from '../../../../src/breakpoints';
import MockApplication from '../../MockApplication';
import WorkspaceLayout from '../../../../src/application-navigation/private/workspace-layout/WorkspaceLayout';

/* eslint-disable react/prop-types */
const MyMockApplication = ({ children }) => (
  <MockApplication>
    <ActiveBreakpointContext.Provider value="large">
      {children}
    </ActiveBreakpointContext.Provider>
  </MockApplication>
);

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
  <ApplicationNavigation.Workspace
    id="application-workspace-example"
    initialActiveItemKey={initActive}
    initialSize={initSize}
    initialIsOpen={initIsOpen}
  >
    <ApplicationNavigation.Workspace.Item
      itemKey="tab-1"
      label="Tab 1"
      metaData={{ key: 'tab-1' }}
      render={() => <Tab1 />}
    />
    <ApplicationNavigation.Workspace.Item
      itemKey="tab-2"
      label="Tab 2"
      metaData={{ key: 'tab-2' }}
      render={() => <Tab2 />}
    />
  </ApplicationNavigation.Workspace>
);

describe('WorkspaceLayout', () => {
  test('should render a WorkspaceLayout with default props', () => {
    render((
      <MyMockApplication>
        <WorkspaceLayout
          id="test-id"
        />
      </MyMockApplication>
    ));

    const containerNode = document.getElementById('test-id');
    expect(containerNode).toBeInTheDocument();

    const mainNode = document.getElementById('test-id-content-body');
    expect(mainNode).toBeInTheDocument();
  });

  test('should render a WorkspaceLayout with main content', () => {
    render((
      <MyMockApplication>
        <WorkspaceLayout
          id="test-id"
        >
          <p>Test Main Content</p>
        </WorkspaceLayout>
      </MyMockApplication>
    ));

    const mainNode = document.getElementById('test-id-content-body');
    expect(mainNode).toBeInTheDocument();
    expect(mainNode).toHaveTextContent('Test Main Content');
  });

  test('should render a WorkspaceLayout defaulting closed', () => {
    render((
      <MyMockApplication>
        <WorkspaceLayout
          id="test-id"
          workspace={renderWorkspace()}
        />
      </MyMockApplication>
    ));

    const panelNode = document.getElementById('test-id-workspace-body');
    expect(panelNode).toBeInTheDocument();
    expect(panelNode).not.toHaveClass('visible');
    expect(panelNode).toHaveAttribute('aria-labelledBy', 'test-id-workspace-container');
    expect(panelNode).toHaveAttribute('tabIndex', '-1');
    expect(panelNode).toHaveTextContent('Example Workspace Content 1');
  });

  test('should render a WorkspaceLayout defaulting open', () => {
    render((
      <MyMockApplication>
        <WorkspaceLayout
          id="test-id"
          workspace={renderWorkspace(undefined, undefined, true)}
        />
      </MyMockApplication>
    ));

    const panelNode = document.getElementById('test-id-workspace-body');
    expect(panelNode).toBeInTheDocument();
    expect(panelNode).toHaveClass('visible');
    expect(panelNode).toHaveAttribute('aria-labelledBy', 'test-id-workspace-container');
    expect(panelNode).toHaveAttribute('tabIndex', '-1');
    expect(panelNode).toHaveTextContent('Example Workspace Content 1');
  });
});
