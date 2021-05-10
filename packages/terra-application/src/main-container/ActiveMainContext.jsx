import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ActiveMainContext is used to communicate data related to the current
 * active main content to the application.
 */
const ActiveMainContext = React.createContext({});

/**
 * Hook to simplify consumption of the ActiveMainContext.
 * @returns The ActiveMainContext value found at the consuming render location.
 */
const useActiveMain = () => React.useContext(ActiveMainContext);

const contextShape = {
  /**
   * The string label describing the active main content to be used for display purposes.
   */
  label: PropTypes.string,
  /**
   * A collection of data related to the active main content.
   */
  metaData: PropTypes.object,
};

export default ActiveMainContext;
export { useActiveMain, contextShape };
