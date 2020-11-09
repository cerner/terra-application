import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import { ApplicationContainerContext, ApplicationConceptBannerContext } from '../application-container';
import { ApplicationIntlContext } from '../application-intl';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import { NavigationItemContext } from '../layouts';
import EventEmitter from '../utils/event-emitter';

import PageContext from './private/PageContext';
import PageHeader from './private/_PageHeader';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The unique string identifying the Page instance. This identifier must be unique among Pages within the same
   * PageContainer. The pageKey will be accessible by components who are notified of Page presentation changes.
   */
  pageKey: PropTypes.string.isRequired,
  /**
   * The string description of the Page to present to the user. This value is also used to build description
   * text for screen readers and accessibility tools.
   */
  title: PropTypes.string.isRequired,
  /**
   * An array of objects defining the Page actions to present to the user. At smaller breakpoints,
   * the content provided as `actions` will be presented within the Page's menu to minimize layout space.
   */
  actions: PropTypes.arrayOf(PropTypes.shape({

  })),
  /**
   * A PageMenu instance defining the contents of the Page's dedicated menu control.
   * Only the PageMenu component can be provided.
   */
  menu: PropTypes.element,
  /**
   * A component to present additional controls to the Page user. The provided component will be rendered
   * below the Page's header.
   */
  toolbar: PropTypes.node,
  /**
   * A function to be executed upon selection of the Page's back button. If not provided, the back button
   * will not be rendered.
   */
  onRequestClose: PropTypes.func,
  /**
   * The components to render within the context of the Page.
   */
  children: PropTypes.node,
  /**
   * When true, the Page will not prompt the user prior to executing `onRequestClose` in the presence of
   * rendered NavigationPrompts. Use this prop to customize NavigationPrompt handling prior to Page closure.
   */
  requestClosePromptIsDisabled: PropTypes.bool,
  /**
   * When true, the Page header will not be rendered.
   *
   * This prop will be ignored if the `actions`, `menu`, or `onRequestClose` props are provided, or if the
   * header must present actions due to content within the PageContainerActionsContext.
   */
  preferHeaderIsHidden: PropTypes.bool,
  /**
   * An object containing generic data describing the content of the Page. The metaData will be accessible
   * by components who are notified of Page presentation changes.
   */
  metaData: PropTypes.object,
};

const Page = ({
  pageKey,
  title,
  actions,
  menu,
  toolbar,
  onRequestClose,
  children,
  requestClosePromptIsDisabled,
  preferHeaderIsHidden,
  metaData,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const navigationItem = React.useContext(NavigationItemContext);
  const applicationContainer = React.useContext(ApplicationContainerContext);
  const applicationConcept = React.useContext(ApplicationConceptBannerContext);

  /**
   * The PageContext value is either provided by a parent PageContainer or
   * a parent Page.
   */
  const pageContext = React.useContext(PageContext);

  /**
   * An unique identifier is generated for each Page to ensure it can be
   * safely registered with the PageContainerPortalManager.
   *
   * While the pageKey _might_ be sufficient, it is safer to create a separate,
   * guaranteed unique identifier here in case the pageKey prop were to change.
   */
  const nodeIdRef = React.useRef(uuidv4());

  /**
   * A NavigationPromptCheckpoint is used to detect unsaved changes within the Page's
   * content.
   */
  const navigationPromptCheckpointRef = React.useRef();

  /**
   * The presentation of loading overlays is tracked by the Page to allow it to
   * disable page actions while loading is occurring.
   */
  const [loadingOverlayIsActive, setLoadingOverlayIsActive] = React.useState(false);

  /**
   * Certain logic must be executed upon activation/presentation of a Page. Activation will trigger
   * an update of the component, where we can appropriately adjust focus or notify page changes based upon
   * other presentation state.
   */
  const [isActive, setIsActive] = React.useState(false);

  /**
   * A Provider/Presenter pair is generated for NotificationBanner presentation within in the Page to
   * limit updates to Page content due to banner presentation.
   */
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  if (!pageContext) {
    throw new Error(`[Page] ${title} was rendered outside of a PageContainer.`);
  }

  /**
   * The PageContext value is overridden by the Page to ensure a child Page has
   * access to this Page's key, which is required for portal element retrieval.
   */
  const childPageContextValue = React.useMemo(() => ({
    ...pageContext,
    parentNodeId: nodeIdRef.current,
  }), [pageContext]);

  /**
   * The Page must release the element into which it is portaled when it is unmounted
   * to prevent memory leaks.
   */
  React.useLayoutEffect(() => () => {
    pageContext.nodeManager.releaseNode({ nodeId: nodeIdRef.current });
  }, [pageContext.nodeManager]);

  /**
   * A unique id to generated for Page's rendered hidden text. This id is used by the
   * nodeManager to ensure the container element is properly described by the presented Page.
   */
  const pageTitleId = `page-title-${nodeIdRef.current}`;

  const portalNode = pageContext.nodeManager.getNode({
    nodeId: nodeIdRef.current,
    ancestorNodeId: pageContext.parentNodeId,
    setPageActive: (isPageActive) => {
      setTimeout(() => {
        setIsActive(isPageActive);
      }, 0);
    },
  });

  React.useLayoutEffect(() => {
    if (isActive && pageContext.pageContainerHasMounted && pageContext.pageContainer) {
      /**
       * Update the aria attributes on the root PageContainer element that is described by the current
       * active Page.
       */
      pageContext.pageContainer.setAttribute('aria-labelledby', pageTitleId);
    }
  }, [isActive, pageContext.pageContainerHasMounted, pageContext.pageContainer, pageTitleId]);

  React.useEffect(() => {
    if (!isActive) {
      /**
       * If the Page is not active within the PageContainer, we do not want to adjust the focus position.
       */
      return;
    }

    if (pageContext.isMainPage && navigationItem.isActive) {
      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else if (!pageContext.isMainPage && navigationItem.isActive) {
      setTimeout(() => { pageContext.pageContainer.focus(); }, 0);
    }
  }, [isActive, pageContext.isMainPage, navigationItem.isActive, pageContext.pageContainer]);

  React.useEffect(() => {
    /**
     * If the Page activates while visible and within a main PageContainer, an event is
     * emitted to notify interested parties of the activation.
     */
    if (isActive && pageContext.isMainPage && navigationItem.isActive) {
      setTimeout(() => {
        EventEmitter.emit('terra-application.main-page-activated', {
          pageKey,
          pageDescription: title,
          pageMetaData: metaData,
        });
      }, 0);
    }
  }, [isActive, pageContext.isMainPage, navigationItem.isActive, pageKey, title, metaData]);

  React.useEffect(() => {
    if (isActive && pageContext.isMainPage && navigationItem.isActive) {
      let documentTitle = `${title} | ${applicationContainer.applicationName}`;

      if (applicationConcept?.conceptDescription) {
        documentTitle = `${applicationConcept.conceptDescription}: ${documentTitle}`;
      }

      document.title = documentTitle;
    }
  }, [isActive, pageContext.isMainPage, navigationItem.isActive, pageKey, title, metaData, pageContext, applicationContainer.applicationName, applicationConcept]);

  if (!portalNode) {
    throw new Error(`[Page] ${title} could not be assigned portal element due to multiple Page renders at the same presentation layer.`);
  }

  function safelyRequestClose() {
    if (requestClosePromptIsDisabled) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }

  /**
   * The Page header will not be rendered if the consumer indicates that it should be hidden and no content exists for the header to present.
   * The title prop is excluded here, as it is required for proper ARIA descriptions and does not necessarily require header presence.
   */
  const headerShouldBeRendered = !preferHeaderIsHidden || actions || menu || onRequestClose || pageContext.containerStartActions || pageContext.containerEndActions;

  return (
    ReactDOM.createPortal((
      <div className={cx('page')}>
        <div className={cx('header')}>
          {headerShouldBeRendered && (
            <PageHeader
              onBack={onRequestClose && safelyRequestClose}
              title={title}
              actions={actions}
              menu={menu}
              hasLoadingOverlay={loadingOverlayIsActive}
            />
          )}
          {toolbar}
          <NotificationBanners />
        </div>
        <div className={cx('content')}>
          <PageContext.Provider value={childPageContextValue}>
            <NavigationPromptCheckpoint ref={navigationPromptCheckpointRef}>
              <NotificationBannerProvider>
                <ApplicationLoadingOverlayProvider onStateChange={(loadingOverlayIsPresented) => { setLoadingOverlayIsActive(loadingOverlayIsPresented); }}>
                  <ApplicationStatusOverlayProvider>
                    <div
                      tabIndex="0" // TODO validate need for this
                      className={cx('overflow-content', 'page-background')}
                      data-application-overflow-container
                    >
                      <div
                        className={cx('width-normalizer')}
                        data-application-overflow-container
                      >
                        <VisuallyHiddenText
                          aria-hidden
                          id={pageTitleId}
                          text={title}
                        />
                        {children}
                      </div>
                    </div>
                  </ApplicationStatusOverlayProvider>
                </ApplicationLoadingOverlayProvider>
              </NotificationBannerProvider>
            </NavigationPromptCheckpoint>
          </PageContext.Provider>
        </div>
      </div>
    ), portalNode)
  );
};

Page.propTypes = propTypes;

export default Page;
