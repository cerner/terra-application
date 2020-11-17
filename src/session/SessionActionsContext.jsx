import React from 'react';
import PropTypes from 'prop-types';

const SessionActionsContext = React.createContext();

const sessionActionsContextShape = PropTypes.shape({
  /**
   * A function that will log the user out of the current session.
   */
  logout: PropTypes.func.isRequired,
  /**
   * A function that will lock the current session.
   */
  lock: PropTypes.func,
});

export default SessionActionsContext;
export { sessionActionsContextShape };
