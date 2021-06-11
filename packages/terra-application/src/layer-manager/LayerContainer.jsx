import React from 'react';
import LayerContext from './LayerManagerContext';
import LayerNodeManager from './LayerNodeManager';
import InertContext from './InertContext';
import useLayerManager from './useLayerManager';

const propTypes = {};

const LayerContainer = ({ children }) => {
  const layerContainerRef = React.useRef();
  const baseContentRef = React.useRef();
  // const [layerContextValue, setLayerContextValue] = React.useState();
  // const [baseContentInert, setBaseContentInert] = React.useState(false);

  const { LayerManager } = useLayerManager(layerContainerRef, baseContentRef);

  return (
    <LayerManager>
      <div
        style={{
          height: '100%', width: '100%', position: 'relative', overflow: 'hidden',
        }}
        ref={layerContainerRef}
      >
        <div
          style={{
            height: '100%', width: '100%', position: 'relative', overflow: 'hidden', zIndex: '0',
          }}
          ref={baseContentRef}
        >
          {/* <InertContext.Provider value={baseContentInert}> */}
          {children}
          {/* </InertContext.Provider> */}
        </div>
      </div>
    </LayerManager>
  );
};

LayerContainer.propTypes = propTypes;

export default LayerContainer;
