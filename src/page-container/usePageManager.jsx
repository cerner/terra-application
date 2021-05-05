import React from 'react';

import Logger from '../utils/logger';
import {
  getPersistentScrollMap,
  applyScrollData,
} from '../utils/scroll-persistence/scroll-persistence';

import PageManagerContext from './PageManagerContext';

/**
 * Hook used to manage Page registrations within a PageContainer.
 * @param {Object} rootContainerRef A React ref object with a current value pointing
 * to a valid HTMLElement
 * @returns An object containing data related to currently active/visible Page
 * and a unique PageManager component definition
 */
const usePageManager = (rootContainerRef) => {
  const pageRegisterRef = React.useRef({});
  const lastActivePageArrayRef = React.useRef([]);
  const [activePageArray, setActivePageArray] = React.useState([]);

  const pageManagerContextValue = React.useMemo(() => {
    const registerPage = ({
      portalElement,
      pageId,
      parentPageId,
      label,
      metaData,
    }) => {
      pageRegisterRef.current[pageId] = {
        pageId,
        portalElement,
        parentPageId,
        label,
        metaData,
        overflowData: pageRegisterRef.current[pageId]
          ? pageRegisterRef.current[pageId].overflowData : undefined,
      };

      setActivePageArray((activePages) => {
        // If the specified Page is already present in the render order,
        // it can stay where it is. The state is updated to ensure that any changed
        // page values (label/metaData) are communicated to the other effects.
        if (activePages.indexOf(pageId) >= 0) {
          return [...activePages];
        }

        // If there are currently no registered Pages, we initialize the state
        // with the single new entry.
        if (!activePages.length) {
          return [pageId];
        }

        // If no ancestor Page is specified, but there are known active Pages,
        // this new Page must be a duplicate at the root of the PageContainer.
        // This new Page is not queued for rendering and is ignored.
        if (!parentPageId) {
          // We need to perform a separate check to see if the new Page should
          // be inserted into the existing ordering, likely due to a series of
          // Pages mounting at the same time.
          const existingChild = pageRegisterRef.current[activePages[0]];
          if (existingChild && existingChild.parentPageId === pageId) {
            const newPages = [...activePages];
            newPages.splice(0, 0, pageId);
            return newPages;
          }

          Logger.warn(`[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page ${label} will not be displayed.`);
          return activePages;
        }

        // If the new Page's parent has already been registered, the new
        // Page is injected into the array immediately after the parent. If
        // the parent is found to already have descendant Pages, the new Page
        // is not queued for rendering and is ignored.
        const indexOfParentPage = activePages.indexOf(parentPageId);
        if (indexOfParentPage >= 0) {
          if (indexOfParentPage === activePages.length - 1) {
            const newPages = [...activePages];
            newPages.push(pageId);
            return newPages;
          }

          // We need to perform a separate check to see if the new Page should
          // be inserted into the existing order. This can can occur when a
          // series of nested Pages are mounted at the same time.
          const existingChild = pageRegisterRef.current[activePages[indexOfParentPage + 1]];
          if (existingChild.parentPageId === pageId) {
            const newPages = [...activePages];
            newPages.splice(activePages.indexOf(indexOfParentPage), 0, pageId);
            return newPages;
          }

          Logger.warn(`[terra-application] A PageContainer cannot render multiple Pages with a shared parent. The redundant Page ${label} will not be displayed.`);
          return activePages;
        }

        // If a series of nested Pages are mounted at the same time, the child
        // pages will be registered and processed prior to their ancestors. In
        // this case, we need to ensure that the Page order managed in state
        // reflects the Page component hierarchy.
        const earlyDescendantId = Object.keys(pageRegisterRef.current).find((registeredPageId) => (
          pageRegisterRef.current[registeredPageId].parentPageId === pageId));
        if (earlyDescendantId) {
          const newPages = [...activePages];
          newPages.splice(activePages.indexOf(earlyDescendantId) - 1, 0, pageId);
          return newPages;
        }

        // If neither a parent nor an early descendant can be found for the
        // new Page, we assume that the parent will be coming in a subsequent
        // update. Given the protections above for duplicate Page detection, we
        // can be optimistic and push the Page to the front of the line to prepare
        // it for rendering. If the specified parent never gets registered,
        // something has gone very wrong.
        const newPages = [...activePages];
        newPages.push(pageId);
        return newPages;
      });

      return () => {
        // A function is returned that removes the previously given pageId from
        // the array of active pages.
        const entryForPageId = pageRegisterRef.current[pageId];
        if (!entryForPageId) {
          return;
        }

        setActivePageArray((activePages) => {
          const newPages = [...activePages];
          newPages.splice(activePages.indexOf(pageId), 1);
          return newPages;
        });
      };
    };

    return {
      registerPage,
    };
  }, []);

  React.useLayoutEffect(() => {
    const danglingPages = [...lastActivePageArrayRef.current];

    // Iterate over the active Page identifiers, the first value indicating
    // the bottom of the stack, the last index the top (top is visible).
    for (let i = 0, count = activePageArray.length; i < count; i += 1) {
      const isTopPage = i === count - 1;

      const pageData = pageRegisterRef.current[activePageArray[i]];

      if (!isTopPage && rootContainerRef.current.contains(pageData.portalElement)) {
        // If the Page is not the top Page, but it remains within the
        // container, its scroll positions are cached and it is removed.
        pageData.overflowData = getPersistentScrollMap(pageData.portalElement);
        rootContainerRef.current.removeChild(pageData.portalElement);
      } else if (isTopPage && !rootContainerRef.current.contains(pageData.portalElement)) {
        // If the Page is the top Page, but it is not yet rendered within the
        // container, it is added to the container and any cached scroll
        // positions are reapplied.
        rootContainerRef.current.appendChild(pageData.portalElement);
        applyScrollData(pageData.overflowData, pageData.portalElement);
      }

      // Remove the current Page data from the dangling data set, as we know
      // its present and thus not dangling
      danglingPages.splice(danglingPages.indexOf(activePageArray[i]), 1);
    }

    for (let i = 0, count = danglingPages.length; i < count; i += 1) {
      // If a previously registered Page is no longer present, we can safely
      // delete our reference to it after removing it from the container, if
      // necessary.
      const danglingPageData = pageRegisterRef.current[danglingPages[i]];
      if (rootContainerRef.current.contains(danglingPageData.portalElement)) {
        rootContainerRef.current.removeChild(danglingPageData.portalElement);
      }

      delete pageRegisterRef.current[danglingPages[i]];
    }

    lastActivePageArrayRef.current = activePageArray;
  }, [activePageArray, rootContainerRef]);

  // We expose a dynamic component from the hook so that we do not need to
  // expose the context or context value.
  const pageManagerRef = React.useRef(({ children }) => (
    <PageManagerContext.Provider value={pageManagerContextValue}>
      {children}
    </PageManagerContext.Provider>
  ));

  return {
    activePage: pageRegisterRef.current[activePageArray[activePageArray.length - 1]],
    PageManager: pageManagerRef.current,
  };
};

export default usePageManager;
