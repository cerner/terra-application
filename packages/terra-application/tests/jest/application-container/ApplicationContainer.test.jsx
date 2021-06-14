import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import UnsavedChangesPrompt from '../../../src/unsaved-changes-prompt';
import ApplicationContainer from '../../../src/application-container';
import WindowManager from '../../../src/utils/window-manager';
import MockApplication from '../MockApplication';
import Logger from '../../../src/utils/logger';
import SkipToLink from '../../../src/application-container/private/skip-to-links/SkipToLink';
import { dismissTransientPresentations } from '../../../src/utils/transient-presentations';

// Mock WindowManager to track registrations/unregistrations of prompt signals.
let registeredSignal;
const mockUnregisterUnloadPromptSignal = jest.fn();
jest.mock('../../../src/utils/window-manager', () => ({
  registerUnloadPromptSignal: jest.fn().mockImplementation((signal) => {
    registeredSignal = signal;
    return mockUnregisterUnloadPromptSignal;
  }),
}));

jest.mock('../../../src/utils/transient-presentations', () => ({
  dismissTransientPresentations: jest.fn(),
}));

const TestApplicationContainer = (props) => (
  <MockApplication>
    <ApplicationContainer
      {...props}
    />
  </MockApplication>
);

test('should render ApplicationContainer with provided content', () => {
  render((
    <TestApplicationContainer>
      <div data-testid="test-content" />
    </TestApplicationContainer>
  ));

  // Expect container element to be rendered
  expect(screen.queryByTestId('application-container')).toBeInTheDocument();

  // Expect children to be rendered
  expect(screen.queryByTestId('test-content')).toBeInTheDocument();
});

test('should register handler with WindowManager to prompt for unsaved changes before unload', () => {
  const view = render((
    <TestApplicationContainer>
      <div data-testid="test-content" />
    </TestApplicationContainer>
  ));

  expect(WindowManager.registerUnloadPromptSignal).toHaveBeenCalled();

  jest.clearAllMocks();

  view.rerender((
    <TestApplicationContainer unloadPromptIsDisabled>
      <div data-testid="test-content" />
    </TestApplicationContainer>
  ));

  expect(WindowManager.registerUnloadPromptSignal).not.toHaveBeenCalled();
  expect(mockUnregisterUnloadPromptSignal).toHaveBeenCalled();
});

test('should catch errors thrown by rendered children', () => {
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(() => {});
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const error = new Error('Test Error');
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw error;
    });

    return <div data-testid="error-child" />;
  };

  render((
    <TestApplicationContainer>
      <ErrorChild />
    </TestApplicationContainer>
  ));

  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByText('terraApplication.errorBoundary.defaultErrorMessage')).toBeInTheDocument();
  expect(loggerSpy).toBeCalledWith(error);
  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('should respond to navigation prompt registrations within its children', () => {
  registeredSignal = undefined;

  const view = render((
    <TestApplicationContainer>
      <div data-testid="test-content" />
    </TestApplicationContainer>
  ));

  // Expect children to be rendered
  expect(screen.queryByTestId('test-content')).toBeInTheDocument();

  // Expect a WindowManager signal function to be registered
  expect(registeredSignal).toBeDefined();
  expect(registeredSignal()).toBe(false);

  view.rerender((
    <TestApplicationContainer>
      <div data-testid="test-content" />
      <UnsavedChangesPrompt description="Test Prompt" />
    </TestApplicationContainer>
  ));

  // Expect registered function to return true due to UnsavedChangesPrompt presence
  expect(registeredSignal()).toBe(true);
});

test('should render SkipToLinks rendered as children', () => {
  dismissTransientPresentations.mockImplementation(callback => callback());

  const view = render((
    <TestApplicationContainer>
      <div data-testid="test-content" />
    </TestApplicationContainer>
  ));

  // Expect container for links to be in the document by default.
  expect(screen.queryByTestId('skip-to-links')).toBeInTheDocument();

  const mockOnSelectLink = jest.fn();
  const mockOnSelectOtherLink = jest.fn();
  view.rerender((
    <TestApplicationContainer>
      <div data-testid="test-content" />
      <SkipToLink
        priority="main"
        description="Test Skip To Link"
        onSelect={mockOnSelectLink}
      />
    </TestApplicationContainer>
  ));

  let renderedLinks = screen.queryAllByRole('link', { name: 'terraApplication.skipToLink.prefix' });
  expect(renderedLinks.length).toBe(1);
  expect(renderedLinks[0]).toBeInTheDocument();

  renderedLinks[0].focus();
  userEvent.click(renderedLinks[0]);

  expect(dismissTransientPresentations).toHaveBeenCalled();
  expect(mockOnSelectLink).toBeCalledTimes(1);

  dismissTransientPresentations.mockClear();
  mockOnSelectLink.mockClear();

  view.rerender((
    <TestApplicationContainer>
      <div data-testid="test-content" />
      <SkipToLink
        priority="main"
        description="Test Skip To Link"
        onSelect={mockOnSelectLink}
      />
      <SkipToLink
        description="Test Other Link"
        onSelect={mockOnSelectOtherLink}
      />
    </TestApplicationContainer>
  ));

  renderedLinks = screen.queryAllByRole('link', { name: 'terraApplication.skipToLink.prefix' });
  expect(renderedLinks.length).toBe(2);
  expect(renderedLinks[0]).toBeInTheDocument();
  expect(renderedLinks[1]).toBeInTheDocument();

  renderedLinks[0].focus();
  userEvent.click(renderedLinks[0]);
  expect(dismissTransientPresentations).toHaveBeenCalledTimes(1);
  expect(mockOnSelectLink).toBeCalledTimes(1);
  expect(mockOnSelectOtherLink).toBeCalledTimes(0);

  renderedLinks[1].focus();
  userEvent.click(renderedLinks[1]);
  expect(dismissTransientPresentations).toHaveBeenCalledTimes(2);
  expect(mockOnSelectLink).toBeCalledTimes(1);
  expect(mockOnSelectOtherLink).toBeCalledTimes(1);
});
