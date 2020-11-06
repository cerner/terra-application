import React from 'react';
import PropTypes from 'prop-types';

import ApplicationConceptBannerContext from './ApplicationConceptBannerContext';

const propTypes = {
  /**
   * The components to render within the ApplicationConceptBannerProvider.
   */
  children: PropTypes.node,
  /**
   * A string describing the concept to be used as a shorthand descriptor throughout the application.
   */
  conceptDescription: PropTypes.string,
  /**
   * The React element representing the banner to render within the application's layouts.
   * Memoization of this value is recommended to limit context value changes.
   */
  layoutBanner: PropTypes.element,
  /**
   * The React element representing the banner to render within the application's modals.
   * Memoization of this value is recommended to limit context value changes.
   */
  modalBanner: PropTypes.element,
};

const ApplicationConceptBannerProvider = ({
  children, conceptDescription, layoutBanner, modalBanner,
}) => {
  const conceptBannerProviderValue = React.useMemo(() => ({ conceptDescription, layoutBanner, modalBanner }), [conceptDescription, layoutBanner, modalBanner]);

  return (
    <ApplicationConceptBannerContext.Provider value={conceptBannerProviderValue}>
      {children}
    </ApplicationConceptBannerContext.Provider>
  );
};

ApplicationConceptBannerProvider.propTypes = propTypes;

export default ApplicationConceptBannerProvider;
