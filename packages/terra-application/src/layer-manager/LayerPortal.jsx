import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import LayerContext from './LayerManagerContext';

const LayerPortal = ({
  type, setInert, children,
}) => {
  const layerContext = React.useContext(LayerContext);
  const layerIdRef = React.useRef(uuidv4());

  // TODO: investigate deferred rendering for managing multiple disclosures at the same disclosure level.

  React.useLayoutEffect(() => () => {
    layerContext.nodeManager.releaseNode(layerKeyRef.current);
  }, [layerContext, type]);

  const node = layerContext.nodeManager.getNode(layerKeyRef.current, type, setInert);

  if (!node) {
    return null;
  }

  return (
    ReactDOM.createPortal(children, node)
  );
};

export default LayerPortal;
