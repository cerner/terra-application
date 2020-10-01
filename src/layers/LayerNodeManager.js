import classNames from 'classnames/bind';
import styles from './LayerNodeManager.module.scss';

const cx = classNames.bind(styles);

const orderedLayerTypes = ['modal', 'blocking-overlay', 'notification-dialog', 'framework-dialog'];

class LayerNodeManager {
  constructor(containerRef, baseContentRef) {
    this._containerRef = containerRef || { current: document.body };
    this._baseContentRef = baseContentRef;
    this._nodeMap = {};
    this._nodeArray = [];
    this._layerContainers = {};

    this.initialize();
  }

  initialize() {
    orderedLayerTypes.forEach((type, index) => {
      const containerElement = document.createElement('div');
      containerElement.setAttribute('data-layer-manager-type', type);
      containerElement.style['z-index'] = `${index + 1}`;

      this._layerContainers[type] = {
        element: containerElement,
        children: [],
      };
      this._containerRef.current.appendChild(containerElement);
    });
  }

  getNode(layerKey, type) {
    const existingNode = this._nodeMap[layerKey];

    if (existingNode) {
      return existingNode.element;
    }

    const layerContainerForType = this._layerContainers[type];

    if (!layerContainerForType) {
      return null;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.setAttribute('data-terra-layer-id', layerKey);
    newPortalElement.classList.add(cx('portal-element'));

    this._nodeMap[layerKey] = {
      type,
      element: newPortalElement,
    };

    layerContainerForType.children.push(newPortalElement);

    // Inert previous layers in the same type container
    layerContainerForType.children.slice(0, -1).forEach((element) => {
      // element.style.display = 'none';
      element.setAttribute('inert', '');
    });

    // Inert type containers lower than this type
    const lowerLayerContainers = orderedLayerTypes.slice(0, orderedLayerTypes.indexOf(type));
    lowerLayerContainers.forEach((lowerType) => {
      this._layerContainers[lowerType].element.setAttribute('inert', '');
    });

    // Inert the base container
    this._baseContentRef.current.setAttribute('inert', '');

    layerContainerForType.element.appendChild(newPortalElement);

    return newPortalElement;
  }

  releaseNode(layerKey) {
    const layer = this._nodeMap[layerKey];

    if (!layer) {
      return;
    }

    const layerContainerForType = this._layerContainers[layer.type];

    if (layerContainerForType.element.contains(layer.element)) {
      layerContainerForType.element.removeChild(layer.element);
    }

    this._nodeMap[layerKey] = undefined;

    layerContainerForType.children.splice(layerContainerForType.children.findIndex((element) => element.getAttribute('data-terra-layer-id') === layerKey), 1);

    if (layerContainerForType.children.length) {
      // If there are remaining children in the layer container, enable the last child for interaction

      // this._nodeArray[this._nodeArray.length - 1].style.display = 'block';
      layerContainerForType.children[layerContainerForType.children.length - 1].removeAttribute('inert');
    } else if (!layerContainerForType.element.getAttribute('inert')) {
      // If there are no children left in the layer container, and if the layer container is itself not inert
      // due to a higher container being active...

      const lowerLayerContainerTypes = orderedLayerTypes.slice(0, orderedLayerTypes.indexOf(layer.type));

      if (!lowerLayerContainerTypes.length) {
        // If there are no layer containers below the current one, enable the base content.

        this._baseContentRef.current.removeAttribute('inert');
        return;
      }

      // Iterate over each lower container in reverse order...
      for (let i = lowerLayerContainerTypes.length; i >= 0; i -= 1) {
        const lowerContainer = this._layerContainers[lowerLayerContainerTypes[i]];

        if (lowerContainer) {
          // Enable the lower container
          lowerContainer.element.removeAttribute('inert');

          if (lowerContainer.children.length) {
            // If children are present in this lower container, we are done. We want to leave any subsequent lower
            // layers inert.
            break;
          }
        }
      }
    }
  }
}

export default LayerNodeManager;
