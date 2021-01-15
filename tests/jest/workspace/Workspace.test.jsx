import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Workspace, { WorkspaceItem } from '../../../src/workspace';

import MockApplication from '../MockApplication';

const testMetaData1 = { data: 1 };
const testMetaData2 = { data: 1 };

const TestWorkspace = (props) => (
  <MockApplication>
    <Workspace
      id="test-workspace"
      aria-label="Test Workspace"
      activeItemKey="1"
      onRequestActivate={() => {}}
      {...props}
    >
      <WorkspaceItem
        itemKey="1"
        label="Tab 1"
        metaData={testMetaData1}
        render={() => <div aria-label="item-1-content">Item 1</div>}
      />
      <WorkspaceItem
        itemKey="2"
        label="Tab 2"
        metaData={testMetaData2}
        render={() => <div aria-label="item-2-content">Item 2</div>}
      />
    </Workspace>
  </MockApplication>
);

test('renders WorkspaceItems based upon the activeItemKey prop', () => {
  const view = render(<TestWorkspace />);

  expect(screen.queryByLabelText('item-1-content')).toBeDefined();
  expect(screen.queryByLabelText('item-2-content')).toBe(null);

  view.rerender(<TestWorkspace activeItemKey="2" />);

  expect(screen.queryByLabelText('item-1-content')).toBe(null);
  expect(screen.queryByLabelText('item-2-content')).toBeDefined();
});

test('communicates tab selections through the onRequestActivate prop', () => {
  const mockOnRequestActivate = jest.fn();

  render(<TestWorkspace onRequestActivate={mockOnRequestActivate} />);

  userEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

  expect(mockOnRequestActivate).toHaveBeenCalledWith('2', testMetaData2);

  mockOnRequestActivate.mockReset();
});

test('presents utility menu with size options and utilizes onRequestSizeChange prop for callbacks', () => {
  const mockOnRequestSizeChange = jest.fn();

  render((
    <TestWorkspace
      activeSize="small"
      sizeOptions={[{ key: 'small', text: 'Small' }, { key: 'large', text: 'Large' }, { key: 'huge', text: 'Huge', isDisabled: true }]}
      onRequestSizeChange={mockOnRequestSizeChange}
    />
  ));

  const menuButton = screen.getByLabelText('Workspace Size Menu', { selector: 'div' });

  userEvent.click(menuButton);

  expect(screen.queryByLabelText('Workspace Settings')).toBeDefined();

  const smallMenuItem = screen.getByRole('menuitemradio', { checked: true, name: 'Small', disabled: false });
  const largeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Large', disabled: false });
  const hugeMenuItem = screen.getByRole('menuitemradio', { checked: false, name: 'Huge', disabled: true });

  expect(smallMenuItem).toBeDefined();
  expect(largeMenuItem).toBeDefined();
  expect(hugeMenuItem).toBeDefined();

  userEvent.click(largeMenuItem);

  expect(screen.queryByLabelText('Workspace Settings')).toBe(null);

  expect(mockOnRequestSizeChange).toHaveBeenCalledWith('large');
});
