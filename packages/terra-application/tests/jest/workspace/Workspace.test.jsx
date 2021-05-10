import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Workspace, { WorkspaceItem, WorkspaceContent } from '../../../src/workspace';

import MockApplication from '../MockApplication';

const testMetaData1 = { data: 1 };
const testMetaData2 = { data: 1 };

const TestWorkspace = (props) => (
  <MockApplication>
    <Workspace
      id="test-workspace"
      activeItemKey="1"
      onRequestActivate={() => {}}
      {...props}
    >
      <WorkspaceItem
        itemKey="1"
        label="Tab 1"
        metaData={testMetaData1}
        render={() => <WorkspaceContent><span>Item 1</span></WorkspaceContent>}
      />
      <WorkspaceItem
        itemKey="2"
        label="Tab 2"
        metaData={testMetaData2}
        render={() => <WorkspaceContent><span>Item 2</span></WorkspaceContent>}
      />
    </Workspace>
  </MockApplication>
);

test('renders WorkspaceItems based upon the activeItemKey prop', () => {
  const view = render(<TestWorkspace />);

  // Expect content for Tab 1 to be rendered to DOM, and Tab 2 content to be portaled
  expect(screen.queryByRole('tabpanel', { name: 'Tab 1' })).toBeInTheDocument();
  expect(screen.queryByRole('tabpanel', { name: 'Tab 2' })).toBe(null);

  // Update Workspace to make Tab 2 the active item
  view.rerender(<TestWorkspace activeItemKey="2" />);

  // Expect content for Tab 2 to be rendered to DOM, and Tab 1 content to be portaled
  expect(screen.queryByRole('tabpanel', { name: 'Tab 1' })).toBe(null);
  expect(screen.queryByRole('tabpanel', { name: 'Tab 2' })).toBeInTheDocument();
});

test('communicates tab selections through the onRequestActivate prop', () => {
  const mockOnRequestActivate = jest.fn();

  render(<TestWorkspace onRequestActivate={mockOnRequestActivate} />);

  // Click the tab for Tab 2
  userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

  // Expect the onRequestActivate to be executed with the key for Tab 2
  expect(mockOnRequestActivate).toHaveBeenCalledWith('2', testMetaData2);

  mockOnRequestActivate.mockReset();
});

test('should present utility menu with size options and utilizes onRequestSizeChange prop for callbacks', () => {
  const mockOnRequestSizeChange = jest.fn();

  render((
    <TestWorkspace
      activeSize="small"
      sizeOptions={[{ key: 'small', text: 'Small' }, { key: 'large', text: 'Large' }, { key: 'huge', text: 'Huge', isDisabled: true }]}
      onRequestSizeChange={mockOnRequestSizeChange}
    />
  ));

  // Menu button should be rendered due to the presence of sizeOptions
  const menuButton = screen.getByLabelText('terraApplication.workspace.workspaceSettingsLabel', { selector: 'div' });

  userEvent.click(menuButton);

  // Expect settings menu to render after button selection
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBeInTheDocument();

  const smallMenuItem = screen.getByRole('menuitemradio', { checked: true, name: 'Small', disabled: false });
  const largeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Large', disabled: false });
  const hugeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Huge', disabled: true });

  // Expect three size menu items are present, matching the provided sizeOptions
  expect(smallMenuItem).toBeInTheDocument();
  expect(largeMenuItem).toBeInTheDocument();
  expect(hugeMenuItem).toBeInTheDocument();

  userEvent.click(largeMenuItem);

  // Expect the settings menu to be closed after selecting menu item
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBe(null);

  // Expect onRequestSizeChange callback to be executed with the key for the selected menu item
  expect(mockOnRequestSizeChange).toHaveBeenCalledWith('large');
});

test('should present utility menu with item to close workspace if onRequestDismiss callback is provided', () => {
  const mockOnRequestDismiss = jest.fn();

  render((
    <TestWorkspace
      onRequestDismiss={mockOnRequestDismiss}
    />
  ));

  // Menu button should be rendered due to the presence of onRequestDismiss callback
  const menuButton = screen.getByLabelText('terraApplication.workspace.workspaceSettingsLabel', { selector: 'div' });

  userEvent.click(menuButton);

  // Expect settings menu to render after button selection
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBeInTheDocument();

  const closeWorkspaceMenuItem = screen.getByRole('menuitem', { name: 'terraApplication.workspace.hideWorkspaceLabel' });

  // Expect the close item to be rendered in the menu
  expect(closeWorkspaceMenuItem).toBeInTheDocument();

  userEvent.click(closeWorkspaceMenuItem);

  // Expect the settings menu to be closed after selecting menu item
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBe(null);

  // Expect onRequestDismiss callback to be executed after close menu item selection
  expect(mockOnRequestDismiss).toHaveBeenCalled();
});

test('should present utility menu with combined size and dismiss options if necessary', () => {
  render((
    <TestWorkspace
      activeSize="small"
      sizeOptions={[{ key: 'small', text: 'Small' }, { key: 'large', text: 'Large' }, { key: 'huge', text: 'Huge', isDisabled: true }]}
      onRequestSizeChange={() => {}}
      onRequestDismiss={() => {}}
    />
  ));

  // Menu button should be rendered due to the presence of onRequestDismiss callback
  const menuButton = screen.getByLabelText('terraApplication.workspace.workspaceSettingsLabel', { selector: 'div' });

  userEvent.click(menuButton);

  // Expect settings menu to render after button selection
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBeInTheDocument();

  const smallMenuItem = screen.getByRole('menuitemradio', { checked: true, name: 'Small', disabled: false });
  const largeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Large', disabled: false });
  const hugeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Huge', disabled: true });
  const closeWorkspaceMenuItem = screen.getByRole('menuitem', { name: 'terraApplication.workspace.hideWorkspaceLabel' });

  // Expect all menuItems to be rendered
  expect(smallMenuItem).toBeInTheDocument();
  expect(largeMenuItem).toBeInTheDocument();
  expect(hugeMenuItem).toBeInTheDocument();
  expect(closeWorkspaceMenuItem).toBeInTheDocument();
});

test('should present explicit dismiss button if enabled by dismissButtonIsVisible', () => {
  const mockOnRequestDismiss = jest.fn();

  render((
    <TestWorkspace
      onRequestDismiss={mockOnRequestDismiss}
      dismissButtonIsVisible
    />
  ));

  // Dismiss button should be rendered due to the dismissButtonIsVisible prop
  const dismissButton = screen.getByLabelText('terraApplication.workspace.hideWorkspaceLabel');

  userEvent.click(dismissButton);

  // Expect onRequestDismiss callback to be executed after dismiss button selection
  expect(mockOnRequestDismiss).toHaveBeenCalled();
});

test('should dismiss the Workspace Settings menu when the popup wants to close', () => {
  render((
    <TestWorkspace
      activeSize="small"
      sizeOptions={[{ key: 'small', text: 'Small' }, { key: 'large', text: 'Large' }, { key: 'huge', text: 'Huge', isDisabled: true }]}
      onRequestSizeChange={() => {}}
      onRequestDismiss={() => {}}
    />
  ));

  // Menu button should be rendered due to the presence of onRequestDismiss callback
  const menuButton = screen.getByLabelText('terraApplication.workspace.workspaceSettingsLabel', { selector: 'div' });

  userEvent.click(menuButton);

  // Expect settings menu to render after button selection
  const settingsPopup = screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' });
  expect(settingsPopup).toBeInTheDocument();

  // Simulate user pressing Escape key to close settings popup
  userEvent.type(settingsPopup, '{esc}');

  // Expect the settings menu to be closed after pressing escape
  expect(screen.queryByRole('dialog', { name: 'terraApplication.workspace.workspaceSettingsLabel' })).toBe(null);
});

test('should render with overlay styles if isPresentedAsOverlay is provided', () => {
  render((
    <TestWorkspace
      data-testid="test-workspace"
      isPresentedAsOverlay
    />
  ));

  // Expect overlay class to be present on the workspace element
  expect(screen.queryByTestId('test-workspace')).toHaveClass('is-overlay');
});

