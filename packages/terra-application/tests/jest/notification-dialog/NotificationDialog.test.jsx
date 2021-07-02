import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container';
import NotificationDialog from '../../../src/notification-dialog/NotificationDialog';
import ContentLayoutAsList from '../../../src/notification-dialog/_ContentLayoutAsList';

import Logger from '../../../src/utils/logger';

import MockApplication from '../MockApplication';

const TestNotificationDialog = (props) => (
  <MockApplication>
    <ApplicationContainer>
      <NotificationDialog {...props} />
    </ApplicationContainer>
  </MockApplication>
);

test('renders an alertdialog element with the appropriate label', () => {
  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      startMessage="Test Start Message"
      endMessage="Test End Message"
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
    />
  ));

  expect(screen.queryByRole('alertdialog', { name: 'terraApplication.notificationDialog.hazard-high Test Title' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Test Accept' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Test Reject' })).toBeInTheDocument();
  expect(screen.queryByTestId('notification-dialog-icon')).toHaveClass('hazard-high-icon');
  expect(screen.queryByRole('alertdialog')).toHaveTextContent('Test Start Message');
  expect(screen.queryByRole('alertdialog')).toHaveTextContent('Test End Message');
});

test('applies callbacks to appropriate action buttons', () => {
  const mockAccept = jest.fn();
  const mockReject = jest.fn();

  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      startMessage="Test Start Message"
      endMessage="Test End Message"
      acceptAction={{
        text: 'Test Accept',
        onClick: mockAccept,
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: mockReject,
      }}
    />
  ));

  const acceptButton = screen.getByRole('button', { name: 'Test Accept' });
  const rejectButton = screen.getByRole('button', { name: 'Test Reject' });

  userEvent.click(acceptButton);
  expect(mockAccept).toHaveBeenCalledTimes(1);
  expect(mockReject).toHaveBeenCalledTimes(0);

  userEvent.click(rejectButton);
  expect(mockAccept).toHaveBeenCalledTimes(1);
  expect(mockReject).toHaveBeenCalledTimes(1);
});

test('throws if no variant provided', () => {
  const testError = new Error('[terra-application] A variant must be provided to the NotificationDialog');
  const mockLoggerError = jest.fn();
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(mockLoggerError);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  render((
    <TestNotificationDialog
      dialogTitle="Test Title"
      startMessage="Test Start Message"
      endMessage="Test End Message"
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
    />
  ));

  expect(mockLoggerError).toHaveBeenCalledWith(testError);

  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('throws if no actions provided', () => {
  const testError = new Error('[terra-application] Either the `acceptAction` or `rejectAction` props must be provided to the NotificationDialog');
  const mockLoggerError = jest.fn();
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(mockLoggerError);
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      startMessage="Test Start Message"
      endMessage="Test End Message"
    />
  ));

  expect(mockLoggerError).toHaveBeenCalledWith(testError);

  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('renders an custom variant dialog', () => {
  render((
    <TestNotificationDialog
      variant="custom"
      dialogTitle="Test Title"
      startMessage="Test Start Message"
      endMessage="Test End Message"
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
      custom={{
        signalWord: 'Test Signal Word',
        iconClassName: 'test-custom-icon-class',
      }}
    />
  ));

  expect(screen.queryByRole('alertdialog', { name: 'Test Signal Word Test Title' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Test Accept' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Test Reject' })).toBeInTheDocument();
  expect(screen.queryByTestId('notification-dialog-icon')).toHaveClass('test-custom-icon-class');
  expect(screen.queryByRole('alertdialog')).toHaveTextContent('Test Start Message');
  expect(screen.queryByRole('alertdialog')).toHaveTextContent('Test End Message');
});

test('renders dialog with generic content', () => {
  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      content={(
        <ContentLayoutAsList items={['Content Item 1', 'Content Item 2']} />
      )}
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
    />
  ));

  expect(screen.queryByText('Content Item 1')).toBeInTheDocument();
  expect(screen.queryByText('Content Item 2')).toBeInTheDocument();
});

test('traps focus within dialog', async () => {
  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      content={(
        <ContentLayoutAsList items={['Content Item 1', 'Content Item 2']} />
      )}
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
    />
  ));

  const focusAnchor = screen.getByTestId('dialog-focus-anchor');
  const dialogBody = screen.getByTestId('notification-dialog-body');
  const acceptButton = screen.getByRole('button', { name: 'Test Accept' });
  const rejectButton = screen.getByRole('button', { name: 'Test Reject' });

  await waitFor(() => expect(focusAnchor).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(dialogBody).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(acceptButton).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(rejectButton).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(dialogBody).toHaveFocus());

  userEvent.tab({ shift: true });

  await waitFor(() => expect(rejectButton).toHaveFocus());

  userEvent.tab({ shift: true });

  await waitFor(() => expect(acceptButton).toHaveFocus());

  userEvent.tab({ shift: true });

  await waitFor(() => expect(dialogBody).toHaveFocus());
});

test('arranges buttons with buttonOrder prop', async () => {
  render((
    <TestNotificationDialog
      variant="hazard-high"
      dialogTitle="Test Title"
      content={(
        <ContentLayoutAsList items={['Content Item 1', 'Content Item 2']} />
        )}
      acceptAction={{
        text: 'Test Accept',
        onClick: jest.fn(),
      }}
      rejectAction={{
        text: 'Test Reject',
        onClick: jest.fn(),
      }}
      buttonOrder="rejectFirst"
    />
  ));

  const focusAnchor = screen.getByTestId('dialog-focus-anchor');
  const dialogBody = screen.getByTestId('notification-dialog-body');
  const acceptButton = screen.getByRole('button', { name: 'Test Accept' });
  const rejectButton = screen.getByRole('button', { name: 'Test Reject' });

  await waitFor(() => expect(focusAnchor).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(dialogBody).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(rejectButton).toHaveFocus());

  userEvent.tab();

  await waitFor(() => expect(acceptButton).toHaveFocus());
});
