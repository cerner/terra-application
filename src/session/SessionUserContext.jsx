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
});

export default SessionUserContext;
export { sessionUserContextShape };
