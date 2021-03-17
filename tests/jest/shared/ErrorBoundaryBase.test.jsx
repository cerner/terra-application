import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ErrorBoundaryBase from '../../../src/shared/ErrorBoundaryBase';

test('should render children when they do not throw errors during render', () => {
  render((
    <ErrorBoundaryBase onCatchError={() => {}}>
      <div data-testid="test-content" />
    </ErrorBoundaryBase>
  ));

  expect(screen.getByTestId('test-content')).toBeInTheDocument();
});

test('should catch child errors and execute callback', () => {
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw new Error('Test Error');
    });

    return <div data-testid="error-child" />;
  };

  let caughtError;
  render((
    <ErrorBoundaryBase onCatchError={(error) => { caughtError = error; }}>
      <ErrorChild />
    </ErrorBoundaryBase>
  ));

  expect(screen.queryByTestId('error-child')).toBeNull();
  expect(caughtError.message).toBe('Test Error');
});

test('should throw child errors if callback is not provided', () => {
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw new Error('Test Error');
    });

    return <div data-testid="error-child" />;
  };

  const renderTest = () => render((
    <ErrorBoundaryBase>
      <ErrorChild />
    </ErrorBoundaryBase>
  ));

  expect(renderTest).toThrowError('Test Error');
});

