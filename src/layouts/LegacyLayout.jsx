import React from 'react';
import PropTypes from 'prop-types';

import ApplicationStatusOverlayProvider from '../application-status-overlay/ApplicationStatusOverlayProvider';
import ApplicationLoadingOverlayProvider from '../application-loading-overlay/ApplicationLoadingOverlayProvider';

const propTypes = {
  /**
   * The child components to render within the layout.
   */
  children: PropTypes.node,
};

const LegacyLayout = ({ children }) => (
  <ApplicationLoadingOverlayProvider>
    <ApplicationStatusOverlayProvider>
      {children}
    </ApplicationStatusOverlayProvider>
  </ApplicationLoadingOverlayProvider>
);

LegacyLayout.propTypes = propTypes;

export default LegacyLayout;
