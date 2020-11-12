import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationContainerContext = createContext({});

const contextShape = {
  /**
   * A string description for the application used for presentation purposes throughout the application.
   */
  applicationName: PropTypes.string,
  /**
   * A string representing the current version of the application.
   */
  applicationVersion: PropTypes.string,
  /**
   * An object containing unstructured data pertaining to the application.
   */
  applicationMetaData: PropTypes.object,
};

export default ApplicationContainerContext;
export { contextShape };
