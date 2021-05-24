import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '../main-container';
import LayoutActionsContext from '../shared/LayoutActionsContext';
import NavigationItemContext from '../navigation-item/NavigationItemContext';
import deferExecution from '../utils/defer-execution';

import PageContainerContext from './PageContainerContext';
import usePageManager from './usePageManager';

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
  const layoutActions = React.useContext(LayoutActionsContext);

  // The rootContainerRef points to the element within which Page content will
  // be rendered.
  const rootContainerRef = React.useRef();

  // The usePageManager hook is used manage the presentation of Page
  // content within the container.
  const { PageManager, activePage } = usePageManager(rootContainerRef);

  const lastActivePageRef = React.useRef();
  React.useLayoutEffect(() => {
    // If the active Page within the portal container has changed, focus is
    // set to the root of the document to mimic standard navigation behavior.
    // Focus is not moved if the MainPageContainer is not part of the active
    // navigation hierarchy (i.e. it is not visible). Focus is also not moved
    // if no Page was previously active; this is likely to only occur
    // during the initial application launch.
    if (navigationItem.isActive
      && (lastActivePageRef.current && activePage
        && lastActivePageRef.current.pageId !== activePage.pageId)) {
      deferExecution(() => {
        document.body.focus();
      });
    }

    lastActivePageRef.current = activePage;
  }, [activePage, navigationItem.isActive]);

  // The LayoutActionsContext value is read, and its value is provided to the
  // individual Pages through the PageContainerContext. This allows us to better
  // control the concerns of the various PageContainer implementations.
  const pageContainerContextValue = React.useMemo(() => ({
    containerActions: layoutActions.actions || [],
  }), [layoutActions.actions]);

  return (
    <MainContainer
      refCallback={(ref) => {
        rootContainerRef.current = ref;
      }}
      className={cx('page-container')}
      label={activePage?.label || ''}
      metaData={activePage?.metaData}
    >
      <PageManager>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          {children}
        </PageContainerContext.Provider>
      </PageManager>
    </MainContainer>
  );
};

MainPageContainer.propTypes = propTypes;

export default MainPageContainer;
