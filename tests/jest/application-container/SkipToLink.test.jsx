import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import uuidv4 from 'uuid/v4';

import SkipToLink from '../../../src/application-container/private/skip-to-links/SkipToLink';
import SkipToLinksContext from '../../../src/application-container/private/skip-to-links/SkipToLinksContext';
import NavigationItemContext from '../../../src/navigation-item/NavigationItemContext';
import MockApplication from '../MockApplication';

jest.mock('uuid/v4');

const TestSkipToLink = (props) => (
  <MockApplication>
    <SkipToLink
      {...props}
    />
  </MockApplication>
);

test('should throw exception when rendered without context provider', () => {
  // eslint-disable-next-line no-console
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  expect(() => {
    render((
      <TestSkipToLink description="Test Description" onSelect={() => {}} />
    ));
  }).toThrowError();
  consoleSpy.mockRestore();
});

test('should register props through context', async () => {
  uuidv4.mockReturnValue('test-id');

  const mockContext = {
    registerLink: jest.fn(), unregisterLink: jest.fn(),
  };
  const mockOnSelect = jest.fn();

  const view = render((
    <NavigationItemContext.Provider value={{ isActive: true }}>
      <SkipToLinksContext.Provider value={mockContext}>
        <TestSkipToLink description="Test Description" priority="main" onSelect={mockOnSelect} />
      </SkipToLinksContext.Provider>
    </NavigationItemContext.Provider>
  ));

  expect(mockContext.registerLink).toHaveBeenCalledWith('test-id', 'Test Description', 'main', mockOnSelect);
  expect(mockContext.unregisterLink).not.toHaveBeenCalled();

  view.rerender((
    <NavigationItemContext.Provider value={{ isActive: true }}>
      <SkipToLinksContext.Provider value={mockContext}>
        <TestSkipToLink description="Test Description 2" onSelect={mockOnSelect} />
      </SkipToLinksContext.Provider>
    </NavigationItemContext.Provider>
  ));

  expect(mockContext.registerLink).toHaveBeenCalledWith('test-id', 'Test Description 2', 'other', mockOnSelect);
  expect(mockContext.unregisterLink).not.toHaveBeenCalled();

  // Ensure unregistration occurs when no longer in active navigation tree
  mockContext.registerLink.mockClear();
  view.rerender((
    <NavigationItemContext.Provider value={{ isActive: false }}>
      <SkipToLinksContext.Provider value={mockContext}>
        <TestSkipToLink description="Test Description 2" onSelect={mockOnSelect} />
      </SkipToLinksContext.Provider>
    </NavigationItemContext.Provider>
  ));

  expect(mockContext.registerLink).not.toHaveBeenCalled();
  expect(mockContext.unregisterLink).toHaveBeenCalledWith('test-id');

  // Ensure unregistration occurs when unmounted
  mockContext.registerLink.mockClear();
  mockContext.unregisterLink.mockClear();

  view.unmount();

  await waitFor(() => expect(mockContext.registerLink).not.toHaveBeenCalled());
  await waitFor(() => expect(mockContext.unregisterLink).toHaveBeenCalledWith('test-id'));
});
