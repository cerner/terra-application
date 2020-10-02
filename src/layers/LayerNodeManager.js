import classNames from 'classnames/bind';
import { KEY_ESCAPE } from 'keycode-js';

import styles from './LayerNodeManager.module.scss';

const cx = classNames.bind(styles);

const orderedLayerTypes = ['modal', 'blocking-overlay', 'notification-dialog', 'framework-dialog'];

const defer = (action) => {
  setTimeout(action, 0);
};

class LayerNodeManager {
  constructor(containerRef, baseContentRef, setBaseContentInert) {
    this._containerRef = containerRef || { current: document.body };
    this._baseContentRef = baseContentRef;
    this._setBaseContentInert = setBaseContentInert;
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

  getNode(layerKey, type, setInert) {
    const existingNode = this._nodeMap[layerKey];

    if (existingNode) {
      return existingNode.element;
    }

    const layerContainerForType = this._layerContainers[type];

    const currentActiveElement = document.activeElement;

    if (!layerContainerForType) {
      return null;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.setAttribute('data-terra-layer-id', layerKey);
    newPortalElement.classList.add(cx('portal-element'));

    this._nodeMap[layerKey] = {
      type,
      setInert,
      element: newPortalElement,
      focusActiveElement: () => { currentActiveElement && currentActiveElement.focus(); },
    };

    layerContainerForType.children.push(layerKey);

    // Inert previous layers in the same type container
    layerContainerForType.children.slice(0, -1).forEach((childLayerKey) => {
      const childLayer = this._nodeMap[childLayerKey];
      // element.style.display = 'none';
      childLayer.element.setAttribute('inert', '');

      setTimeout(() => {
        childLayer.setInert(true);
      }, 0);
    });

    // Inert type containers lower than this type
    const lowerLayerContainers = orderedLayerTypes.slice(0, orderedLayerTypes.indexOf(type));
    lowerLayerContainers.forEach((lowerType) => {
      // LayerNodeManager.inertContainer(this._layerContainers[lowerType]);
      this._layerContainers[lowerType].element.setAttribute('inert', '');

      this._layerContainers[lowerType].children.forEach((childLayerKey) => {
        const childLayer = this._nodeMap[childLayerKey];

        defer(() => {
          childLayer.setInert(true);
        });
      });
    });

    // Inert the base container
    this._baseContentRef.current.setAttribute('inert', '');
    defer(() => this._setBaseContentInert(true));

    layerContainerForType.element.appendChild(newPortalElement);

    return newPortalElement;
  }

  // static enableContainer(container) {
  //   container.element.removeAttribute('inert');
  //   container.element.addEventListener('keydown', (e) => {
  //     if (e.keyCode === KEY_ESCAPE) {
  //       debugger;
  //       // if (modalElementRef.current) {
  //       //   const body = document.querySelector('body');
  //       //   if (e.target === modalElementRef.current || modalElementRef.current.contains(e.target) || e.target === body) {
  //       //     onRequestClose();
  //       //   }
  //       // }
  //     }
  //   });
  // }

  // static inertContainer(container) {
  //   container.element.setAttribute('inert', '');
  //   container.element.removeEventListener('keydown');
  // }

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

    layerContainerForType.children.splice(layerContainerForType.children.findIndex((childLayerKey) => childLayerKey === layerKey), 1);

    if (layerContainerForType.children.length) {
      // If there are remaining children in the layer container, enable the last child for interaction

      // this._nodeArray[this._nodeArray.length - 1].style.display = 'block';
      const lastChildLayerKey = layerContainerForType.children[layerContainerForType.children.length - 1];
      this._nodeMap[lastChildLayerKey].element.removeAttribute('inert');
      this._nodeMap[lastChildLayerKey].setInert(false);
    } else if (!layerContainerForType.element.getAttribute('inert')) {
      // If there are no children left in the layer container, and if the layer container is itself not inert
      // due to a higher container being active...

      const lowerLayerContainerTypes = orderedLayerTypes.slice(0, orderedLayerTypes.indexOf(layer.type));

      if (!lowerLayerContainerTypes.length) {
        // If there are no layer containers below the current one, enable the base content.

        this._baseContentRef.current.removeAttribute('inert');
        defer(() => this._setBaseContentInert(false));
      } else {
        // Iterate over each lower container in reverse order...
        for (let i = lowerLayerContainerTypes.length - 1; i >= -1; i -= 1) {
          const lowerContainer = this._layerContainers[lowerLayerContainerTypes[i]];

          if (lowerContainer) {
          // If a lower container is present, enable the lower container
            lowerContainer.element.removeAttribute('inert');
            // LayerNodeManager.enableContainer(lowerContainer);

            if (lowerContainer.children.length) {
              const lastChildLayerKey = lowerContainer.children[lowerContainer.children.length - 1];
              this._nodeMap[lastChildLayerKey].element.removeAttribute('inert');
              this._nodeMap[lastChildLayerKey].setInert(false);

              // If children are present in this lower container, we are done. We want to leave any subsequent lower
              // layers inert.
              break;
            }
          } else {
          // If we have enabled all lower containers and have still not broken out of the loop,
          // there are no layers present, and we need to enable the base content.
            this._baseContentRef.current.removeAttribute('inert');
            defer(() => this._setBaseContentInert(false));
          }
        }
      }
    }

    // After the proper containers have been enabled, reapply focus to the
    // triggering element for the released layer.
    defer(() => {
      layer.focusActiveElement();
    });
  }
}

export default LayerNodeManager;
