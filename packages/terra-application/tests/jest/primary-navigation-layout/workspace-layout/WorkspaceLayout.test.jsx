import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MockApplication from '../../MockApplication';
import WorkspaceLayout from '../../../../src/primary-navigation-layout/workspace-layout/WorkspaceLayout';
import SkipToLinksContext from '../../../../src/application-container/private/skip-to-links/SkipToLinksContext';
import Workspace, { WorkspaceItem, WorkspaceContent } from '../../../../src/workspace';

const Item1 = () => (
  <WorkspaceContent>
    <div data-testid="mock-workspace-item" />
  </WorkspaceContent>
);

const TestWorkspace = ({
  isOpen, // eslint-disable-line react/prop-types
  onRequestClose, // eslint-disable-line react/prop-types
  sizeScalar, // eslint-disable-line react/prop-types
  ...customProps
}) => (
  <Workspace
    {...customProps}
    activeItemKey="item-1"
    onRequestActivate={() => {}}
  >
    <WorkspaceItem
      itemKey="item-1"
      label="item 1"
      metaData={{ key: 'item-1' }}
      render={() => <Item1 />}
    />
  </Workspace>
);

const TestContent = () => <p data-testid="mock-content">test content</p>;

const mockContext = {
  registerLink: jest.fn(), unregisterLink: jest.fn(),
};

test('should render with minimal props', () => {
  render((
    <SkipToLinksContext.Provider value={mockContext}>
      <MockApplication>
        <WorkspaceLayout
          id="test-id"
        />
      </MockApplication>
    </SkipToLinksContext.Provider>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
});

test('should render with workspace', () => {
  const testView = render((
    <SkipToLinksContext.Provider value={mockContext}>
      <MockApplication>
        <WorkspaceLayout
          id="test-id"
          workspace={<TestWorkspace />}
        />
      </MockApplication>
    </SkipToLinksContext.Provider>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(document.getElementById('test-id-workspace-container')).toBeInTheDocument();
  expect(testView.getByTestId('mock-workspace-item')).toBeInTheDocument();
});

test('should render with children', () => {
  const testView = render((
    <SkipToLinksContext.Provider value={mockContext}>
      <MockApplication>
        <WorkspaceLayout
          id="test-id"
        >
          <TestContent />
        </WorkspaceLayout>
      </MockApplication>
    </SkipToLinksContext.Provider>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
});

test('should render with workspace and children', () => {
  const testView = render((
    <SkipToLinksContext.Provider value={mockContext}>
      <MockApplication>
        <WorkspaceLayout
          id="test-id"
          workspace={<TestWorkspace />}
        >
          <TestContent />
        </WorkspaceLayout>
      </MockApplication>
    </SkipToLinksContext.Provider>
  ));

  // Expect container element to be rendered
  expect(document.getElementById('test-id')).toBeInTheDocument();
  expect(document.getElementById('test-id-workspace-container')).toBeInTheDocument();
  expect(testView.getByTestId('mock-workspace-item')).toBeInTheDocument();
  expect(testView.getByTestId('mock-content')).toBeInTheDocument();
});
