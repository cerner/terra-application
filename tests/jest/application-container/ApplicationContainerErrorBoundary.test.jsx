import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ApplicationContainerErrorBoundary from '../../../src/application-container/private/ApplicationContainerErrorBoundary';
import MockApplication from '../MockApplication';

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
  /* eslint-disable no-console */
  // Mock console.error to limit test output pollution
  const errorImpl = console.error;
  console.error = jest.fn();

  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw new Error('Test Error');
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

  console.error = errorImpl;
  /* eslint-enable no-console */
});

