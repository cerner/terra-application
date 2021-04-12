import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ErrorBoundaryBase from '../../../src/shared/ErrorBoundaryBase';
import Logger from '../../../src/utils/logger';

test('should render children when they do not throw errors during render', () => {
  render((
    <ErrorBoundaryBase onCatchError={() => {}}>
      <div data-testid="test-content" />
    </ErrorBoundaryBase>
  ));

  expect(screen.getByTestId('test-content')).toBeInTheDocument();
});

test('should catch child errors and execute callback', () => {
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(() => {});
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const err = new Error('Test Error');
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw err;
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
  expect(loggerSpy).toBeCalledWith(err);
  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

test('should throw child errors if callback is not provided', () => {
  const loggerSpy = jest.spyOn(Logger, 'error').mockImplementation(() => {});
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const err = new Error('Test Error');
  const ErrorChild = () => {
    React.useLayoutEffect(() => {
      throw err;
    });

    return <div data-testid="error-child" />;
  };

  const renderTest = () => render((
    <ErrorBoundaryBase>
      <ErrorChild />
    </ErrorBoundaryBase>
  ));

  expect(renderTest).toThrowError('Test Error');
  expect(loggerSpy).toBeCalledWith(err);
  loggerSpy.mockRestore();
  consoleSpy.mockRestore();
});

