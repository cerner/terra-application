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

/**
 * Returns a function that will execute the provided function upon detection of a KEY_RETURN or KEY_SPACE keydown event.
 * @param {string} key The uniquely identifiable key.
 * @param {Function} onAction The function to be executed after event detection.
 * @param {Function} onArrow The function to be executed after event detection.
 */
const generateOnKeyDown = (key, onAction, onArrow)  => (
  event => {
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
    }
  }
);

export default {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
};

export {
  enableFocusStyles,
  disableFocusStyles,
  generateOnKeyDown,
};
