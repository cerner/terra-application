import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '@cerner/terra-application/lib/main-container';
import LayoutActionsContext from '../layouts/shared/LayoutActionsContext';
import { NavigationItemContext } from '@cerner/terra-application/lib/navigation-item';
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
};

/**
 * The PageContainer defines a structural region within the application where Pages can be presented.
 * Any Page components rendered within a PageContainer will be portaled into the PageContainer's root element.
 */
const PageContainer = ({
  children,
}) => {
  // The NavigationItemContext gives valuable information regarding the presentaton state of the PageContainer.
  const navigationItem = React.useContext(NavigationItemContext);

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
      deferExecution(() => {
        rootContainerRef.current.focus();
      });
    }

    lastActivePagePortalRef.current = activePortal;
  }, [activePortal, navigationItem.isActive]);

  const pageContainerContextValue = React.useMemo(() => ({
    containerStartActions: layoutActions.startActions,
    containerEndActions: layoutActions.endActions,
  }), [layoutActions.startActions, layoutActions.endActions]);

  return (
    <div
      ref={rootContainerRef}
      className={cx('page-container')}
      tabIndex="-1"
    >
      <LayoutActionsContext.Provider value={defaultLayoutActionsOverrideValue}>
        <PagePortalManager>
          <PageContainerContext.Provider value={pageContainerContextValue}>
            {children}
          </PageContainerContext.Provider>
        </PagePortalManager>
      </LayoutActionsContext.Provider>
    </div>
  );
};

PageContainer.propTypes = propTypes;

export default PageContainer;
