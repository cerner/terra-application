import React from 'react';
import PropTypes from 'prop-types';

import ApplicationConceptContext from './private/ApplicationConceptContext';

const propTypes = {
  /**
   * A collection of child elements to render within the ApplicationContainer body.
   */
  children: PropTypes.node,
  primaryConceptBanner: PropTypes.element,
  modalConceptBanner: PropTypes.element,
};

const ApplicationConceptProvider = ({
  children, primaryConceptBanner, modalConceptBanner,
}) => {
  const conceptBannerProviderValue = React.useMemo(() => ({
    renderModalConceptView: () => modalConceptBanner,
    renderPageConceptView: () => primaryConceptBanner,
  }), [primaryConceptBanner, modalConceptBanner]);

  return (
    <ApplicationConceptContext.Provider value={conceptBannerProviderValue}>
      {children}
    </ApplicationConceptContext.Provider>
  );
};

ApplicationConceptProvider.propTypes = propTypes;

export default ApplicationConceptProvider;
