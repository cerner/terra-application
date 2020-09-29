import React from 'react';
import PropTypes from 'prop-types';

import ApplicationConceptContext from './private/ApplicationConceptContext';

const propTypes = {
  children: PropTypes.node,
  layoutBanner: PropTypes.element,
  modalBanner: PropTypes.element,
};

const ApplicationConceptBannerProvider = ({
  children, layoutBanner, modalBanner,
}) => {
  const conceptBannerProviderValue = React.useMemo(() => ({
    modalBanner,
    layoutBanner,
  }), [layoutBanner, modalBanner]);

  return (
    <ApplicationConceptContext.Provider value={conceptBannerProviderValue}>
      {children}
    </ApplicationConceptContext.Provider>
  );
};

ApplicationConceptBannerProvider.propTypes = propTypes;

export default ApplicationConceptBannerProvider;
