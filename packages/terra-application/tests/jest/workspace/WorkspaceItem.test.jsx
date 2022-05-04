import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { WorkspaceItem, WorkspaceContext } from '../../../src/workspace';
import TabContext from '../../../src/workspace/subcomponents/_TabContext';

// Used to validate TabContext values provided by WorkspaceItem
const TabContextValidator = () => {
  const tabContext = React.useContext(TabContext);
  return (
    <div>
      <div data-testid="id">
        {tabContext.tabId}
      </div>
      <div data-testid="panel-id">
        {tabContext.panelId}
      </div>
      <div data-testid="label">
        {tabContext.label}
      </div>
    </div>
  );
};

// Used to validate WorkspaceContext values provided by WorkspaceItem
const WorkspaceContextValidator = () => {
  const workspaceContext = React.useContext(WorkspaceContext);
  return (
    <div>
      <div data-testid="is-active">
        {workspaceContext.isActive ? 'true' : 'false'}
      </div>
    </div>
  );
};

test('should update TabContext value when props change', () => {
  const containerElement = document.createElement('div');
  const portalElement = document.createElement('div');

  containerElement.appendChild(portalElement);

  const defaultProps = {
    itemKey: 'test-item',
    label: 'Test Item Label',
    metaData: { test: 'data' },
    id: 'test-item-id',
    associatedPanelId: 'test-panel-id',
    isActive: true,
    portalElement,
    render: () => <TabContextValidator />,
  };

  const testView = render((
    <WorkspaceItem
      {...defaultProps}
    />
  ), { baseElement: containerElement });

  expect(testView.getByTestId('id')).toHaveTextContent('test-item-id');
  expect(testView.getByTestId('panel-id')).toHaveTextContent('test-panel-id');
  expect(testView.getByTestId('label')).toHaveTextContent('Test Item Label');

  // Updating id should update memoized context value
  testView.rerender((
    <WorkspaceItem
      {...defaultProps}
      id="different-test-item-id"
    />
  ));

  expect(testView.getByTestId('id')).toHaveTextContent('different-test-item-id');
  expect(testView.getByTestId('panel-id')).toHaveTextContent('test-panel-id');
  expect(testView.getByTestId('label')).toHaveTextContent('Test Item Label');

  // Updating associatedPanelId should update memoized context value
  testView.rerender((
    <WorkspaceItem
      {...defaultProps}
      id="different-test-item-id"
      associatedPanelId="different-test-panel-id"
    />
  ));

  expect(testView.getByTestId('id')).toHaveTextContent('different-test-item-id');
  expect(testView.getByTestId('panel-id')).toHaveTextContent('different-test-panel-id');
  expect(testView.getByTestId('label')).toHaveTextContent('Test Item Label');

  // Updating label should update memoized context value
  testView.rerender((
    <WorkspaceItem
      {...defaultProps}
      id="different-test-item-id"
      associatedPanelId="different-test-panel-id"
      label="Different Test Item Label"
    />
  ));

  expect(testView.getByTestId('id')).toHaveTextContent('different-test-item-id');
  expect(testView.getByTestId('panel-id')).toHaveTextContent('different-test-panel-id');
  expect(testView.getByTestId('label')).toHaveTextContent('Different Test Item Label');
});

test('should update WorkspaceContext value when props change', () => {
  const containerElement = document.createElement('div');
  const portalElement = document.createElement('div');

  containerElement.appendChild(portalElement);

  const defaultProps = {
    itemKey: 'test-item',
    label: 'Test Item Label',
    metaData: { test: 'data' },
    id: 'test-item-id',
    associatedPanelId: 'test-panel-id',
    isActive: false,
    portalElement,
    render: () => <WorkspaceContextValidator />,
  };

  const testView = render((
    <WorkspaceItem
      {...defaultProps}
    />
  ), { baseElement: containerElement });

  expect(testView.getByTestId('is-active')).toHaveTextContent('false');

  // Updating isActive should update memoized context value
  testView.rerender((
    <WorkspaceItem
      {...defaultProps}
      isActive
    />
  ));

  expect(testView.getByTestId('is-active')).toHaveTextContent('true');
});
