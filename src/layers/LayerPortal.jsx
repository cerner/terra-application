import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

import LayerContext from './LayerContext';

// const Dismissable = ({ onRequestClose, children }) => {
//   const parentLayerManager = React.useContext(LayerManagerContext);

//   React.useEffect(() => {
//     if (!parentLayerManager.isActive) {
//       console.log('not active layer, not adding listener');

//       return undefined;
//     }

//     const handleDismiss = () => {
//       onRequestClose();
//     };

//     document.addEventListener('TerraApplication.FrameworkDismiss', handleDismiss);
//     return () => {
//       document.removeEventListener('TerraApplication.FrameworkDismiss', handleDismiss);
//     };
//   });

//   return children;
// };

const LayerPortal = ({
  type, setInert, children,
}) => {
  const layerContext = React.useContext(LayerContext);
  const layerKeyRef = React.useRef(uuidv4());

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
