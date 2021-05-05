import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import LayoutActionsContext from '../shared/LayoutActionsContext';
import NavigationItemContext from '../navigation-item/NavigationItemContext';
import deferExecution from '../utils/defer-execution';

import PageContainerContext from './PageContainerContext';
import usePageManager from './usePageManager';

import styles from './PageContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the context of the PageContainer. Any
   * Pages rendered as children will be managed by the PageContainer.
   */
  children: PropTypes.node,
};

/**
 * The PageContainer defines a content region within the application where Pages
 * can be rendered. Any Page components rendered within a PageContainer will be
 * portaled into the PageContainer's root element.
 */
const PageContainer = ({
  children,
}) => {
  const navigationItem = React.useContext(NavigationItemContext);

  // The rootContainerRef points to the element within which Page content will
  // be rendered.
  const rootContainerRef = React.useRef();

  // The usePageManager hook is used manage the presentation of Page
  // content within the container.
  const { PageManager, activePage } = usePageManager(rootContainerRef);

  const lastActivePageRef = React.useRef();
  React.useLayoutEffect(() => {
    // If the active Page within the portal container has changed, focus is
    // set to the root of the document to ensure focus remains close to container.
    // Focus is not moved if the PageContainer is not part of the active
    // navigation hierarchy (i.e. it is not visible). Focus is also not moved
    // if no Page was previously active; this is likely to only occur
    // during the initial application launch.
    if (navigationItem.isActive
      && (lastActivePageRef.current && activePage
        && lastActivePageRef.current.portalId !== activePage.pageId)) {
      deferExecution(() => {
        if (rootContainerRef.current) {
          rootContainerRef.current.focus();
        }
      });
    }

    lastActivePageRef.current = activePage;
  }, [activePage, navigationItem.isActive]);

  // The LayoutActionsContext value is nullified, and any present values are
  // ignored. Handling of layout actions is the sole responsibility of the
  // MainPageContainer.
  const pageContainerContextValue = React.useMemo(() => ({
    containerStartActions: [],
    containerEndActions: [],
  }), []);

  return (
    <div
      ref={rootContainerRef}
      className={cx('page-container')}
      tabIndex="-1"
      aria-label={activePage?.label}
      data-testid="page-container"
    >
      <LayoutActionsContext.Provider value={undefined}>
        <PageManager>
          <PageContainerContext.Provider value={pageContainerContextValue}>
            {children}
          </PageContainerContext.Provider>
        </PageManager>
      </LayoutActionsContext.Provider>
    </div>
  );
};

PageContainer.propTypes = propTypes;

export default PageContainer;
