import React from 'react';
import LayerManagerContext from './LayerManagerContext';

const propTypes = {};

class LayerNodeManager {
  constructor(containerRef) {
    this._containerRef = containerRef || { current: document.body };
    this._nodeMap = {};
    this._nodeArray = [];
  }

  getNode(layerKey) {
    const existingNode = this._nodeMap[layerKey];

    if (existingNode) {
      return existingNode.element;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.setAttribute('data-terra-layer-id', layerKey);
    newPortalElement.style.position = 'absolute';
    newPortalElement.style.top = '0';
    newPortalElement.style.bott0m = '0';
    newPortalElement.style.left = '0';
    newPortalElement.style.right = '0';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';
    newPortalElement.style.zIndex = '1';

    this._nodeArray.push(newPortalElement);

    this._nodeMap[layerKey] = {
      element: newPortalElement,
    };

    this._nodeArray.slice(0, -1).forEach((element) => {
      // element.style.display = 'none';
      element.setAttribute('inert', undefined);
    });

    if (this._nodeArray.length === 1) {
      document.body.querySelector('#root').setAttribute('inert', undefined);
    }

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

    this._nodeArray.splice(this._nodeArray.findIndex((element) => element.getAttribute('data-terra-layer-id') === layerKey), 1);

    if (this._nodeArray[this._nodeArray.length - 1]) {
      this._nodeArray[this._nodeArray.length - 1].style.display = 'block';
      this._nodeArray[this._nodeArray.length - 1].removeAttribute('inert');
    } else {
      document.body.querySelector('#root').removeAttribute('inert');
    }
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
