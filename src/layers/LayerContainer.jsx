import React from 'react';
import LayerContext from './LayerContext';
import LayerNodeManager from './LayerNodeManager';

const propTypes = {};

const LayerContainer = ({ children }) => {
  const layerContainerRef = React.useRef();
  const baseContentRef = React.useRef();
  const [layerContextValue, setLayerContextValue] = React.useState();

  React.useLayoutEffect(() => {
    // The LayerNodeManager needs valid refs when it is instantiated
    setLayerContextValue({
      nodeManager: new LayerNodeManager(layerContainerRef, baseContentRef),
    });
  }, []);

  return (
    <LayerContext.Provider value={layerContextValue}>
      <div
        style={{
          height: '100%', width: '100%', position: 'relative', overflow: 'hidden',
        }}
        ref={layerContainerRef}
      >
        <div
          style={{
            height: '100%', width: '100%', position: 'relative', overflow: 'hidden',
          }}
          ref={baseContentRef}
        >
          {layerContextValue && children}
        </div>
      </div>
    </LayerContext.Provider>
  );
};

LayerContainer.propTypes = propTypes;

export default LayerContainer;
