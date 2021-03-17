import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainer from '../../../src/application-container';
import WindowManager from '../../../src/utils/window-manager';
import MockApplication from '../MockApplication';

// Mock WindowManager to track registrations/unregistrations of prompt signals.
const mockUnregisterUnloadPromptSignal = jest.fn();
jest.mock('../../../src/utils/window-manager', () => ({
  registerUnloadPromptSignal: jest.fn().mockImplementation(() => mockUnregisterUnloadPromptSignal),
}));

// Mock logger to limit test output pollution
jest.mock('../../../src/utils/logger', () => ({
  error: jest.fn(),
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
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw new Error('Test Error');
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
});

