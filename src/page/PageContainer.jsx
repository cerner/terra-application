import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '../main-container';
import LayoutActionsContext from '../layouts/shared/LayoutActionsContext';
import NavigationItemContext from '../layouts/shared/NavigationItemContext';

import { deferExecution } from '../utils/lifecycle-utils';
import Logger from '../utils/logger';
import { getPersistentScrollMap, applyScrollData } from '../utils/scroll-persistence/scroll-persistence';

import PageContainerContext from './private/PageContainerContext';
import PagePortalContext from './private/PagePortalContext';

import styles from './PageContainer.module.scss';

const cx = classNames.bind(styles);

const defaultLayoutActionsOverrideValue = {
  startActions: [],
  endActions: [],
};

const propTypes = {
  /**
   * The components to render within the context of the PageContainer.
   */
  children: PropTypes.node,
  /**
   * A boolean indicating whether or not the PageContainer should render a `<main>` element
   * for semantic markup purposes.
   *
   * Only one `<main>` element should be present on the DOM at any given time. As such, usage of
   * the `isMain` prop should be done with utmost caution.
   *
   * The initial value of the `isMain` prop will be cached and used throughout the life of the
   * component instance, as changing this value would be destructive to the child components and
   * cause them to re-mount.
   */
  isMain: PropTypes.bool,
};

/**
 * The PageContainer defines a structural region within the application where Pages can be presented.
 * Any Page components rendered within a PageContainer will be portaled into the PageContainer's root element,
 * allowing for the linked presentation of disparate Page components through a reactive, declarative interface.
 */
const PageContainer = ({
  children,
  isMain,
}) => {
  const navigationItem = React.useContext(NavigationItemContext);

  /**
   * The value of the isMain prop is stored in a ref immediately, effectively
   * locking the `isMain` prop into its initial value throughout the life of
   * the component. Changing the value of the isMain prop after the initial mount
   * would be destructive to the Pages rendered within it.
   */
  const isMainRef = React.useRef(isMain);

  /**
   * The rootContainerRef points to the element within which Page content will be rendered.
   */
  const rootContainerRef = React.useRef();

  /**
   * The LayoutActionsContext value is read, and its value is provided to the individual Pages
   * through the PageContainerContext. This allows the PageContainer to override the actions context value and
   * ensure the previous value does not bleed into any nested PageContainers.
   */
  const layoutActions = React.useContext(LayoutActionsContext);

  const portalRegisterRef = React.useRef({});
  const lastActivePortalArrayRef = React.useRef([]);
  const [activePortalArray, setActivePortalArray] = React.useState([]);
  const pagePortalContextValue = React.useMemo(() => {
    const renderPortalElement = (portalElement, portalId, ancestorPortalId, {
      pageKey, label, metaData, pagePortalLabelId,
    }) => {
      // If the page data has changed for an existing portal, we need to ensure the activePortalArray state changes
      // to trigger downstream effects. Otherwise, these changes will not be detected.
      const existingPortalEntry = portalRegisterRef.current[portalId];
      const forceUpdate = existingPortalEntry && (existingPortalEntry.pageKey !== pageKey || existingPortalEntry.label !== label || existingPortalEntry.metaData !== metaData);

      portalRegisterRef.current[portalId] = {
        element: portalElement,
        ancestorPortalId,
        overflowData: undefined,
        pageKey,
        label,
        metaData,
        pagePortalLabelId,
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
          // We need to perform a separate check to see if the new portal should be inserted into the existing ordering,
          // likely due to a series of Pages mounting at the same time.
          const existingChild = portalRegisterRef.current[activePortals[0]];
          if (existingChild && existingChild.ancestorPortalId === portalId) {
            const newPortals = [...activePortals];
            newPortals.splice(0, 0, portalId);
            return newPortals;
          }

          Logger.warn('Application Page Rendering: A PageContainer can only render a single Page child. The redundant Page will not be displayed.');
          return forceUpdate ? [...activePortals] : activePortals;
        }

        // If the new portal's ancestor has already been registered, the new portal is injected
        // into the array immediately after the ancestor. If the ancestor is found to already have descendant Pages, the new portal
        // is not queued for rendering and is ignored until it becomes render-able due to changes to the Page hierarchy.
        const indexOfAncestorPortal = activePortals.indexOf(ancestorPortalId);
        if (indexOfAncestorPortal >= 0) {
          if (indexOfAncestorPortal === activePortals.length - 1) {
            const newPortals = [...activePortals];
            newPortals.push(portalId);
            return newPortals;
          }

          // We need to perform a separate check to see if the new portal should be inserted into the existing ordering,
          // likely due to a series of Pages mounting at the same time.
          const existingChild = portalRegisterRef.current[activePortals[indexOfAncestorPortal + 1]];
          if (existingChild.ancestorPortalId === portalId) {
            const newPortals = [...activePortals];
            newPortals.splice(activePortals.indexOf(indexOfAncestorPortal), 0, portalId);
            return newPortals;
          }

          Logger.warn('Application Page Rendering: A Page can only render a single Page child. The redundant Page will not be displayed.');
          return forceUpdate ? [...activePortals] : activePortals;
        }

        // If a series of nested Pages are mounted at the same time, the child pages will be registered and processed
        // prior to their ancestors. In this case, we need to ensure that the portal order managed in state
        // reflects the component component hierarchy.
        const earlyDescendantId = Object.keys(portalRegisterRef.current).find((registeredPortalId) => portalRegisterRef.current[registeredPortalId].ancestorPortalId === portalId);
        if (earlyDescendantId) {
          const newPortals = [...activePortals];
          newPortals.splice(activePortals.indexOf(earlyDescendantId) - 1, 0, portalId);
          return newPortals;
        }

        // If neither an ancestor nor an early descendant can be found for the new portal, we assume that the ancestor will be coming in a subsequent update.
        // Given the protections above for duplicate Page detection, we can be optimistic and push the portal to the end of the line to prepare for rendering.
        // If the ancestor never arrives, someone has done something very wrong.
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

  const activeNavigationItemRef = React.useRef();
  activeNavigationItemRef.current = navigationItem.isActive;
  React.useLayoutEffect(() => {
    const onPageActivate = ({ pagePortalLabelId }) => {
      /**
       * Update the aria attributes on the root PageContainer element that is described by the current
       * active Page.
       */
      if (rootContainerRef.current) {
        rootContainerRef.current.setAttribute('aria-labelledby', pagePortalLabelId);
      }

      /**
       * If a Page is activating within the visible navigation hierarchy, focus is moved
       * to account for the new activation.
       */
      if (activeNavigationItemRef.current) {
        if (isMainRef.current) {
          deferExecution(() => {
            document.body.focus();
          });
        } else {
          deferExecution(() => {
            rootContainerRef.current.focus();
          });
        }
      }
    };

    const danglingPortals = [...lastActivePortalArrayRef.current];
    for (let i = 0, count = activePortalArray.length; i < count; i += 1) {
      const isTopPortal = i === count - 1;

      const portalData = portalRegisterRef.current[activePortalArray[i]];

      if (!isTopPortal && rootContainerRef.current.contains(portalData.element)) {
        portalData.overflowData = getPersistentScrollMap(portalData.element);

        rootContainerRef.current.removeChild(portalData.element);
      } else if (isTopPortal && !rootContainerRef.current.contains(portalData.element)) {
        rootContainerRef.current.appendChild(portalData.element);
        applyScrollData(portalData.overflowData, portalData.element);

        onPageActivate(portalData);
      }

      danglingPortals.splice(danglingPortals.indexOf(activePortalArray[i]), 1);
    }

    for (let i = 0, count = danglingPortals.length; i < count; i += 1) {
      const danglingPortalData = portalRegisterRef.current[danglingPortals[i]];
      if (rootContainerRef.current.contains(danglingPortalData.element)) {
        rootContainerRef.current.removeChild(danglingPortalData.element);
      }

      delete portalRegisterRef.current[danglingPortals[i]];
    }

    lastActivePortalArrayRef.current = activePortalArray;
  }, [activePortalArray]);

  const pageContainerContextValue = React.useMemo(() => ({
    containerStartActions: layoutActions.startActions,
    containerEndActions: layoutActions.endActions,
    isMainPage: isMainRef.current,
  }), [layoutActions.startActions, layoutActions.endActions]);

  const content = (
    <LayoutActionsContext.Provider value={defaultLayoutActionsOverrideValue}>
      <PagePortalContext.Provider value={pagePortalContextValue}>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          {children}
        </PageContainerContext.Provider>
      </PagePortalContext.Provider>
    </LayoutActionsContext.Provider>
  );

  if (isMainRef.current) {
    // The currently active page data is provided to the MainContainer, which notifies the rest of the application
    // of the active main content state.
    const activePagePortalData = portalRegisterRef.current[activePortalArray[activePortalArray.length - 1]];

    return (
      <MainContainer
        refCallback={(ref) => {
          rootContainerRef.current = ref;
        }}
        className={cx('page-container')}
        mainKey={activePagePortalData?.pageKey}
        mainLabel={activePagePortalData?.label}
        mainMetaData={activePagePortalData?.metaData}
      >
        {content}
      </MainContainer>
    );
  }

  return (
    <div
      ref={rootContainerRef}
      className={cx('page-container')}
      tabIndex="-1"
    >
      {content}
    </div>
  );
};

PageContainer.propTypes = propTypes;

export default PageContainer;
