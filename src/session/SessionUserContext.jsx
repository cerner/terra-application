import React from 'react';
import PropTypes from 'prop-types';

const SessionUserContext = React.createContext();

const sessionUserContextShape = PropTypes.shape({
  /**
   * The user's system username.
   */
  username: PropTypes.string,
  /**
     * The user's first name.
     */
  firstName: PropTypes.string,
  /**
   * The user's last name.
   */
  lastName: PropTypes.string,
  /**
   * An object representing the enabled/disabled feature functionality of the application.
   */
  features: PropTypes.object.isRequired,
  /**
   * An object representing the client capability configurations.
   */
  capabilities: PropTypes.object.isRequired,
});

export default SessionUserContext;
export { sessionUserContextShape };
