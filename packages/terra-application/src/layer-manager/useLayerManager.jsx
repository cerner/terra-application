import React from 'react';
import classNames from 'classnames/bind';

import Logger from '../utils/logger';

import LayerManagerContext from './LayerManagerContext';
import styles from './LayerManager.module.scss';

const cx = classNames.bind(styles);

const LayerTypes = {
  modal: 1,
  blockingOverlay: 2,
  notificationDialog: 3,
  frameworkDialog: 4,
};

const orderedLayers = [
  'modal',
  'blockingOverlay',
  'notificationDialog',
  'frameworkDialog',
];

/**
 */
const useLayerManager = (rootContainerRef, baseContentLayerRef) => {
  const layerContainersRef = React.useRef({});
  const layerRegisterRef = React.useRef({});
  const fallbackQueueRef = React.useRef({});

  const lastActiveLayersRef = React.useRef({
    modal: [],
    notificationDialog: [],
    blockingOverlay: [],
    frameworkDialog: [],
  });
  const [activeLayers, setActiveLayers] = React.useState({
    modal: [],
    notificationDialog: [],
    blockingOverlay: [],
    frameworkDialog: [],
  });

  const layerManagerContextValue = React.useMemo(() => {
    const registerLayer = ({
      portalElement,
      layerId,
      layerType,
      parentLayerId,
    }) => {
      layerRegisterRef.current[layerId] = {
        portalElement,
        layerId,
        layerType,
        parentLayerId,
      };

      setActiveLayers((currentActiveLayers) => {
        // If the specified Layer is already present in the render order,
        // it can stay where it is. The state is updated to ensure that any changed
        // page values (label/metaData) are communicated to the other effects.
        if (currentActiveLayers[layerType].indexOf(layerId) >= 0) {
          return { ...currentActiveLayers };
        }

        // If there are currently no registered Layers, we initialize the state
        // with the single new entry.
        if (!currentActiveLayers[layerType].length) {
          return {
            ...currentActiveLayers,
            [`${layerType}`]: [layerId],
          };
        }

        // If no ancestor Layer is specified, but there are known active Pages,
        // this new Page must be a duplicate at the root of the PageContainer.
        // This new Page is not queued for rendering and is ignored.
        if (!parentLayerId) {
          // We need to perform a separate check to see if the new Layer should
          // be inserted into the existing ordering, likely due to a series of
          // Layers mounting at the same time.
          const existingChild = layerRegisterRef.current[currentActiveLayers[layerType][0]];
          if (existingChild && existingChild.parentLayerId === layerId) {
            return {
              ...currentActiveLayers,
              [`${layerType}`]: [layerId, ...currentActiveLayers[layerType]],
            };
          }

          // If a Layer for the parent is already established, we store the
          // layerId in the fallback queue to be presented when possible.
          if (!fallbackQueueRef.current[layerType]) {
            fallbackQueueRef.current[layerType] = [];
          }
          fallbackQueueRef.current[layerType].push(layerId);

          // Logger.warn(`[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page ${label} will not be displayed.`);
          return currentActiveLayers;
        }

        // If the new Layer's parent has already been registered, the new
        // Layer is injected into the array immediately after the parent. If
        // the parent is found to already have descendant Layers, the new Page
        // is not queued for rendering and is ignored.
        const indexOfParentLayer = currentActiveLayers[layerType].indexOf(parentLayerId);
        if (indexOfParentLayer >= 0) {
          if (indexOfParentLayer === currentActiveLayers[layerType].length - 1) {
            return {
              ...currentActiveLayers,
              [`${layerType}`]: [...currentActiveLayers[layerType], layerId],
            };
          }

          // We need to perform a separate check to see if the new Layer should
          // be inserted into the existing order. This can can occur when a
          // series of nested Layers are mounted at the same time.
          const existingChild = layerRegisterRef.current[currentActiveLayers[layerType][indexOfParentLayer + 1]];
          if (existingChild.parentLayerId === layerId) {
            const newLayers = [...currentActiveLayers[layerType]];
            newLayers.splice(currentActiveLayers[layerType].indexOf(indexOfParentLayer), 0, layerId);

            return {
              ...currentActiveLayers,
              [`${layerType}`]: newLayers,
            };
          }

          // If a Layer for the parent is already established, we store the
          // layerId in the fallback queue to be presented when possible.
          if (!fallbackQueueRef.current[parentLayerId]) {
            fallbackQueueRef.current[parentLayerId] = [];
          }
          fallbackQueueRef.current[parentLayerId].push(layerId);

          // Logger.warn(`[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page ${label} will not be displayed.`);
          return currentActiveLayers;
        }

        // If a series of nested Layers are mounted at the same time, the child
        // layers will be registered and processed prior to their ancestors. In
        // this case, we need to ensure that the Layer order managed in state
        // reflects the Layer component hierarchy.
        const earlyDescendantId = Object.keys(layerRegisterRef.current).find((registeredLayerId) => (
          layerRegisterRef.current[registeredLayerId].parentLayerId === layerId));
        if (earlyDescendantId) {
          const newLayers = [...currentActiveLayers[layerType]];
          newLayers.splice(currentActiveLayers[layerType].indexOf(earlyDescendantId) - 1, 0, layerId);

          return {
            ...currentActiveLayers,
            [`${layerType}`]: newLayers,
          };
        }

        // If neither a parent nor an early descendant can be found for the
        // new Layer, we assume that the parent will be coming in a subsequent
        // update. Given the protections above for duplicate Layer detection, we
        // can be optimistic and push the Page to the front of the line to prepare
        // it for rendering. If the specified parent never gets registered,
        // something has gone very wrong.
        const newLayers = [...currentActiveLayers[layerType]];
        newLayers.push(layerId);

        return {
          ...currentActiveLayers,
          [`${layerType}`]: newLayers,
        };
      });

      return () => {
        // A function is returned that removes the previously given pageId from
        // the array of active pages.
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
          if (fallbackQueueRef.current[entryForLayerId.parentLayerId] && fallbackQueueRef.current[entryForLayerId.parentLayerId].length) {
            fallbackEntryId = fallbackQueueRef.current[entryForLayerId.parentLayerId].shift();

            if (!fallbackQueueRef.current[entryForLayerId.parentLayerId].length) {
              delete fallbackQueueRef.current[entryForLayerId.parentLayerId];
            }
          }
        } else {
          for (let i = 0; i < fallbackQueueRef.current[layerType].length; i += 1) {
            if (fallbackQueueRef.current[layerType][i].layerType === layerType) {
              fallbackEntryId = fallbackQueueRef.current[layerType][i];
              fallbackQueueRef.current[layerType].splice(i, 1);

              if (!fallbackQueueRef.current[layerType].length) {
                delete fallbackQueueRef.current[layerType];
              }

              break;
            }
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
    };

    return {
      registerLayer,
    };
  }, []);

  React.useLayoutEffect(() => {
    const layersContainerElement = rootContainerRef.current;
    const layerContainersRegistry = layerContainersRef.current;

    orderedLayers.forEach((type, index) => {
      const layerContainer = document.createElement('div');
      let overlayElement;

      layerContainer.setAttribute('data-layer-manager-type', type);
      layerContainer.style['z-index'] = `${index + 1}`;
      // layerContainer.style.display = 'none';
      layerContainer.classList.add(cx('layer-container'));

      // if (type !== 'blockingOverlay') {
      //   overlayElement = document.createElement('div');
      //   overlayElement.setAttribute('data-layer-manager-overlay', true);
      //   overlayElement.classList.add(cx('overlay'));
      //   overlayElement.style['z-index'] = '0';
      //   overlayElement.style.display = 'none';

      //   layerContainer.appendChild(overlayElement);
      // }

      layersContainerElement.appendChild(layerContainer);

      layerContainersRegistry[type] = {
        element: layerContainer,
        overlay: overlayElement,
      };
    });

    return () => {
      Object.keys(layerContainersRegistry).forEach((layerType) => {
        const layerElement = layerContainersRegistry[layerType].element;

        if (layersContainerElement.contains(layerElement)) {
          layersContainerElement.removeChild(layerElement);
        }
      });
    };
  }, [rootContainerRef]);

  React.useLayoutEffect(() => {
    const danglingLayerIds = orderedLayers.reduce((reducedValue, layerType) => [...reducedValue, ...lastActiveLayersRef.current[layerType]], []);

    let activeLayerFound = false;
    [...orderedLayers].reverse().forEach((layerType) => {
      const layerContainer = layerContainersRef.current[layerType];
      const activeLayersForType = activeLayers[layerType];

      if (activeLayersForType.length) {
        layerContainer.element.style.display = 'block';

        activeLayersForType.forEach((activeLayer, index) => {
          const layerData = layerRegisterRef.current[activeLayer];

          if (!layerContainer.element.contains(layerData.portalElement)) {
            layerContainer.element.appendChild(layerData.portalElement);
          }

          if (index < activeLayersForType.length - 1) {
            if (!layerData.portalElement.inert) {
              const currentActiveElement = document.activeElement;
              layerData.applyFocus = () => {
                if (layerData.portalElement.contains(currentActiveElement)) {
                  currentActiveElement.focus();
                }
              };
              layerData.portalElement.inert = true;
            }
          } else {
            layerData.portalElement.inert = activeLayerFound;

            if (!activeLayerFound && layerData.applyFocus) {
              layerData.applyFocus();
              layerData.applyFocus = undefined;
            }
          }

          // Remove the current Layer data from the dangling data set, as we know
          // its present and thus not dangling
          const indexOfActiveLayer = danglingLayerIds.indexOf(layerData.layerId);
          if (indexOfActiveLayer >= 0) {
            danglingLayerIds.splice(indexOfActiveLayer, 1);
          }
        });

        activeLayerFound = true;
      } else {
        layerContainer.element.style.display = 'none';
      }
    });

    const baseContentElement = baseContentLayerRef.current;
    if (activeLayerFound) {
      baseContentElement.inert = true;
    } else {
      baseContentElement.inert = false;
    }

    for (let i = 0, count = danglingLayerIds.length; i < count; i += 1) {
      // If a previously registered Layer is no longer present, we can safely
      // delete our reference to it after removing it from the container, if
      // necessary.
      const danglingLayerData = layerRegisterRef.current[danglingLayerIds[i]];
      const containerForLayerType = layerContainersRef.current[danglingLayerData.layerType];
      if (containerForLayerType.current.contains(danglingLayerData.portalElement)) {
        containerForLayerType.current.removeChild(danglingLayerData.portalElement);
      }

      delete layerRegisterRef.current[danglingLayerIds[i]];
    }

    lastActiveLayersRef.current = activeLayers;
  }, [activeLayers, rootContainerRef, baseContentLayerRef]);

  // We expose a dynamic component from the hook so that we do not need to
  // expose the context or context value.
  const layerManagerRef = React.useRef(({ children }) => (
    <LayerManagerContext.Provider value={layerManagerContextValue}>
      {children}
    </LayerManagerContext.Provider>
  ));

  return {
    // inertRegions: pageRegisterRef.current[activePageArray[activePageArray.length - 1]],
    LayerManager: layerManagerRef.current,
  };
};

export default useLayerManager;
