import React from 'react';
import LayerManagerContext from './LayerManagerContext';

const propTypes = {};

class LayerNodeManager {
  constructor(containerRef) {
    this._containerRef = containerRef || { current: document.body };
    this._nodeMap = {};
  }

  // hideAncestors(key) {
  //   if (!this._containerRef.current) {
  //     return;
  //   }

  //   const nodeData = this._nodeMap[key];

  //   if (!nodeData) {
  //     return;
  //   }

  //   if (this._containerRef.current.contains(nodeData.element)) {
  //     this._containerRef.current.removeChild(nodeData.element);
  //   }

  //   if (nodeData.ancestor) {
  //     this.hideAncestors(nodeData.ancestor);
  //   }
  // }

  getNode(layerKey) {
    const existingNode = this._nodeMap[layerKey];

    if (existingNode) {
      return existingNode.element;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement['data-terra-layer-id'] = layerKey;
    newPortalElement.style.position = 'absolute';
    newPortalElement.style.top = '0';
    newPortalElement.style.bott0m = '0';
    newPortalElement.style.left = '0';
    newPortalElement.style.right = '0';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';
    newPortalElement.style.zIndex = '1';

    this._nodeMap[layerKey] = {
      element: newPortalElement,
    };

    this._containerRef.current.appendChild(newPortalElement);

    return newPortalElement;
  }

  releaseNode(layerKey) {
    const layer = this._nodeMap[layerKey];

    if (!layer) {
      return;
    }

    if (this._containerRef.current.contains(layer.element)) {
      this._containerRef.current.removeChild(layer.element);
    }

    this._nodeMap[layerKey] = undefined;
  }
}

const LayerManagerProvider = ({ children }) => {
  const managerContextValue = React.useMemo(() => ({
    layerManager: new LayerNodeManager(),
  }), []);

  return (
    <LayerManagerContext.Provider value={managerContextValue}>
      {children}
    </LayerManagerContext.Provider>
  );
};

LayerManagerProvider.propTypes = propTypes;

export default LayerManagerProvider;
