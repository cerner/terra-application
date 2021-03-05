import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '../main-container';
import LayoutActionsContext from '../layouts/shared/LayoutActionsContext';
import NavigationItemContext from '../layouts/shared/NavigationItemContext';
import { deferExecution } from '../utils/lifecycle-utils';

import PageContainerContext from './private/PageContainerContext';
import usePagePortalManager from './private/usePagePortalManager';

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

  // The value of the isMain prop is stored in a ref immediately, effectively
  // locking the `isMain` prop into its initial value throughout the life of
  // the component. Changing the value of the isMain prop after the initial mount
  //  would be destructive to the Pages rendered within it.
  const isMainRef = React.useRef(isMain);

  // The rootContainerRef points to the element within which Page content will be rendered.
  const rootContainerRef = React.useRef();

  // The LayoutActionsContext value is read, and its value is provided to the individual Pages
  // through the PageContainerContext. This allows the PageContainer to override the actions context value and
  // ensure the previous value does not bleed into any nested PageContainers.
  const layoutActions = React.useContext(LayoutActionsContext);

  // The usePagePortalManager hook is used manage the presentation of PagePortal content within the container.
  const { PagePortalManager, activePortal } = usePagePortalManager(rootContainerRef);

  const lastActivePagePortalRef = React.useRef();
  React.useLayoutEffect(() => {
    // Focus is moved only upon initial Page activation if the PageContainer is part of the active navigation hierarchy (i.e. it is visible)
    if (navigationItem.isActive && (lastActivePagePortalRef.current?.portalId !== activePortal?.portalId)) {
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

    lastActivePagePortalRef.current = activePortal;
  }, [activePortal, navigationItem.isActive]);

  const pageContainerContextValue = React.useMemo(() => ({
    containerStartActions: layoutActions.startActions,
    containerEndActions: layoutActions.endActions,
    isMainPage: isMainRef.current,
  }), [layoutActions.startActions, layoutActions.endActions]);

  const content = (
    <LayoutActionsContext.Provider value={defaultLayoutActionsOverrideValue}>
      <PagePortalManager>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          {children}
        </PageContainerContext.Provider>
      </PagePortalManager>
    </LayoutActionsContext.Provider>
  );

  if (isMainRef.current) {
    return (
      <MainContainer
        refCallback={(ref) => {
          rootContainerRef.current = ref;
        }}
        className={cx('page-container')}
        mainKey={activePortal?.pageKey}
        mainLabel={activePortal?.label}
        mainMetaData={activePortal?.metaData}
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
