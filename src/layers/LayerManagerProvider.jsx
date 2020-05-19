import React from 'react';
import uuidv4 from 'uuid/v4';
import LayerManagerContext from './LayerManagerContext';

const propTypes = {};

const LayerManagerProvider = ({ layerType, children }) => {
  const parentLayerManager = React.useContext(LayerManagerContext);

  const [activeLayerId, setActiveLayerId] = React.useState();

  const layerIdRef = React.useRef(uuidv4());
  const layerIndex = parentLayerManager ? parentLayerManager.index + 1 : 0;

  const isRootLayer = !parentLayerManager;

  const managerContextValue = React.useMemo(() => ({
    layerType,
    layerIndex,
    layerId: layerIdRef.current,
    parentLayerId: parentLayerManager?.parentLayerId,
    isLayerActive: parentLayerManager ? parentLayerManager.activeLayerId === layerIdRef.current : activeLayerId === layerIdRef.current,
  }), [layerType, layerIndex, parentLayerManager, activeLayerId]);

  React.useLayoutEffect(() => {
    if (!isRootLayer) {
      return undefined;
    }

    const handleLayerRender = (data) => {
      if (data.activeLayerId !== activeLayerId) {
        setActiveLayerId(data.activeLayerId);
      }
    };

    document.addEventListener('terra-application.layer-manager.render-complete', handleLayerRender);

    return () => {
      document.removeEventListener('terra-application.layer-manager.render-complete', handleLayerRender);
    };
  }, [isRootLayer, activeLayerId]);

  return (
    <LayerManagerContext.Provider value={managerContextValue}>
      {children}
    </LayerManagerContext.Provider>
  );
};

LayerManagerProvider.propTypes = propTypes;

export default LayerManagerProvider;
