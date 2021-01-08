import {
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  KEY_DOWN,
  KEY_HOME,
  KEY_END,
} from 'keycode-js';

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

const nextFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
    return;
  }

  const newIndex = index + 1 >= ids.length ? 0 : index + 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

const previousFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index < 0) {
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
    return;
  }

  const newIndex = index - 1 < 0 ? ids.length - 1 : index - 1;
  const element = document.getElementById(ids[newIndex]);
  if (element) {
    element.focus();
  }
};

const firstFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== 0) {
    const element = document.getElementById(ids[0]);
    if (element) {
      element.focus();
    }
  }
};

const endFocus = (event, index, ids) => {
  event.preventDefault();
  event.stopPropagation();

  if (index !== ids.length - 1) {
    const element = document.getElementById(ids[ids.length - 1]);
    if (element) {
      element.focus();
    }
  }
};

const handleArrows = (event, index, ids) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;
  if (event.nativeEvent.keyCode === nextKey || event.nativeEvent.keyCode === KEY_DOWN) {
    nextFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === previousKey || event.nativeEvent.keyCode === KEY_UP) {
    previousFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_HOME) {
    firstFocus(event, index, ids);
  } else if (event.nativeEvent.keyCode === KEY_END) {
    endFocus(event, index, ids);
  }
};

const handleMoreButtonArrows = (event, hiddenIndex, ids) => {
  const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  const nextKey = !isRTL ? KEY_RIGHT : KEY_LEFT;
  const previousKey = !isRTL ? KEY_LEFT : KEY_RIGHT;

  event.preventDefault();
  event.stopPropagation();

  if (event.nativeEvent.keyCode === nextKey || event.nativeEvent.keyCode === KEY_DOWN) {
    const element = document.getElementById(ids[hiddenIndex]);
    if (element) {
      element.focus();
    }
  } else if (event.nativeEvent.keyCode === KEY_HOME) {
    firstFocus(event, -1, ids);
  } else if (event.nativeEvent.keyCode === previousKey || event.nativeEvent.keyCode === KEY_UP || event.nativeEvent.keyCode === KEY_END) {
    endFocus(event, -1, ids);
  }
};

export default {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
  handleMoreButtonArrows,
};

export {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
  handleMoreButtonArrows,
};
