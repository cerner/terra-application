import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  KEY_A,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
  KEY_RETURN,
  KEY_SPACE,
  KEY_ALT,
} from 'keycode-js';

import {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
  itemByDirection,
  itemByChar,
  flattenActionItems,
} from '../../../src/action-menu/_ActionUtils';

import {
  ActionMenuCheckbox,
  ActionMenuDivider,
  ActionMenuGroup,
  ActionMenuItem,
  ActionMenuLink,
  ActionMenuRadio,
} from '../../../src/action-menu';

describe('generateOnKeyDown', () => {
  test('should return callback with handlers for return key handling', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_RETURN },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockActionHandler).toHaveBeenCalledWith('test');
    expect(mockArrowHandler).not.toHaveBeenCalled();
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback with handlers for space key handling', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_SPACE },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).toHaveBeenCalledWith('test');
    expect(mockArrowHandler).not.toHaveBeenCalled();
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that does not execute on arbitrary key presses', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      metaKey: KEY_ALT,
      nativeEvent: { keyCode: KEY_ALT },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockEvent.stopPropagation).not.toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).not.toHaveBeenCalled();
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on left arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_LEFT },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'previous');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on up arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_UP },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'previous');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on right arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_RIGHT },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'next');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on down arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_DOWN },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'next');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on home arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_HOME },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'first');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards on end arrow key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      nativeEvent: { keyCode: KEY_END },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).toHaveBeenCalledWith('test', 'last');
    expect(mockCharHandler).not.toHaveBeenCalled();
  });

  test('should return callback that forwards a char key', () => {
    const mockActionHandler = jest.fn();
    const mockArrowHandler = jest.fn();
    const mockCharHandler = jest.fn();
    const result = generateOnKeyDown('test', mockActionHandler, mockArrowHandler, mockCharHandler);

    expect(result).toBeDefined();

    const mockEvent = {
      key: 'a',
      nativeEvent: { keyCode: KEY_A },
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    result(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(mockActionHandler).not.toHaveBeenCalled();
    expect(mockArrowHandler).not.toHaveBeenCalled();
    expect(mockCharHandler).toHaveBeenCalledWith('test', 'a');
  });
});

describe('enableFocusStyles', () => {
  test('should enable attribute on current target', () => {
    const mockEvent = {
      currentTarget: document.createElement('div'),
    };

    enableFocusStyles(mockEvent);
    expect(mockEvent.currentTarget).toHaveAttribute('data-focus-styles-enabled', 'true');
  });
});

describe('disableFocusStyles', () => {
  test('should disable attribute on current target', () => {
    const mockEvent = {
      currentTarget: document.createElement('div'),
    };

    disableFocusStyles(mockEvent);
    expect(mockEvent.currentTarget).toHaveAttribute('data-focus-styles-enabled', 'false');
  });
});

describe('itemByDirection', () => {
  test('should return the item for next', () => {
    const items = [{ actionKey: 'test-1' }, { actionKey: 'test-2' }, { actionKey: 'test-3' }];
    const direction = 'next';

    expect(itemByDirection('test-1', items, direction).actionKey).toBe('test-2');
    expect(itemByDirection('test-2', items, direction).actionKey).toBe('test-3');
    expect(itemByDirection('test-3', items, direction).actionKey).toBe('test-1');
  });

  test('should return the item for previous', () => {
    const items = [{ actionKey: 'test-1' }, { actionKey: 'test-2' }, { actionKey: 'test-3' }];
    const direction = 'previous';

    expect(itemByDirection('test-1', items, direction).actionKey).toBe('test-3');
    expect(itemByDirection('test-2', items, direction).actionKey).toBe('test-1');
    expect(itemByDirection('test-3', items, direction).actionKey).toBe('test-2');
  });

  test('should return the item for first', () => {
    const items = [{ actionKey: 'test-1' }, { actionKey: 'test-2' }, { actionKey: 'test-3' }];
    const direction = 'first';

    expect(itemByDirection('test-1', items, direction).actionKey).toBe('test-1');
    expect(itemByDirection('test-2', items, direction).actionKey).toBe('test-1');
    expect(itemByDirection('test-3', items, direction).actionKey).toBe('test-1');
  });

  test('should return the item for last', () => {
    const items = [{ actionKey: 'test-1' }, { actionKey: 'test-2' }, { actionKey: 'test-3' }];
    const direction = 'last';

    expect(itemByDirection('test-1', items, direction).actionKey).toBe('test-3');
    expect(itemByDirection('test-2', items, direction).actionKey).toBe('test-3');
    expect(itemByDirection('test-3', items, direction).actionKey).toBe('test-3');
  });
});

describe('itemByChar', () => {
  test('should return the item for single match', () => {
    const items = [{ actionKey: 'test-1', label: 'abc' }, { actionKey: 'test-2', label: 'abcd' }, { actionKey: 'test-3', label: 'bcd' }];
    const char = 'b';

    expect(itemByChar('test-1', items, char).actionKey).toBe('test-3');
    expect(itemByChar('test-2', items, char).actionKey).toBe('test-3');
    expect(itemByChar('test-3', items, char).actionKey).toBe('test-3');
  });

  test('should return the item for multiple match', () => {
    const items = [{ actionKey: 'test-1', label: 'abc' }, { actionKey: 'test-2', label: 'abcd' }, { actionKey: 'test-3', label: 'bcd' }];
    const char = 'a';

    expect(itemByChar('test-1', items, char).actionKey).toBe('test-2');
    expect(itemByChar('test-2', items, char).actionKey).toBe('test-1');
    expect(itemByChar('test-3', items, char).actionKey).toBe('test-1');
  });
});

describe('flattenActionItems', () => {
  test('should return the flattened array with indent', () => {
    const items = [
      <ActionMenuItem actionKey="test-1" label="Test 1" />,
      <ActionMenuGroup><ActionMenuItem actionKey="test-2" label="Test 2" /></ActionMenuGroup>,
      <ActionMenuGroup><ActionMenuGroup><ActionMenuCheckbox actionKey="test-3" label="Test 3" /></ActionMenuGroup></ActionMenuGroup>,
      <ActionMenuDivider actionKey="test-4" label="Test 4" />,
      <ActionMenuLink actionKey="test-5" label="Test 5" />,
      <ActionMenuRadio actionKey="test-6" label="Test 6" />,
    ];

    const result = flattenActionItems(items);
    expect(result.indentChildren).toBe(true);
    expect(result.items[0].actionKey).toBe('test-1');
    expect(result.items[1].actionKey).toBe('test-2');
    expect(result.items[2].actionKey).toBe('test-3');
    expect(result.items[3].actionKey).toBe('test-4');
    expect(result.items[4].actionKey).toBe('test-5');
    expect(result.items[5].actionKey).toBe('test-6');
  });

  test('should return the flattened array without indent', () => {
    const items = [
      <ActionMenuItem actionKey="test-1" label="Test 1" />,
      <ActionMenuGroup><ActionMenuItem actionKey="test-2" label="Test 2" /></ActionMenuGroup>,
      <ActionMenuGroup><ActionMenuGroup><ActionMenuItem actionKey="test-3" label="Test 3" /></ActionMenuGroup></ActionMenuGroup>,
      <ActionMenuDivider actionKey="test-4" label="Test 4" />,
      <ActionMenuLink actionKey="test-5" label="Test 5" />,
    ];

    const result = flattenActionItems(items);
    expect(result.indentChildren).toBe(false);
    expect(result.items[0].actionKey).toBe('test-1');
    expect(result.items[1].actionKey).toBe('test-2');
    expect(result.items[2].actionKey).toBe('test-3');
    expect(result.items[3].actionKey).toBe('test-4');
    expect(result.items[4].actionKey).toBe('test-5');
  });
});
