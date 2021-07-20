import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  WorkspaceContent,
} from '../../../src/workspace';
import TabContext from '../../../src/workspace/subcomponents/_TabContext';
import NotificationBanner from '../../../src/notification-banner';

import MockApplication from '../MockApplication';

const TestWorkspaceContent = (props) => (
  <MockApplication>
    <TabContext.Provider value={{ panelId: 'test-panel-id', tabId: 'test-tab-id', label: 'Test Label' }}>
      <WorkspaceContent {...props} />
    </TabContext.Provider>
  </MockApplication>
);

test('should render heading with appropriate label', () => {
  render((
    <TestWorkspaceContent>
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect heading region to render label provided by the TabContext
  expect(screen.getByTestId('workspace-content-heading')).toHaveTextContent('Test Label');
});

test('should render heading with appropriate label- override', () => {
  render((
    <TestWorkspaceContent
      label="Test Label - override"
    >
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect heading region to render label provided by the TabContext
  expect(screen.getByTestId('workspace-content-heading')).toHaveTextContent('Test Label - override');
});

test('should render tabpanel with appropriate labeling', () => {
  render((
    <TestWorkspaceContent>
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect tabpanel to render with appropriate accessible labeling
  const renderedTabPanel = screen.getByRole('tabpanel');
  expect(renderedTabPanel).toHaveAttribute('tabindex', '0');
  expect(renderedTabPanel).toHaveAttribute('id', 'test-panel-id');
  expect(renderedTabPanel).toHaveAttribute('aria-labelledby', 'test-tab-id');
  expect(renderedTabPanel).toHaveAttribute('data-application-overflow-container');
});

test('should render given childen', () => {
  render((
    <TestWorkspaceContent>
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect provided children to be present within the rendered component
  expect(screen.queryByTestId('test-content')).toBeInTheDocument();
});

test('should render given toolbar', () => {
  render((
    <TestWorkspaceContent
      toolbar={<div data-testid="test-toolbar" />}
    >
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect toolbar to be rendered when provided
  expect(screen.queryByTestId('test-toolbar')).toBeInTheDocument();
});

test('should render given status overlay', () => {
  render((
    <TestWorkspaceContent
      toolbar={<div data-testid="test-toolbar" />}
      statusOverlay={<WorkspaceContent.StatusOverlay />}
    >
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect status overlay to be rendered when provided
  expect(screen.getByTestId('workspace-content-status')).toBeInTheDocument();
});

test('should render given activity overlay', () => {
  render((
    <TestWorkspaceContent
      toolbar={<div data-testid="test-toolbar" />}
      activityOverlay={<WorkspaceContent.ActivityOverlay />}
    >
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect activity overlay to be rendered when provided
  expect(screen.getByTestId('workspace-content-activity-overlay')).toBeInTheDocument();
});

test('should render both status and activity overlays if both are provided', () => {
  render((
    <TestWorkspaceContent
      toolbar={<div data-testid="test-toolbar" />}
      statusOverlay={<WorkspaceContent.StatusOverlay />}
      activityOverlay={<WorkspaceContent.ActivityOverlay />}
    >
      <div data-testid="test-content" />
    </TestWorkspaceContent>
  ));

  // Expect both overlays to be rendered when provided
  expect(screen.getByTestId('workspace-content-status')).toBeInTheDocument();
  expect(screen.getByTestId('workspace-content-activity-overlay')).toBeInTheDocument();
});

test('should render NotificationBanners when rendered by children', () => {
  render((
    <TestWorkspaceContent>
      <div data-testid="test-content" />
      <NotificationBanner variant="error" description="Test Notification" />
    </TestWorkspaceContent>
  ));

  // Expect NotificationBanner with role of "alert" to be rendered when provided by children
  expect(screen.getByLabelText('terraApplication.notificationBanner.error')).toHaveTextContent('Test Notification');
});
