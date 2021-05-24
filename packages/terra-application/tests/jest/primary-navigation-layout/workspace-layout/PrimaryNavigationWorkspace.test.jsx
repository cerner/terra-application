import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PrimaryNavigationWorkspace from '../../../../src/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspace';

const testContent = <p data-testid="mock-content">test content</p>;

test('should render with minimal props', () => {
  render(<PrimaryNavigationWorkspace />);

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
});

test('should render with full props', () => {
  const mockSize = jest.fn();
  const mockPresentation = jest.fn();
  const mockActive = jest.fn();

  const testView = render((
    <PrimaryNavigationWorkspace
      onSizeChange={mockSize}
      onPresentationStateChange={mockPresentation}
      onActiveItemChange={mockActive}
      initialActiveItemKey="test-key"
      initialIsOpen
      initialSize="small"
      id="test-d"
      isOpen
      onRequestClose={jest.fn()}
      isPresentedAsOverlay
      sizeScalar={0.5}
      activeSize="small"
      sizeOptions={[]}
      onRequestSizeChange={jest.fn()}
    >
      {testContent}
    </PrimaryNavigationWorkspace>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
  expect(mockSize).not.toHaveBeenCalled();
  expect(mockPresentation).not.toHaveBeenCalled();
  expect(mockActive).not.toHaveBeenCalled();

  testView.rerender((
    <PrimaryNavigationWorkspace
      onSizeChange={mockSize}
      onPresentationStateChange={mockPresentation}
      onActiveItemChange={mockActive}
      initialActiveItemKey="test-key"
      initialIsOpen
      initialSize="small"
      id="test-d"
      onRequestClose={jest.fn()}
      isPresentedAsOverlay
      sizeScalar={1.0}
      activeSize="medium"
      sizeOptions={[]}
      onRequestSizeChange={jest.fn()}
    >
      {testContent}
    </PrimaryNavigationWorkspace>
  ));

  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
  expect(mockSize).toHaveBeenCalled();
  expect(mockPresentation).toHaveBeenCalled();
  expect(mockActive).toHaveBeenCalled();
});
