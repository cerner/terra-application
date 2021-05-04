import React from 'react';

import Logger from '../utils/logger';
import {
  getPersistentScrollMap,
  applyScrollData,
} from '../utils/scroll-persistence/scroll-persistence';

import PagePortalContext from './PagePortalContext';

const usePagePortalProvider = (rootContainerRef) => {
  const portalRegisterRef = React.useRef({});
  const lastActivePortalArrayRef = React.useRef([]);
  const [activePortalArray, setActivePortalArray] = React.useState([]);

  const pagePortalContextValue = React.useMemo(() => {
    const renderPortalElement = (portalElement, portalId, ancestorPortalId, {
      pageKey, label, metaData,
    }) => {
      // If the page data has changed for an existing portal, we need to ensure the activePortalArray state changes
      // to trigger downstream effects. Otherwise, these changes will not be detected.
      const existingPortalEntry = portalRegisterRef.current[portalId];
      const forceUpdate = existingPortalEntry && (existingPortalEntry.pageKey !== pageKey || existingPortalEntry.label !== label || existingPortalEntry.metaData !== metaData);

      portalRegisterRef.current[portalId] = {
        portalId,
        element: portalElement,
        ancestorPortalId,
        pageKey,
        label,
        metaData,
        overflowData: portalRegisterRef.current[portalId]
          ? portalRegisterRef.current[portalId].overflowData : undefined,
      };

      setActivePortalArray((activePortals) => {
        // If the specified portal is already present in the render order,
        // it can stay where it is. The state is updated to ensure that any changed
        // page values (label/metaData) are communicated to the other effects.
        if (activePortals.indexOf(portalId) >= 0) {
          return forceUpdate ? [...activePortals] : activePortals;
        }

        // If there are currently no registered portals, we initialize the state
        // with the single new entry.
        if (!activePortals.length) {
          return [portalId];
        }

        // If no ancestor portal is specified, but there are known active portals,
        // this new portal must be a duplicate Page at the root of the PageContainer.
        // This new portal is not queued for rendering and is ignored until it becomes
        // render-able due to changes to the Page hierarchy.
        if (!ancestorPortalId) {
          // We need to perform a separate check to see if the new portal should
          // be inserted into the existing ordering, likely due to a series of
          // Pages mounting at the same time.
          const existingChild = portalRegisterRef.current[activePortals[0]];
          if (existingChild && existingChild.ancestorPortalId === portalId) {
            const newPortals = [...activePortals];
            newPortals.splice(0, 0, portalId);
            return newPortals;
          }

          Logger.warn('[terra-application] A PageContainer can only render a single Page child. The redundant Page will not be displayed.');
          return forceUpdate ? [...activePortals] : activePortals;
        }

        // If the new portal's ancestor has already been registered, the new
        // portal is injected into the array immediately after the ancestor. If
        // the ancestor is found to already have descendant Pages, the new portal
        // is not queued for rendering and is ignored until it becomes render-able
        // due to changes to the Page hierarchy.
        const indexOfAncestorPortal = activePortals.indexOf(ancestorPortalId);
        if (indexOfAncestorPortal >= 0) {
          if (indexOfAncestorPortal === activePortals.length - 1) {
            const newPortals = [...activePortals];
            newPortals.push(portalId);
            return newPortals;
          }

          // We need to perform a separate check to see if the new portal should
          // be inserted into the existing ordering, likely due to a series of
          // Pages mounting at the same time.
          const existingChild = portalRegisterRef.current[activePortals[indexOfAncestorPortal + 1]];
          if (existingChild.ancestorPortalId === portalId) {
            const newPortals = [...activePortals];
            newPortals.splice(activePortals.indexOf(indexOfAncestorPortal), 0, portalId);
            return newPortals;
          }

          Logger.warn('Application Page Rendering: A Page can only render a single Page child. The redundant Page will not be displayed.');
          return forceUpdate ? [...activePortals] : activePortals;
        }

        // If a series of nested Pages are mounted at the same time, the child
        // pages will be registered and processed prior to their ancestors. In
        // this case, we need to ensure that the portal order managed in state
        // reflects the component component hierarchy.
        const earlyDescendantId = Object.keys(portalRegisterRef.current).find((registeredPortalId) => portalRegisterRef.current[registeredPortalId].ancestorPortalId === portalId);
        if (earlyDescendantId) {
          const newPortals = [...activePortals];
          newPortals.splice(activePortals.indexOf(earlyDescendantId) - 1, 0, portalId);
          return newPortals;
        }

        // If neither an ancestor nor an early descendant can be found for the
        // new portal, we assume that the ancestor will be coming in a subsequent
        // update. Given the protections above for duplicate Page detection, we
        // can be optimistic and push the portal to the end of the line to prepare
        // for rendering. If the ancestor never arrives, someone has done something
        // very wrong.
        const newPortals = [...activePortals];
        newPortals.push(portalId);
        return newPortals;
      });
    };

    const releasePortalElement = (portalId) => {
      const entryForPortalId = portalRegisterRef.current[portalId];
      if (!entryForPortalId) {
        return;
      }

      setActivePortalArray((activePortals) => {
        const newPortals = [...activePortals];
        newPortals.splice(activePortals.indexOf(portalId), 1);
        return newPortals;
      });
    };

    return {
      renderPortalElement,
      releasePortalElement,
    };
  }, []);

  React.useLayoutEffect(() => {
    const danglingPortals = [...lastActivePortalArrayRef.current];

    // Iterate over the active portal identifiers, the first value indicating
    // the bottom of the stack, the last index the first.
    for (let i = 0, count = activePortalArray.length; i < count; i += 1) {
      const isTopPortal = i === count - 1;

      const portalData = portalRegisterRef.current[activePortalArray[i]];

      if (!isTopPortal && rootContainerRef.current.contains(portalData.element)) {
        // If the portal is not the top portal, but it remains within the
        // container, its scroll positions are cached and it is removed.
        portalData.overflowData = getPersistentScrollMap(portalData.element);
        rootContainerRef.current.removeChild(portalData.element);
      } else if (isTopPortal && !rootContainerRef.current.contains(portalData.element)) {
        // If the portal is the top portal, but it is not yet within the
        // container, it is added to the container and any cached scroll
        // positions are reapplied.
        rootContainerRef.current.appendChild(portalData.element);
        applyScrollData(portalData.overflowData, portalData.element);
      }

      // Remove the current portal data from the dangling data set, as we know
      // its present and thus not dangling
      danglingPortals.splice(danglingPortals.indexOf(activePortalArray[i]), 1);
    }

    for (let i = 0, count = danglingPortals.length; i < count; i += 1) {
      // If a previously registered portal is no longer present, we can safely
      // delete our reference to it after removing it from the container, if
      // necessary.
      const danglingPortalData = portalRegisterRef.current[danglingPortals[i]];
      if (rootContainerRef.current.contains(danglingPortalData.element)) {
        rootContainerRef.current.removeChild(danglingPortalData.element);
      }

      delete portalRegisterRef.current[danglingPortals[i]];
    }

    lastActivePortalArrayRef.current = activePortalArray;
  }, [activePortalArray, rootContainerRef]);

  // We expose a dynamic component from the hook so that we do not need to
  // expose the context or context value.
  const pagePortalManagerRef = React.useRef(({ children }) => (
    <PagePortalContext.Provider value={pagePortalContextValue}>
      {children}
    </PagePortalContext.Provider>
  ));

  return {
    activePortal: portalRegisterRef.current[activePortalArray[activePortalArray.length - 1]],
    PagePortalManager: pagePortalManagerRef.current,
  };
};

export default usePagePortalProvider;
