import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ApplicationContainerContext is used to communicate static application
 * information to the children of an ApplicationContainer. Any component acting
 * as an ApplicationContainer must provide this context value for its children.
 */
const ApplicationContainerContext = React.createContext();

/**
 * Custom hook to retrieve ApplicationContainerContext value. Throws if
 * no context value is found, as that indicates invalid usage outside of
 * ApplicationContainer.
 * @returns The present ApplicationContainerContext value.
 */
const useApplicationContainer = () => {
  const contextValue = React.useContext(ApplicationContainerContext);

  if (!contextValue) {
    throw new Error('No ApplicationContainerContext.Provider found. '
    + 'useApplicationContainer can only be used by children '
    + 'of an ApplicationContainer');
  }

  return contextValue;
};

const contextShape = {
  /**
   * A string description for the application used for presentation purposes
   * throughout the application.
   */
  applicationName: PropTypes.string,
  /**
   * A string representing the current version of the application.
   */
  applicationVersion: PropTypes.string,
  /**
   * An object containing unstructured data pertaining to the application.
   *
   * Be aware that changes to the provided object instance will trigger updates
   * to consumers of the ApplicationContainerContext. The provided object should
   * be memoized or otherwise cached when the its contents have not changed.
   */
  applicationMetaData: PropTypes.object,
};

export default ApplicationContainerContext;
export { useApplicationContainer, contextShape };
