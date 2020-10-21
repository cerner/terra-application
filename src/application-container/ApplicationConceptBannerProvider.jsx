import React from 'react';
import PropTypes from 'prop-types';

import ApplicationConceptBannerContext from './private/ApplicationConceptBannerContext';

const propTypes = {
  /**
   * The components to render within the ApplicationConceptBannerProvider.
   */
  children: PropTypes.node,
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
  children, layoutBanner, modalBanner,
}) => {
  const conceptBannerProviderValue = React.useMemo(() => ({ layoutBanner, modalBanner }), [layoutBanner, modalBanner]);

  return (
    <ApplicationConceptBannerContext.Provider value={conceptBannerProviderValue}>
      {children}
    </ApplicationConceptBannerContext.Provider>
  );
};

ApplicationConceptBannerProvider.propTypes = propTypes;

export default ApplicationConceptBannerProvider;
