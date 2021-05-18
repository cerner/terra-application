import React from 'react';
import LayerContext from './LayerContext';
import LayerNodeManager from './LayerNodeManager';
import InertContext from './InertContext';

const propTypes = {};

const LayerContainer = ({ children }) => {
  const layerContainerRef = React.useRef();
  const baseContentRef = React.useRef();
  const [layerContextValue, setLayerContextValue] = React.useState();
  const [baseContentInert, setBaseContentInert] = React.useState(false);

  // TODO investigate opening up a prop for dynamically getting the container ref
  // for easier mpage integration. let them pick where these things show up in their DOM.

  React.useLayoutEffect(() => {
    // The LayerNodeManager needs valid refs when it is instantiated
    setLayerContextValue({
      nodeManager: new LayerNodeManager(layerContainerRef, baseContentRef, setBaseContentInert),
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
            height: '100%', width: '100%', position: 'relative', overflow: 'hidden', zIndex: '0',
          }}
          ref={baseContentRef}
        >
          <InertContext.Provider value={baseContentInert}>
            {layerContextValue && children}
          </InertContext.Provider>
        </div>
      </div>
    </LayerContext.Provider>
  );
};

LayerContainer.propTypes = propTypes;

export default LayerContainer;
