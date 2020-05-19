import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import LayerManagerProvider from './LayerManagerProvider';
import LayerManagerContext from './LayerManagerContext';

const Dismissable = ({ onRequestClose, children }) => {
  const parentLayerManager = React.useContext(LayerManagerContext);

  React.useEffect(() => {
    if (!parentLayerManager.isActive) {
      console.log('not active layer, not adding listener');

      return undefined;
    }

    const handleDismiss = () => {
      onRequestClose();
    };

    document.addEventListener('TerraApplication.FrameworkDismiss', handleDismiss);
    return () => {
      document.removeEventListener('TerraApplication.FrameworkDismiss', handleDismiss);
    };
  });

  return children;
};

const LayerPortal = ({
  layerType, isOpen, onRequestClose, children,
}) => {
  const parentLayerManager = React.useContext(LayerManagerContext);
  const keyRef = React.useRef(uuidv4());
  const [mounted, setMounted] = React.useState(false);

  // TODO: investigate deferred rendering for managing multiple disclosures at the same disclosure level.

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  React.useEffect(() => () => {
    if (mounted) {
      window.LayerManager.releaseNode(keyRef.current);
    }
  }, [mounted]);

  const node = window.LayerManager.getNode(keyRef.current, parentLayerManager.layerId, parentLayerManager.layerIndex, layerType, parentLayerManager.parentLayerId);

  React.useEffect(() => {
    if (!mounted) {
      console.log('deferring rendering to allow LayerManager to get in sync');

      return undefined;
    }

    if (!node) {
      console.log('Node request failed');

      return undefined;
    }

    if (!isOpen) {
      window.LayerManager.releaseNode(keyRef.current);

      return undefined;
    }
  }, [mounted, node, isOpen]);

  if (!isOpen || !node || !mounted) {
    return undefined;
  }

  return (
    ReactDOM.createPortal((
      <LayerManagerProvider>
        <Dismissable onRequestClose={onRequestClose}>
          {children}
        </Dismissable>
      </LayerManagerProvider>
    ), node)
  );
};

export default LayerPortal;
