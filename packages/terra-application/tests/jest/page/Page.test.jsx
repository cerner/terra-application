import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import UnsavedChangesPrompt from '../../../src/unsaved-changes-prompt';

import ApplicationContainer from '../../../src/application-container';
import MainPageContainer from '../../../src/page-container/MainPageContainer';
import Logger from '../../../src/utils/logger';
import Page from '../../../src/page';
import '../../../src/shared/useElementSize';

import MockApplication from '../MockApplication';
import { ActiveMainContext } from '../../../src/main-container';
import LayoutActionsContext from '../../../src/shared/LayoutActionsContext';

let mockActiveBreakpointForTest;
jest.mock('../../../src/shared/useElementSize', () => ({
  __esModule: true,
  default: () => ({ activeBreakpoint: mockActiveBreakpointForTest }),
}));

let activeMainForTest;
const TestPage = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <MainPageContainer>
        <Page {...props} />
      </MainPageContainer>
      <ActiveMainContext.Consumer>
        {(activeMain) => { activeMainForTest = activeMain; }}
      </ActiveMainContext.Consumer>
    </ApplicationContainer>
  </MockApplication>
);

test('renders heading with provided label', () => {
  render((
    <TestPage
      label="Test Page"
    />
  ));

  expect(screen.getByRole('heading', { name: 'Test Page', level: 1 })).toBeInTheDocument();
  expect(activeMainForTest.label).toBe('Test Page');
});

test('renders toolbar if provided', () => {
  render((
    <TestPage
      label="Test Page"
      toolbar={(
        <Page.Toolbar>
          <div data-testid="toolbar-item-1" />
          <div data-testid="toolbar-item-2" />
        </Page.Toolbar>
      )}
    />
  ));

  expect(screen.getByTestId('toolbar-item-1')).toBeInTheDocument();
  expect(screen.getByTestId('toolbar-item-2')).toBeInTheDocument();
});

test('throws if unsupported toolbar if provided', () => {
  const testError = new Error('[terra-application] Page.Toolbar must be used to define a toolbar for Test Page.');
  const mockLoggerError = jest.fn();
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(mockLoggerError);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  render((
    <TestPage
      label="Test Page"
      toolbar={(
        <div>
          <div data-testid="toolbar-item-1" />
          <div data-testid="toolbar-item-2" />
        </div>
      )}
    />
  ));

  expect(mockLoggerError).toHaveBeenCalledWith(testError);

  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('renders provided actions', () => {
  const onSelectAction1 = jest.fn();
  const onSelectAction2 = jest.fn();
  const action1Ref = React.createRef();
  mockActiveBreakpointForTest = 'large';

  render((
    <TestPage
      label="Test Page"
      actions={(
        <Page.Actions>
          <Page.Action
            label="Action 1"
            icon={<div data-testid="action-1-icon" />}
            onSelect={onSelectAction1}
            refCallback={(ref) => {
              action1Ref.current = ref;
            }}
          />
          <Page.Action
            label="Action 2"
            icon={<div data-testid="action-2-icon" />}
            onSelect={onSelectAction2}
          />
          <Page.Action
            label="Action 3"
            icon={<div data-testid="action-3-icon" />}
          />
          {false}
        </Page.Actions>
      )}
    />
  ));

  const button1 = screen.getByRole('button', { name: 'Action 1' });
  const button2 = screen.getByRole('button', { name: 'Action 2' });
  const button3 = screen.getByRole('button', { name: 'Action 3' });

  expect(button1).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
  expect(button3).toBeInTheDocument();
  expect(button3).toBeDisabled();

  expect(screen.getByTestId('action-1-icon')).toBeInTheDocument();
  expect(screen.getByTestId('action-2-icon')).toBeInTheDocument();
  expect(screen.getByTestId('action-3-icon')).toBeInTheDocument();

  userEvent.click(button1);
  userEvent.click(button2);

  expect(onSelectAction1).toHaveBeenCalledTimes(1);
  expect(onSelectAction2).toHaveBeenCalledTimes(1);

  expect(action1Ref.current).toBeDefined();
});

test('throws if unsupported actions are provided', () => {
  const testError = new Error('[terra-application] Page.Actions must be used to define actions for Test Page.');
  const mockLoggerError = jest.fn();
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(mockLoggerError);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  const onSelectAction1 = jest.fn();
  const onSelectAction2 = jest.fn();
  render((
    <TestPage
      label="Test Page"
      actions={(
        <div>
          <Page.Action
            label="Action 1"
            icon={<div data-testid="action-1-icon" />}
            onSelect={onSelectAction1}
          />
          <Page.Action
            label="Action 2"
            icon={<div data-testid="action-2-icon" />}
            onSelect={onSelectAction2}
          />
          <Page.Action
            label="Action 3"
            icon={<div data-testid="action-3-icon" />}
          />
          {false}
        </div>
      )}
    />
  ));

  expect(mockLoggerError).toHaveBeenCalledWith(testError);

  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('throws if more than three actions are provided', () => {
  const testError = new Error('[terra-application] Test Page cannot render more than three actions.');
  const mockLoggerError = jest.fn();
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(mockLoggerError);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  const onSelectAction1 = jest.fn();
  const onSelectAction2 = jest.fn();
  render((
    <TestPage
      label="Test Page"
      actions={(
        <Page.Actions>
          <Page.Action
            label="Action 1"
            icon={<div data-testid="action-1-icon" />}
            onSelect={onSelectAction1}
          />
          <Page.Action
            label="Action 2"
            icon={<div data-testid="action-2-icon" />}
            onSelect={onSelectAction2}
          />
          <Page.Action
            label="Action 3"
            icon={<div data-testid="action-3-icon" />}
          />
          <Page.Action
            label="Action 4"
            icon={<div data-testid="action-4-icon" />}
          />
        </Page.Actions>
      )}
    />
  ));

  expect(mockLoggerError).toHaveBeenCalledWith(testError);

  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('renders back button when onRequestClose is provided', async () => {
  const mockOnRequestClose = jest.fn();

  render((
    <TestPage
      label="Test Page"
      onRequestClose={mockOnRequestClose}
    />
  ));

  const backButton = screen.getByRole('button', { name: 'terraApplication.pageHeader.back' });

  expect(backButton).toBeInTheDocument();

  userEvent.click(backButton);

  await waitFor(() => expect(mockOnRequestClose).toHaveBeenCalled());
});

test('disregards prompts when disabled', async () => {
  const mockOnRequestClose = jest.fn();

  render((
    <TestPage
      label="Test Page"
      onRequestClose={mockOnRequestClose}
      dangerouslyDisableUnsavedChangesPromptHandling
    >
      <UnsavedChangesPrompt description="Test Prompt" />
    </TestPage>
  ));

  const backButton = screen.getByRole('button', { name: 'terraApplication.pageHeader.back' });

  expect(backButton).toBeInTheDocument();

  userEvent.click(backButton);

  expect(mockOnRequestClose).toHaveBeenCalled();
});

test('disregards prompts when disabled', async () => {
  const mockOnRequestClose = jest.fn();

  render((
    <TestPage
      label="Test Page"
      onRequestClose={mockOnRequestClose}
      dangerouslyDisableUnsavedChangesPromptHandling
    >
      <UnsavedChangesPrompt description="Test Prompt" />
    </TestPage>
  ));

  const backButton = screen.getByRole('button', { name: 'terraApplication.pageHeader.back' });

  expect(backButton).toBeInTheDocument();

  userEvent.click(backButton);

  expect(mockOnRequestClose).toHaveBeenCalled();
});

test('renders provided actions in rollup menu at tiny size', () => {
  const onSelectAction1 = jest.fn();
  const onSelectAction2 = jest.fn();
  const action1Ref = React.createRef();
  mockActiveBreakpointForTest = 'tiny';

  render((
    <TestPage
      label="Test Page"
      actions={(
        <Page.Actions>
          <Page.Action
            label="Action 1"
            icon={<div data-testid="action-1-icon" />}
            onSelect={onSelectAction1}
            refCallback={(ref) => {
              action1Ref.current = ref;
            }}
          />
          <Page.Action
            label="Action 2"
            icon={<div data-testid="action-2-icon" />}
            onSelect={onSelectAction2}
          />
          <Page.Action
            label="Action 3"
            icon={<div data-testid="action-3-icon" />}
          />
          {false}
        </Page.Actions>
      )}
    />
  ));

  const rollupButton = screen.getByRole('button', {
    name: 'terraApplication.pageHeader.moreActions',
  });

  expect(rollupButton).toBeInTheDocument();

  expect(action1Ref.current).toBeDefined();

  userEvent.click(rollupButton);

  const menu = screen.getByRole('menu');
  expect(menu).toBeInTheDocument();

  const item1 = screen.getByRole('menuitem', { name: 'Action 1' });
  const item2 = screen.getByRole('menuitem', { name: 'Action 2' });
  const item3 = screen.getByRole('menuitem', { name: 'Action 3' });

  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
  expect(item3).toBeInTheDocument();
  expect(item3).toHaveClass('is-disabled');

  userEvent.click(item1);

  expect(onSelectAction1).toHaveBeenCalledTimes(1);

  expect(screen.queryByRole('menu')).toBeNull();

  userEvent.click(rollupButton);
  userEvent.type(screen.queryByRole('menu'), '{esc}');
  expect(screen.queryByRole('menu')).toBeNull();
});

test('renders page container actions', () => {
  const onSelectAction1 = jest.fn();

  mockActiveBreakpointForTest = 'large';

  render((
    <LayoutActionsContext.Provider
      value={{
        actions: [{
          key: '1',
          label: 'Layout Action 1',
          onSelect: onSelectAction1,
          icon: <div data-testid="layout-action-1-icon" />,
        }],
      }}
    >
      <TestPage
        label="Test Page"
      />
    </LayoutActionsContext.Provider>
  ));

  const button1 = screen.getByRole('button', { name: 'Layout Action 1' });

  expect(button1).toBeInTheDocument();
  expect(screen.getByTestId('layout-action-1-icon')).toBeInTheDocument();

  userEvent.click(button1);

  expect(onSelectAction1).toHaveBeenCalledTimes(1);
});
