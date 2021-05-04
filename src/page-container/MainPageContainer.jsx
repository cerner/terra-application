import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '../main-container';
import LayoutActionsContext from '../shared/LayoutActionsContext';
import NavigationItemContext from '../navigation-item/NavigationItemContext';
import deferExecution from '../utils/defer-execution';

import PageContainerContext from './PageContainerContext';
import usePagePortalManager from './usePagePortalManager';

import styles from './PageContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the context of the MainPageContainer. Any
   * Pages rendered as children will be managed by the MainPageContainer.
   */
  children: PropTypes.node,
};

/**
 * The MainPageContainer defines a content region within the application
 * where Pages can be rendered. Any Page components rendered within a
 * MainPageContainer will be portaled into the MainPageContainer's 'main'
 * element.
 *
 * Because the MainPageContainer renders a 'main' element, only a single instance
 * should be rendered and visible at any given moment. The `renderPage` prop
 * provided by layouts and navigation items should be used whenever possible;
 * direct usage of the MainPageContainer is not recommended.
 */
const MainPageContainer = ({
  children,
}) => {
  const navigationItem = React.useContext(NavigationItemContext);
  const layoutActions = React.useContext(LayoutActionsContext) || {};

  // The rootContainerRef points to the element within which Page content will
  // be rendered.
  const rootContainerRef = React.useRef();

  // The usePagePortalManager hook is used manage the presentation of Page
  // content within the container.
  const { PagePortalManager, activePortal } = usePagePortalManager(rootContainerRef);

  const lastActivePagePortalRef = React.useRef();
  React.useLayoutEffect(() => {
    // If the active Page within the portal container has changed, focus is
    // set to the root of the document to mimic standard navigation behavior.
    // Focus is not moved if the MainPageContainer is not part of the active
    // navigation hierarchy (i.e. it is not visible). Focus is also not moved
    // if no Page was previously active; this is likely to only occur
    // during the initial application launch.
    if (navigationItem.isActive
      && (lastActivePagePortalRef.current && activePortal
        && lastActivePagePortalRef.current.portalId !== activePortal.portalId)) {
      deferExecution(() => {
        document.body.focus();
      });
    }

    lastActivePagePortalRef.current = activePortal;
  }, [activePortal, navigationItem.isActive]);

  // The LayoutActionsContext value is read, and its value is provided to the
  // individual Pages through the PageContainerContext. The LayoutActionsContext
  // value then is nullified for components within the MainPageContainer, as we
  // do not wish to allow multiple implementers of these actions.
  const pageContainerContextValue = React.useMemo(() => ({
    containerStartActions: layoutActions.startActions,
    containerEndActions: layoutActions.endActions,
  }), [layoutActions.startActions, layoutActions.endActions]);

  return (
    <MainContainer
      refCallback={(ref) => {
        rootContainerRef.current = ref;
      }}
      className={cx('page-container')}
      label={activePortal?.label}
      metaData={activePortal?.metaData}
    >
      <LayoutActionsContext.Provider value={undefined}>
        <PagePortalManager>
          <PageContainerContext.Provider value={pageContainerContextValue}>
            {children}
          </PageContainerContext.Provider>
        </PagePortalManager>
      </LayoutActionsContext.Provider>
    </MainContainer>
  );
};

MainPageContainer.propTypes = propTypes;

export default MainPageContainer;
