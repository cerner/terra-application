import React from 'react';
import { renderHook } from '@testing-library/react-hooks/dom';
import '@testing-library/jest-dom/extend-expect';
import 'resize-observer-polyfill';

import { activeBreakpointForSize } from '../../../../src/breakpoints';
import useElementSize, { breakpointFilter } from '../../../../src/utils/hooks/useElementSize';

// The resize observer is mocked here, with a external reference
// populated in order to trigger size updates externally.
let mockResizeObserverInstance;
jest.mock('resize-observer-polyfill', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((changeHandler) => {
    mockResizeObserverInstance = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      testHandler: changeHandler,
    };
    return mockResizeObserverInstance;
  }),
}));

// Breakpoint retrieval is mocked to limit test exposure.
jest.mock('../../../../src/breakpoints', () => ({
  __esModule: true,
  default: jest.fn(),
  activeBreakpointForSize: jest.fn().mockImplementation(() => 'test-breakpoint'),
}));

const getBoundingClientRectDefault = Element.prototype.getBoundingClientRect;

describe('useElementSize', () => {
  afterAll(() => {
    Element.prototype.getBoundingClientRect = getBoundingClientRectDefault;
  });

  test('should configure a resize observer and reports changes for the given element with no filter', async () => {
    const initialRect = {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    const updateRect = {
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    // getBoundingClientRect is mocked to return the initial size for the test
    Element.prototype.getBoundingClientRect = jest.fn(() => initialRect);

    const testElement = document.createElement('div');
    const testElementRef = React.createRef();
    testElementRef.current = testElement;

    // The test element must be added to the body so that we pass the presence check on update
    // for portaled content.
    document.body.appendChild(testElement);

    const { result, waitForNextUpdate, unmount } = renderHook(() => useElementSize(testElementRef));

    // The initial sizes will be returned on first execution
    expect(result.current).toEqual({ width: 100, height: 100, activeBreakpoint: 'test-breakpoint' });
    expect(activeBreakpointForSize).toHaveBeenCalledWith(100);
    expect(mockResizeObserverInstance.observe).toHaveBeenCalledWith(testElement);

    // Update the mock to return the second set of data
    Element.prototype.getBoundingClientRect = jest.fn(() => updateRect);

    // Executing the resize observer handler will trigger an update, which we must wait for
    mockResizeObserverInstance.testHandler([{ target: testElement }]);
    await waitForNextUpdate({ timeout: 100 });

    expect(result.current).toEqual({ width: 200, height: 200, activeBreakpoint: 'test-breakpoint' });
    expect(activeBreakpointForSize).toHaveBeenCalledWith(200);

    unmount();

    expect(mockResizeObserverInstance.disconnect).toHaveBeenCalledWith(testElement);

    document.body.removeChild(testElement);
  });

  test('should configure a resize observer and reports changes for the given element with a given filter', async () => {
    const initialRect = {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    const updateRect = {
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    // getBoundingClientRect is mocked to return the initial size for the test
    Element.prototype.getBoundingClientRect = jest.fn(() => initialRect);

    const testElement = document.createElement('div');
    const testElementRef = React.createRef();
    testElementRef.current = testElement;

    // The test element must be added to the body so that we pass the presence check on update
    // for portaled content.
    document.body.appendChild(testElement);

    const { result, waitForNextUpdate, unmount } = renderHook(() => useElementSize(testElementRef, (newRect, oldRect) => newRect.width !== oldRect.width));

    // The initial sizes will be returned on first execution
    expect(result.current).toEqual({ width: 100, height: 100, activeBreakpoint: 'test-breakpoint' });
    expect(activeBreakpointForSize).toHaveBeenCalledWith(100);
    expect(mockResizeObserverInstance.observe).toHaveBeenCalledWith(testElement);

    // Update the mock to return the second set of data
    Element.prototype.getBoundingClientRect = jest.fn(() => updateRect);

    // Executing the resize observer handler will trigger an update, which we must wait for
    mockResizeObserverInstance.testHandler([{ target: testElement }]);
    await waitForNextUpdate();

    expect(result.current).toEqual({ width: 200, height: 200, activeBreakpoint: 'test-breakpoint' });
    expect(activeBreakpointForSize).toHaveBeenCalledWith(200);

    // Executing the resize observer again with the same data, which should not trigger an update
    // due to the filter.
    mockResizeObserverInstance.testHandler([{ target: testElement }]);
    await expect(waitForNextUpdate({ timeout: 100 })).rejects.toThrow();

    unmount();

    expect(mockResizeObserverInstance.disconnect).toHaveBeenCalledWith(testElement);

    document.body.removeChild(testElement);
  });

  test('should not trigger update if element is not in the DOM', async () => {
    const initialRect = {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    const updateRect = {
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    // getBoundingClientRect is mocked to return the initial size for the test
    Element.prototype.getBoundingClientRect = jest.fn(() => initialRect);

    const testElement = document.createElement('div');
    const testElementRef = React.createRef();
    testElementRef.current = testElement;
    document.body.appendChild(testElement);

    const { result, waitForNextUpdate, unmount } = renderHook(() => useElementSize(testElementRef, (newRect, oldRect) => newRect.width !== oldRect.width));

    // The initial sizes will be returned on first execution
    expect(result.current).toEqual({ width: 100, height: 100, activeBreakpoint: 'test-breakpoint' });
    expect(activeBreakpointForSize).toHaveBeenCalledWith(100);
    expect(mockResizeObserverInstance.observe).toHaveBeenCalledWith(testElement);

    // The element is removed prior to triggering the resize handler to simulate a portaled element.
    document.body.removeChild(testElement);

    // Update the mock to return the second set of data
    Element.prototype.getBoundingClientRect = jest.fn(() => updateRect);

    // Executing the resize observer handler should not trigger an update due to the element
    // no longer being present in the DOM.
    mockResizeObserverInstance.testHandler([{ target: testElement }]);
    await expect(waitForNextUpdate({ timeout: 100 })).rejects.toThrow();

    unmount();

    expect(mockResizeObserverInstance.disconnect).toHaveBeenCalledWith(testElement);
  });
});

describe('breakpointFilter', () => {
  test('should return true if the breakpoints do not match', () => {
    expect(breakpointFilter({ activeBreakpoint: 'small' }, { activeBreakpoint: 'large' })).toBe(true);
  });

  test('should return false if the breakpoints do not match', () => {
    expect(breakpointFilter({ activeBreakpoint: 'small' }, { activeBreakpoint: 'small' })).toBe(false);
  });
});
