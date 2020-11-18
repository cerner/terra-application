import React from 'react';
import { KEY_RIGHT, KEY_LEFT, KEY_HOME } from "keycode-js";

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
const enableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

const isValidChar = str => {
  return str.length === 1 && str.match(/\S/);
};

/**
 * Returns a function that will execute the provided function upon detection of a KEY_RETURN or KEY_SPACE keydown event.
 * @param {string} key The uniquely identifiable key.
 * @param {Function} onAction The function to be executed after event detection.
 * @param {Function} onArrow The function to be executed after event detection.
 */
const generateOnKeyDown = (key, onAction, onArrow, onChar)  => (
  event => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      onAction(key);
    } else if (event.nativeEvent.keyCode === KEY_UP || event.nativeEvent.keyCode === KEY_LEFT) {
      event.preventDefault();
      onArrow(key, 'previous');
    } else if (event.nativeEvent.keyCode === KEY_DOWN || event.nativeEvent.keyCode === KEY_RIGHT) {
      event.preventDefault();
      onArrow(key, 'next');
    } else if (event.nativeEvent.keyCode === KEY_HOME) {
      event.preventDefault();
      onArrow(key, 'first');
    } else if (event.nativeEvent.keyCode === KEY_END) {
      event.preventDefault();
      onArrow(key, 'last');
    } else {
      const char = event.key;
      if (isValidChar(char)) {
        onChar(char);
      }
    }
  }
);


const itemsByChar = (char, items) => {
  return items.filter(item => item.label.charAt(0).toLowerCase === char.toLowerCase());
};

const indexByKey = (key, items) => {
  return items.findIndex(item => item.actionKey === key);
}

const itemFromArrowKey = (key, items, direction) => {
  const currentIndex = indexByKey(key, items);
  const maxIndex = items.length - 1;

  let newIndex;
  if (direction === 'first') {
    newIndex = 0;
  } else if (direction === 'last') {
    newIndex = maxIndex;
  } else if (direction === 'next') {
    if (currentIndex === maxIndex) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
  } else if (direction === 'previous') {
    if (currentIndex === 0) {
      newIndex = maxIndex;
    } else {
      newIndex = currentIndex - 1;
    }
  }

  return items[newIndex];
};

const itemFromChar = (key, items, char) => {
  const charMatches = itemsByChar(char, items);
  const matchCount = charItems.length;
  if (!matchCount) {
    return;
  }

  let newIndex = 0;
  const currentIndex = indexByKey(key, charMatches);
  if (matchCount > 1 && currentIndex >= 0 && currentIndex < matchCount - 1) {
    newIndex = currentIndex + 1;
  }

  return charItems[newIndex];
};

const flattenActionItems = children => {
  const actionItems = [];
  React.Children.forEach(children, child => {
    if (child.props.actionKey) {
      if (!child.props.isDisabled) {
        actionItems.push({
          actionKey: child.props.actionKey,
          label: child.props.label,
        });
      }
    } else if (child.props.children)  {
      newKeys.push(...flattenActionItems(child.props.children));
    }
  });
  return actionItems;
}

export default {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
  itemFromArrowKey,
  itemFromChar,
  flattenActionItems,
};

export {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
  itemFromArrowKey,
  itemFromChar,
  flattenActionItems,
};
