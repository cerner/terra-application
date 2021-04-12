import React from 'react';
import PropTypes from 'prop-types';

/**
 * The SessionContext is used to store and retrieve data related to the current user session.
 */
const SessionContext = React.createContext({});

/**
 * Custom hook to retrieve the SessionContext value. Presence of a
 * value is not validated, as a provider is not required for all applications.
 * @returns The retrieved SessionContext value.
 */
const useSession = () => React.useContext(SessionContext);

const sessionContextShape = PropTypes.shape({
  /**
   * An object used to store data about the session and its user.
   */
  metaData: PropTypes.object,
  /**
   * An object representing the user attributed to the current session.
   */
  user: PropTypes.shape({
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
  }).isRequired,
});

export default SessionContext;
export { useSession, sessionContextShape };
