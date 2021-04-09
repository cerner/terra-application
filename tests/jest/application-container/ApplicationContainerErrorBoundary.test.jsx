import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainerErrorBoundary from '../../../src/application-container/private/ApplicationContainerErrorBoundary';
import MockApplication from '../MockApplication';
import Logger from '../../../src/utils/logger';

const TestApplicationContainerErrorBoundary = (props) => (
  <MockApplication>
    <ApplicationContainerErrorBoundary
      {...props}
    />
  </MockApplication>
);

test('should render TestApplicationContainerErrorBoundary with provided content', () => {
  render((
    <TestApplicationContainerErrorBoundary>
      <div data-testid="test-content" />
    </TestApplicationContainerErrorBoundary>
  ));

  // Expect children without errors to be rendered
  expect(screen.queryByTestId('test-content')).toBeInTheDocument();
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
    <TestApplicationContainerErrorBoundary>
      <ErrorChild />
    </TestApplicationContainerErrorBoundary>
  ));

  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByText('terraApplication.errorBoundary.defaultErrorMessage')).toBeInTheDocument();
  expect(loggerSpy).toBeCalledWith(error);
  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

