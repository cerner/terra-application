import React from 'react';
import PropTypes from 'prop-types';
import useLayerPortal from '../../src/layer-manager/useLayerPortal';

/**
 * Simple Layer implementation to test integration with LayerManager
 */
const MockLayer = ({
  layerType, children,
}) => {
  const { LayerPortal } = useLayerPortal({
    layerType,
  });

  return (
    <LayerPortal>
      {children}
    </LayerPortal>
  );
};

MockLayer.propTypes = {
  layerType: PropTypes.string,
  children: PropTypes.node,
};

export default MockLayer;
