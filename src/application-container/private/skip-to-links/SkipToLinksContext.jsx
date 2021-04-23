import { createContext } from 'react';
import PropTypes from 'prop-types';

const SkipToLinksContext = createContext();

const contextShape = {
  /**
   * A function called to register a skip-to link for presentation.
   */
  registerLink: PropTypes.func,
  /**
   * A function called to unregister a skip-to link for presentation.
   */
  unregisterLink: PropTypes.func,
};

export default SkipToLinksContext;
export { contextShape };
