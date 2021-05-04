import React from 'react';
import PropTypes from 'prop-types';

/**
 * The PagePortalContext defines a private communication interface between
 * PageContainers and Pages that allows Pages to register to and render within
 * a PageContainer.
 */
const PagePortalContext = React.createContext();

const contextShape = PropTypes.shape({
  renderPortalElement: PropTypes.func,
  releasePortalElement: PropTypes.func,
});

export default PagePortalContext;
export { contextShape };
