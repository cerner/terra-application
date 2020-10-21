import { createContext } from 'react';
import PropTypes from 'prop-types';

const SkipToButtonsContext = createContext();

const contextShape = {
  /**
   * A function called to register a skip-to button for presentation.
   */
  registerButton: PropTypes.func,
  /**
   * A function called to unregister a skip-to button for presentation.
   */
  unregisterButton: PropTypes.func,
};

export default SkipToButtonsContext;
export { contextShape };
