import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ApplicationConceptContext is used to define an overarching concept that
 * the application relates to at any given time. The components provided
 * through this context will be rendered automatically by the framework
 * to ensure that the concept is identifiable at any given time through the
 * application's workflows.
 */
const ApplicationConceptContext = React.createContext({});

/**
 * Custom hook to retrieve the ApplicationConceptContext value. Presence of a
 * value is not validated, as a provider is not required for all applications.
 * @returns The retrieved ApplicationConceptContext value.
 */
const useApplicationConcept = () => React.useContext(ApplicationConceptContext);

const contextShape = {
  /**
   * A string summarizing the concept to be used in textual displays throughout
   * the application.
   */
  description: PropTypes.string,
  /**
   * A React element representing the concept to be rendered within the
   * application's primary layout. This component will be rendered a single time
   * within the application.
   */
  layoutBanner: PropTypes.element,
  /**
   * A React element representing the concept to be rendered within the
   * application's modals. This component may be rendered more than once and
   * should likely be simplified in comparison to the layoutBanner.
   */
  modalBanner: PropTypes.element,
};

export default ApplicationConceptContext;
export { useApplicationConcept, contextShape };
