import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import HiddenTab from '../../../src/workspace/subcomponents/_HiddenTab';

import * as TabUtils from '../../../src/workspace/subcomponents/_TabUtils';

jest.mock('../../../src/workspace/subcomponents/_TabUtils', () => ({
  handleArrows: jest.fn(),
  enableFocusStyles: jest.fn(),
  disableFocusStyles: jest.fn(),
}));

describe('HiddenTab', () => {
  test('should render a hidden tab with provided props and selection handling', () => {
    const mockOnSelect = jest.fn();

    const testMetaData = { data: 'test' };
    const testTabIds = ['tab-1', 'tab-2'];
    const testIndex = 10;

    render((
      <HiddenTab
        id="tab-1"
        associatedPanelId="panel-1"
        index={testIndex}
        label="Tab 1 Label"
        itemKey="tab-1-key"
        metaData={testMetaData}
        tabIds={testTabIds}
        onSelect={mockOnSelect}
        onBlur={jest.fn()}
        onFocus={jest.fn()}
      />
    ));

    const tabElement = screen.getByRole('tab', { name: 'Tab 1 Label', selected: false });
    expect(tabElement).toBeInTheDocument();
    expect(tabElement).toHaveAttribute('aria-controls', 'panel-1');
    expect(tabElement).toHaveAttribute('id', 'tab-1');

    userEvent.click(tabElement);

    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{enter}', { skipClick: true });
    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{space}', { skipClick: true });
    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{arrowright}', { skipClick: true });
    expect(mockOnSelect).not.toHaveBeenCalledWith();
    expect(TabUtils.handleArrows).toHaveBeenCalledWith(expect.anything(), testIndex, testTabIds);
    mockOnSelect.mockClear();
  });

  test('should render a hidden tab as selected', () => {
    const testMetaData = { data: 'test' };
    render((
      <HiddenTab
        id="tab-1"
        associatedPanelId="panel-1"
        index={0}
        label="Tab 1 Label"
        itemKey="tab-1-key"
        metaData={testMetaData}
        tabIds={['tab-1', 'tab-2']}
        onSelect={jest.fn()}
        onBlur={jest.fn()}
        onFocus={jest.fn()}
        isSelected
      />
    ));

    const tabElement = screen.getByRole('tab', { name: 'Tab 1 Label', selected: true });
    expect(tabElement).toBeInTheDocument();
  });
});

