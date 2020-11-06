import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MainContainer from '../main-container';

import PageContext from './private/PageContext';
import PageContainerPortalManager from './private/_PageContainerPortalManager';
import PageContainerActionsContext from './PageContainerActionsContext';

import styles from './PageContainer.module.scss';

const cx = classNames.bind(styles);

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
   * The PageContainerPortalManager instance is defined once.
   */
  const portalManagerRef = React.useRef(new PageContainerPortalManager(rootContainerRef));

  /**
   * The rendering state of the PageContainer is tracked to ensure child Pages are ready to be rendered.
   */
  const [hasMounted, setHasMounted] = React.useState();

  /**
   * The PageContainerActionsContext value is read, and its value is provided to the individual Pages
   * through the PageContext. This allows the PageContainer to override the actions context value and
   * ensure the previous value does not bleed into any nested PageContainers.
   */
  const pageContainerActions = React.useContext(PageContainerActionsContext);

  const pageContextValue = React.useMemo(() => ({
    pageContainerHasMounted: hasMounted,
    pageContainer: rootContainerRef.current,
    nodeManager: portalManagerRef.current,
    containerStartActions: pageContainerActions?.startActions,
    containerEndActions: pageContainerActions?.endActions,
    parentNodeId: undefined,
    isMainPage: isMainRef.current,
  }), [hasMounted, pageContainerActions]);

  /**
   * The elements used to portal Page content cannot be generated until the root
   * container element is defined. We defer the rendering of children until after
   * the container element has been created.
   */
  React.useLayoutEffect(() => {
    setHasMounted(true);
  }, []);

  const content = (
    <PageContainerActionsContext.Provider value={undefined}>
      <PageContext.Provider value={pageContextValue}>
        {hasMounted && children}
      </PageContext.Provider>
    </PageContainerActionsContext.Provider>
  );

  if (isMainRef.current) {
    return (
      <MainContainer
        refCallback={(ref) => { rootContainerRef.current = ref; }}
        className={cx('page-container')}
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
