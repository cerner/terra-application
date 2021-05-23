import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import MockApplication from '../../MockApplication';
import WorkspaceLayout from '../../../../src/primary-navigation-layout/workspace-layout/WorkspaceLayout';
import SkipToLinksContext from '../../../../src/application-container/private/skip-to-links/SkipToLinksContext';
import Workspace, { WorkspaceItem, WorkspaceContent } from '../../../../src/workspace';

const Item1 = ({}) => {
  return (
    <WorkspaceContent>
      <div data-testid="mock-workspace-item" />
    </WorkspaceContent>
  );
};

const testWorkspace = (
  <Workspace
    id="test-workspace"
    activeItemKey="1"
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

const testContent = <p data-testid="mock-content">test content</p>;

const mockContext = {
  registerLink: jest.fn(), unregisterLink: jest.fn(),
};

test('should render with minimal props', () => {
  const testView = render((
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
          workspace={testWorkspace}
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
          {testContent}
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
          workspace={testWorkspace}
        >
          {testContent}
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
