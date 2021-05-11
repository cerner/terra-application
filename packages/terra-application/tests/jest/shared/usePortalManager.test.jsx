import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';

import usePortalManager, { getPortalElement } from '../../../src/shared/usePortalManager';

test('should update element presence based upon activePortalKey', () => {
  const mockOnPortalActivated = jest.fn();
  const mockOnPortalDeactivated = jest.fn();

  // Initial render, allowing us to set up the hook refs appropriately
  const { result, rerender } = renderHook(({ activePortalKey, onPortalActivated, onPortalDeactivated }) => usePortalManager(activePortalKey, onPortalActivated, onPortalDeactivated), {
    initialProps: {
      activePortalKey: undefined,
      onPortalActivated: mockOnPortalActivated,
      onPortalDeactivated: mockOnPortalDeactivated,
    },
  });

  const containerRef = result.current[0];
  const portalsRef = result.current[1];

  // Container for portal elements
  const containerElement = document.createElement('div');
  containerRef.current = containerElement;

  // Portal elements added to portalRefs object for hook processing

  // portal-1 element contains element to test scroll persistence
  const portal1Element = document.createElement('div');
  const portal1ScrollElement = document.createElement('div');
  portal1ScrollElement.setAttribute('data-application-overflow-container', '');
  portal1Element.appendChild(portal1ScrollElement);

  const portal2Element = document.createElement('div');

  portalsRef.current = {
    'portal-1': {
      element: portal1Element,
    },
    'portal-2': {
      element: portal2Element,
    },
  };

  // Render again with portal-1 active
  rerender({
    activePortalKey: 'portal-1',
    onPortalActivated: mockOnPortalActivated,
    onPortalDeactivated: mockOnPortalDeactivated,
  });

  expect(containerRef.current).toContainElement(portal1Element);
  expect(containerRef.current).not.toContainElement(portal2Element);
  expect(mockOnPortalActivated).toHaveBeenCalledWith('portal-1', portal1Element);
  expect(mockOnPortalDeactivated).not.toHaveBeenCalled();

  mockOnPortalActivated.mockClear();
  mockOnPortalDeactivated.mockClear();

  // Render again, now with portal-2 active
  rerender({
    activePortalKey: 'portal-2',
    onPortalActivated: mockOnPortalActivated,
    onPortalDeactivated: mockOnPortalDeactivated,
  });

  expect(containerRef.current).toContainElement(portal2Element);
  expect(containerRef.current).not.toContainElement(portal1Element);
  expect(mockOnPortalActivated).toHaveBeenCalledWith('portal-2', portal2Element);
  expect(mockOnPortalDeactivated).toHaveBeenCalledWith('portal-1', portal1Element);

  mockOnPortalActivated.mockClear();
  mockOnPortalDeactivated.mockClear();

  // Render with portal-1 active again, to ensure scroll position is replayed
  rerender({
    activePortalKey: 'portal-1',
    onPortalActivated: mockOnPortalActivated,
    onPortalDeactivated: mockOnPortalDeactivated,
  });

  expect(containerRef.current).toContainElement(portal1Element);
  expect(containerRef.current).not.toContainElement(portal2Element);
  expect(mockOnPortalActivated).toHaveBeenCalledWith('portal-1', portal1Element);
  expect(mockOnPortalDeactivated).toHaveBeenCalledWith('portal-2', portal2Element);

  mockOnPortalActivated.mockClear();
  mockOnPortalDeactivated.mockClear();

  // Render again with different handler reference to ensure DOM is not mutated for same item
  const newOnPortalActivated = jest.fn();
  rerender({
    activePortalKey: 'portal-1',
    onPortalActivated: newOnPortalActivated,
    onPortalDeactivated: mockOnPortalDeactivated,
  });

  expect(containerRef.current).toContainElement(portal1Element);
  expect(containerRef.current).not.toContainElement(portal2Element);
  expect(mockOnPortalActivated).not.toHaveBeenCalled();
  expect(newOnPortalActivated).not.toHaveBeenCalled();
  expect(mockOnPortalDeactivated).not.toHaveBeenCalled();

  // Render again with portal-2 and no callbacks to ensure missing callbacks do not blow up
  rerender({
    activePortalKey: 'portal-2',
    onPortalActivated: undefined,
    onPortalDeactivated: undefined,
  });

  expect(containerRef.current).not.toContainElement(portal1Element);
  expect(containerRef.current).toContainElement(portal2Element);
  expect(mockOnPortalActivated).not.toHaveBeenCalled();
  expect(mockOnPortalDeactivated).not.toHaveBeenCalled();

  // Render again with unknown key to validate all portals are removed
  rerender({
    activePortalKey: 'portal-77',
    onPortalActivated: undefined,
    onPortalDeactivated: undefined,
  });

  expect(containerRef.current).not.toContainElement(portal1Element);
  expect(containerRef.current).not.toContainElement(portal2Element);
});

test('getPortalElement returns an appropriately styled container element', () => {
  const testElement = getPortalElement();

  expect(testElement.style.position).toBe('relative');
  expect(testElement.style.height).toBe('100%');
  expect(testElement.style.width).toBe('100%');
});
