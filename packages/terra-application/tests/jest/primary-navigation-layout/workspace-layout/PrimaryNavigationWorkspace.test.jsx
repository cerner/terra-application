import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PrimaryNavigationWorkspace from '../../../../src/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspace';

const testContent = <p data-testid="mock-content">test content</p>;

test('should render with minimal props', () => {
  render((
    <PrimaryNavigationWorkspace/>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
});

test('should render with full props', () => {
  const testView = render((
    <PrimaryNavigationWorkspace
      onSizeChange={jest.fn()}
      onPresentationStateChange={jest.fn()}
      onActiveItemChange={jest.fn()}
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
});
