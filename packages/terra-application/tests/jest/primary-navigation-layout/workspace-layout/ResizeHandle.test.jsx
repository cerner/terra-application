import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ResizeHandle from '../../../../src/primary-navigation-layout/workspace-layout/ResizeHandle';

test('should render with minimal props', () => {
  render((
    <ResizeHandle/>
  ));

  // Expect container element to be rendered
  expect(testView.getByTestId('resize-handle')).toBeInTheDocument();
});

test('should render with functions', () => {
  const testView = render((
    <ResizeHandle
      onResizeStart={jest.fn()}
      onResizeStop={jest.fn()}
      onResizeMove={jest.fn()}
    />
  ));

  // Expect container element to be rendered
  expect(testView.getByTestId('resize-handle')).toBeInTheDocument();
});
