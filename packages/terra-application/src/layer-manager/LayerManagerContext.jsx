import React from 'react';
import PropTypes from 'prop-types';

/**
 * The LayerManagerContext defines the registration APIs between the LayerManager
 * and any Layer implementations. Direct usage of this context is not recommended;
 * please utilize the useLayerPortal hook to integrate with the LayerManager.
 */
const LayerManagerContext = React.createContext();

const contextShape = {
  /**
   * Function used to register a layer with an ancestor LayerManager.
   */
  registerLayer: PropTypes.func,
};

export default LayerManagerContext;
export { contextShape };
