import React from 'react';
import classNames from 'classnames/bind';

import Logger from '../utils/logger';

import LayerManagerContext from './LayerManagerContext';
import styles from './LayerManager.module.scss';

const cx = classNames.bind(styles);

// The supported layer types are defined here, with the array order specifying
// the stacking order of the layers when more than one type is presented. The
// higher the index, the higher the layer type will render in the stack.
const LAYER_TYPES = [
  'modal',
  'notificationDialog',
];

/**
 * A custom hook used to manage the presentation of layers within the given
 * element references.
 * @param {Object} rootContainerRef A React ref pointing to the element within
 * which all layer containers are to be injected.
 * @param {Object} baseContentLayerRef A React ref pointing to the element within
 * the root container that contains the base content over which all layers
 * will display.
 */
const useLayerManager = (rootContainerRef, baseContentLayerRef) => {
  // A ref containing the mapping of layer types to the hook-generated element
  // acting as a container for that type. These containers are injected into the
  // root container. We store these elements here to limit the amount of DOM
  // queries during our layout phase.
  const typeContainersRef = React.useRef({});

  // A ref containing the mapping of all registered layers.
  const layerRegisterRef = React.useRef({});

  // A ref containing the mapping of all duplicate layers presented from a single
  // parent. As duplicates are detected, they are stored in this ref so that we
  // can easily present them when it is possible to do so due to the dismissal of
  // sibling layers.
  const fallbackQueueRef = React.useRef({});

  // A ref containing a function that when executed will set focus to the last
  // focused element within the base content element. This ref is populated prior
  // to inerting the base content and is executed upon re-activation.
  const reapplyBaseContentFocusRef = React.useRef();

  // A ref containing the last collection of layers that were laid out within
  // the root container. This ref is used to detect differences between renders
  // and to clean up layers that may have been removed.
  const lastActiveLayersRef = React.useRef({
    modal: [],
    notificationDialog: [],
  });

  // A state property containing the active layers to be rendered.
  const [activeLayers, setActiveLayers] = React.useState({
    modal: [],
    notificationDialog: [],
  });

  // A ref containing the static registration API for use by layer
  // implementations.
  const layerManagerContextValueRef = React.useRef({
    /**
     * Registers the provided layer information with the layer manager. The layer
     * will be enqueued for presentation based on the current registrations state.
     * @param {Object} registrationData Object containing layer registration data
     * @param {HTMLElement} registrationData.portalElement The element into which
     * the layers content will be portaled. The layer manager will ensure this
     * element is placed in the DOM.
     * @param {String} registrationData.layerId The unique identifier for the layer.
     * @param {String} registrationData.layerType The associated type for the layer.
     * @param {String} registrationData.parentLayerId The identifier for a
     * parent layer associated with the new layer. Used to define stacking within
     * a given layer type container.
     * @returns A function that will unregister the layer with the layer manager.
     */
    registerLayer: ({
      portalElement,
      layerId,
      layerType,
      parentLayerId,
    }) => {
      layerRegisterRef.current[layerId] = {
        ...(layerRegisterRef.current[layerId] || {}),
        portalElement,
        layerId,
        layerType,
        parentLayerId,
      };

      setActiveLayers((currentActiveLayers) => {
        // If the specified layer is already present in the render order,
        // it can stay where it is. The state is updated to ensure that any changed
        // layer values are communicated to the other effects.
        if (currentActiveLayers[layerType].indexOf(layerId) >= 0) {
          return { ...currentActiveLayers };
        }

        // If there are currently no registered layers for the type, we initialize
        // the state with the single new entry.
        if (!currentActiveLayers[layerType].length) {
          return {
            ...currentActiveLayers,
            [`${layerType}`]: [layerId],
          };
        }

        // If no parent layer exists but layers are already registered for the
        // current type...
        if (!parentLayerId) {
          // We need to perform a separate check to see if the new layer should
          // be inserted into the existing ordering, likely due to a series of
          // nested layers mounting at the same time.
          const existingChild = layerRegisterRef.current[currentActiveLayers[layerType][0]];
          if (existingChild && existingChild.parentLayerId === layerId) {
            return {
              ...currentActiveLayers,
              [`${layerType}`]: [layerId, ...currentActiveLayers[layerType]],
            };
          }

          // If the layer is the start of a new layer branch, we store it in the
          // fallback queue for future rendering.
          if (!fallbackQueueRef.current[layerType]) {
            fallbackQueueRef.current[layerType] = [];
          }
          fallbackQueueRef.current[layerType].push(layerId);

          Logger.warn(`[terra-application] Multiple ${layerType} layers are rendered for the same parent. Layers will be rendered one at a time.`);
          return currentActiveLayers;
        }

        // If the new layer's parent has already been registered...
        const indexOfParentLayer = currentActiveLayers[layerType].indexOf(parentLayerId);
        if (indexOfParentLayer >= 0) {
          // The layer is injected after the parent layer if existing child layers
          // do not exist.
          if (indexOfParentLayer === currentActiveLayers[layerType].length - 1) {
            return {
              ...currentActiveLayers,
              [`${layerType}`]: [...currentActiveLayers[layerType], layerId],
            };
          }

          // We need to perform a separate check to see if the new layer should
          // be inserted into the existing order. This can can occur when a
          // series of nested layers are mounted at the same time.
          const existingChild = layerRegisterRef.current[currentActiveLayers[layerType][indexOfParentLayer + 1]];
          if (existingChild.parentLayerId === layerId) {
            const newLayers = [...currentActiveLayers[layerType]];
            newLayers.splice(currentActiveLayers[layerType].indexOf(indexOfParentLayer), 0, layerId);

            return {
              ...currentActiveLayers,
              [`${layerType}`]: newLayers,
            };
          }

          // If the layer is the start of a new layer branch within the parent,
          // we store it in the fallback queue for future rendering.
          if (!fallbackQueueRef.current[parentLayerId]) {
            fallbackQueueRef.current[parentLayerId] = [];
          }
          fallbackQueueRef.current[parentLayerId].push(layerId);

          Logger.warn(`[terra-application] Multiple ${layerType} layers are rendered for the same parent. Layers will be rendered one at a time.`);
          return currentActiveLayers;
        }

        // If a series of nested layers are mounted at the same time, the child
        // layers will be registered and processed prior to their ancestors. In
        // this case, we need to ensure that the layer order managed in state
        // reflects the layer component hierarchy.
        const earlyDescendantId = Object.keys(layerRegisterRef.current).find((registeredLayerId) => (
          layerRegisterRef.current[registeredLayerId].parentLayerId === layerId));
        if (earlyDescendantId) {
          const newLayers = [...currentActiveLayers[layerType]];
          newLayers.splice(currentActiveLayers[layerType].indexOf(earlyDescendantId), 0, layerId);

          return {
            ...currentActiveLayers,
            [`${layerType}`]: newLayers,
          };
        }

        // If neither a parent nor an early descendant can be found for the
        // new layer, we assume that the parent will be coming in a subsequent
        // update. Given the protections above for duplicate layer detection, we
        // can be optimistic and push the layer to the front of the queue to prepare
        // it for rendering. If the specified parent never gets registered,
        // something has gone very wrong.
        const newLayers = [...currentActiveLayers[layerType]];
        newLayers.push(layerId);

        return {
          ...currentActiveLayers,
          [`${layerType}`]: newLayers,
        };
      });

      // A function is returned that removes the previously given pageId from
      // the array of active pages.
      return () => {
        const entryForLayerId = layerRegisterRef.current[layerId];
        if (!entryForLayerId) {
          return;
        }

        // Remove the layer from the fallback queue if it is present
        Object.keys(fallbackQueueRef.current).forEach((fallbackQueueKey) => {
          const indexOfRemovedLayerId = fallbackQueueRef.current[fallbackQueueKey].indexOf(layerId);
          if (indexOfRemovedLayerId >= 0) {
            fallbackQueueRef.current[fallbackQueueKey].splice(indexOfRemovedLayerId, 1);

            if (!fallbackQueueRef.current[fallbackQueueKey].length) {
              delete fallbackQueueRef.current[fallbackQueueKey];
            }
          }
        });

        // If another layer is queued to be presented, we must ensure it gets
        // inserted into the render order here.
        let fallbackEntryId;
        if (entryForLayerId.parentLayerId) {
          if (fallbackQueueRef.current[entryForLayerId.parentLayerId]
            && fallbackQueueRef.current[entryForLayerId.parentLayerId].length) {
            fallbackEntryId = fallbackQueueRef.current[entryForLayerId.parentLayerId].shift();

            if (!fallbackQueueRef.current[entryForLayerId.parentLayerId].length) {
              delete fallbackQueueRef.current[entryForLayerId.parentLayerId];
            }
          }
        } else if (fallbackQueueRef.current[layerType]
          && fallbackQueueRef.current[layerType].length) {
          fallbackEntryId = fallbackQueueRef.current[layerType][0]; // eslint-disable-line prefer-destructuring
          fallbackQueueRef.current[layerType].splice(0, 1);

          if (!fallbackQueueRef.current[layerType].length) {
            delete fallbackQueueRef.current[layerType];
          }
        }

        setActiveLayers((currentActiveLayers) => {
          const newLayers = [...currentActiveLayers[layerType]];

          if (currentActiveLayers[layerType].indexOf(layerId) >= 0) {
            if (fallbackEntryId) {
              newLayers.splice(currentActiveLayers[layerType].indexOf(layerId), 1, fallbackEntryId);
            } else {
              newLayers.splice(currentActiveLayers[layerType].indexOf(layerId), 1);
            }
          }

          return {
            ...currentActiveLayers,
            [`${layerType}`]: newLayers,
          };
        });
      };
    },
  });

  // This effect is responsible for creating container elements for each layer
  // type and injecting them into the provided root element.
  React.useLayoutEffect(() => {
    const layersContainerElement = rootContainerRef.current;
    const typeContainers = typeContainersRef.current;

    LAYER_TYPES.forEach((type, index) => {
      const layerContainer = document.createElement('div');

      layerContainer.setAttribute('data-layer-type', type);
      layerContainer.style['z-index'] = `${index + 1}`;
      layerContainer.style.display = 'none';
      layerContainer.classList.add(cx('layer-container'));

      layersContainerElement.appendChild(layerContainer);

      typeContainers[type] = {
        element: layerContainer,
      };
    });

    return () => {
      Object.keys(typeContainers).forEach((layerType) => {
        const layerElement = typeContainers[layerType].element;

        if (layersContainerElement.contains(layerElement)) {
          layersContainerElement.removeChild(layerElement);
        }
      });
    };
  }, [rootContainerRef]);

  // This effect is responsible for responding to changes in the activeLayers
  // state and ensuring the appropriate layers are added/removed and are
  // appropriately accessible.
  React.useLayoutEffect(() => {
    // We reduce the last rendered layers into a linear array. This will
    // easily allow us to determine differences and remove layers that are no
    // longer registered.
    const danglingLayerIds = LAYER_TYPES.reduce((reducedValue, layerType) => (
      [...reducedValue, ...lastActiveLayersRef.current[layerType]]
    ), []);

    // We iterate over each defined layer type from front to back, ensuring
    // that the active layers for each type are present and displayed in the
    // appropriate order. Once an active layer is found for a single type, all
    // subsequent layers will be rendered inert.
    let activeLayerTypeFound = false;
    [...LAYER_TYPES].reverse().forEach((layerType) => {
      const layerContainer = typeContainersRef.current[layerType];
      const activeLayersForType = activeLayers[layerType];

      if (activeLayersForType.length) {
        layerContainer.element.style.display = 'block';

        activeLayersForType.forEach((activeLayer, index) => {
          const layerData = layerRegisterRef.current[activeLayer];

          if (!layerContainer.element.contains(layerData.portalElement)) {
            layerContainer.element.appendChild(layerData.portalElement);
          }

          if (activeLayerTypeFound || index < activeLayersForType.length - 1) {
            if (!layerData.portalElement.inert) {
              const currentActiveElement = document.activeElement;
              layerData.reapplyFocus = () => {
                if (layerData.portalElement.contains(currentActiveElement)) {
                  currentActiveElement.focus();
                }
              };
            }

            layerData.portalElement.inert = true;
          } else {
            layerData.portalElement.inert = false;

            if (layerData.reapplyFocus) {
              layerData.reapplyFocus();
              layerData.reapplyFocus = undefined;
            }
          }

          // Remove the current Layer data from the dangling data set, as we know
          // its present and thus not dangling
          const indexOfActiveLayer = danglingLayerIds.indexOf(layerData.layerId);
          if (indexOfActiveLayer >= 0) {
            danglingLayerIds.splice(indexOfActiveLayer, 1);
          }
        });

        activeLayerTypeFound = true;
      } else {
        layerContainer.element.style.display = 'none';
      }
    });

    // We ensure that the base content is rendered inert in the presence of
    // any active layer above it.
    const baseContentElement = baseContentLayerRef.current;
    if (activeLayerTypeFound) {
      if (!baseContentElement.inert) {
        const currentActiveElement = document.activeElement;
        reapplyBaseContentFocusRef.current = () => {
          if (baseContentElement.contains(currentActiveElement)) {
            currentActiveElement.focus();
          }
        };
      }

      baseContentElement.inert = true;
    } else {
      baseContentElement.inert = false;

      if (reapplyBaseContentFocusRef.current) {
        reapplyBaseContentFocusRef.current();
        reapplyBaseContentFocusRef.current = undefined;
      }
    }

    // At this point, danglingLayerIds contains the ids of layers that were
    // active during the last render but are no longer registered with the
    // LayerManager. We take the opportunity here to remove those layers from
    // the container and delete our reference to them.
    for (let i = 0, count = danglingLayerIds.length; i < count; i += 1) {
      const danglingLayerData = layerRegisterRef.current[danglingLayerIds[i]];
      const containerForLayerType = typeContainersRef.current[danglingLayerData.layerType];
      if (containerForLayerType.element.contains(danglingLayerData.portalElement)) {
        containerForLayerType.element.removeChild(danglingLayerData.portalElement);
      }

      delete layerRegisterRef.current[danglingLayerIds[i]];
    }

    lastActiveLayersRef.current = activeLayers;
  }, [activeLayers, rootContainerRef, baseContentLayerRef]);

  // We expose a dynamic component from the hook so that we do not need to
  // expose the context or context value.
  const layerManagerRef = React.useRef(({ children }) => (
    <LayerManagerContext.Provider value={layerManagerContextValueRef.current}>
      {children}
    </LayerManagerContext.Provider>
  ));

  return {
    LayerManager: layerManagerRef.current,
  };
};

export default useLayerManager;
