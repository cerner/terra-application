import React from 'react';
import PropTypes from 'prop-types';

/**
 * A private Context used to enable communication between the
 * ActiveMainPageProvider and the useActiveMainPageRegistry hook.
 */
const ActiveMainPageRegistrationContext = React.createContext();

const contextShape = {
  /**
   * A function used to register page data.
   * Returns a function that will undo the registration.
   */
  register: PropTypes.func,
};

export default ActiveMainPageRegistrationContext;
export { contextShape };
