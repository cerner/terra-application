import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';
import LayerIdentifierContext from './LayerIdentifierContext';

import LayerManagerContext from './LayerManagerContext';

/**
 * Creates an element with appropriate styling to be used as the destination
 * for portaled Layer content.
 * @returns An HTMLElement instance
 */
function createPortalElement() {
  const newPortalElement = document.createElement('div');
  newPortalElement.style.position = 'absolute';
  newPortalElement.style.height = '100%';
  newPortalElement.style.width = '100%';
  newPortalElement.style['z-index'] = '0';
  return newPortalElement;
}

/**
 */
const useLayerPortal = ({
  layerType,
}) => {
  const layerManager = React.useContext(LayerManagerContext);
  const parentLayerId = React.useContext(LayerIdentifierContext);
  const layerIdRef = React.useRef(uuidv4());
  const portalElementRef = React.useRef(createPortalElement());
  const unregisterLayerRef = React.useRef();

  if (!layerManager) {
    throw new Error('[terra-application] Layer cannot be rendered outside of a LayerManager.');
  }

  React.useLayoutEffect(() => {
    unregisterLayerRef.current = layerManager.registerLayer({
      portalElement: portalElementRef.current,
      layerId: layerIdRef.current,
      layerType,
      parentLayerId,
    });
  }, [layerManager, layerType, parentLayerId]);

  React.useLayoutEffect(() => () => {
    if (unregisterLayerRef.current) {
      unregisterLayerRef.current();
    }
  }, []);

  const layerPortalComponentRef = React.useRef(({ children }) => (
    <LayerIdentifierContext.Provider value={layerIdRef.current}>
      {ReactDOM.createPortal(children, portalElementRef.current)}
    </LayerIdentifierContext.Provider>
  ));

  return {
    layerId: layerIdRef.current,
    LayerPortal: layerPortalComponentRef.current,
  };
};

export default useLayerPortal;
