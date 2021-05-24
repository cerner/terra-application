import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PrimaryNavigationWorkspace from '../../../../src/primary-navigation-layout/workspace-layout/PrimaryNavigationWorkspace';
import MockApplication from '../../MockApplication';

const testContent = <p data-testid="mock-content">test content</p>;

const MockContent = () => <div />;

test('should render with minimal props', () => {
  render((
    <MockApplication>
      <PrimaryNavigationWorkspace
        id="test-id"
        initialActiveItemKey="test key"
      >
        <MockContent
          itemKey="test key"
          label="test label"
          metaData={{ test: 'value' }}
          render={() => testContent}
        />
      </PrimaryNavigationWorkspace>
    </MockApplication>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
});

test('should render with full props', () => {
  const mockSize = jest.fn();
  const mockPresentation = jest.fn();
  const mockActive = jest.fn();

  const testView = render((
    <MockApplication>
      <PrimaryNavigationWorkspace
        onSizeChange={mockSize}
        onPresentationStateChange={mockPresentation}
        onActiveItemChange={mockActive}
        initialActiveItemKey="test key"
        initialIsOpen
        initialSize="small"
        id="test-id"
        isOpen
        onRequestClose={jest.fn()}
        isPresentedAsOverlay
        sizeScalar={0.5}
        activeSize="small"
        sizeOptions={[]}
        onRequestSizeChange={jest.fn()}
      >
        <MockContent
          itemKey="test key"
          label="test label"
          metaData={{ test: 'value' }}
          render={() => testContent}
        />
      </PrimaryNavigationWorkspace>
    </MockApplication>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
  expect(mockSize).toHaveBeenCalledTimes(1);
  expect(mockPresentation).toHaveBeenCalledTimes(1);
  expect(mockActive).toHaveBeenCalledTimes(1);

  testView.rerender((
    <MockApplication>
      <PrimaryNavigationWorkspace
        onSizeChange={mockSize}
        onPresentationStateChange={mockPresentation}
        onActiveItemChange={mockActive}
        initialActiveItemKey="test key"
        initialIsOpen
        initialSize="small"
        id="test-id"
        onRequestClose={jest.fn()}
        isPresentedAsOverlay
        sizeScalar={1.0}
        activeSize="small"
        sizeOptions={[]}
        onRequestSizeChange={jest.fn()}
      >
        <MockContent
          itemKey="test key"
          label="test label"
          metaData={{ test: 'value' }}
          render={() => testContent}
        />
      </PrimaryNavigationWorkspace>
    </MockApplication>
  ));

  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
  expect(mockSize).toHaveBeenCalledTimes(2);
  expect(mockPresentation).toHaveBeenCalledTimes(2);
  expect(mockActive).toHaveBeenCalledTimes(1);

  testView.rerender((
    <MockApplication>
      <PrimaryNavigationWorkspace
        onSizeChange={mockSize}
        onPresentationStateChange={mockPresentation}
        onActiveItemChange={mockActive}
        initialActiveItemKey="test key"
        initialIsOpen
        initialSize="small"
        id="test-id"
        onRequestClose={jest.fn()}
        isPresentedAsOverlay
        sizeScalar={1.0}
        activeSize="small"
        sizeOptions={[]}
        onRequestSizeChange={jest.fn()}
      >
        <MockContent
          itemKey="test key"
          label="test label"
          metaData={{ test: 'value' }}
          render={() => testContent}
        />
      </PrimaryNavigationWorkspace>
    </MockApplication>
  ));

  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
  expect(mockSize).toHaveBeenCalledTimes(2);
  expect(mockPresentation).toHaveBeenCalledTimes(2);
  expect(mockActive).toHaveBeenCalledTimes(1);
});
