import React from 'react';
import PropTypes from 'prop-types';

import ApplicationConceptContext from './ApplicationConceptContext';

const propTypes = {
  /**
   * The components to render within the ApplicationConceptBannerProvider.
   */
  children: PropTypes.node,
  /**
   * A string describing the concept to be used as a shorthand descriptor throughout the application.
   */
  description: PropTypes.string,
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
  children, description, layoutBanner, modalBanner,
}) => {
  const conceptBannerProviderValue = React.useMemo(() => ({ description, layoutBanner, modalBanner }), [description, layoutBanner, modalBanner]);

  return (
    <ApplicationConceptContext.Provider value={conceptBannerProviderValue}>
      {children}
    </ApplicationConceptContext.Provider>
  );
};

ApplicationConceptBannerProvider.propTypes = propTypes;

export default ApplicationConceptBannerProvider;
