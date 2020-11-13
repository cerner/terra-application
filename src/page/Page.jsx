import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import { ApplicationIntlContext } from '../application-intl';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import { NavigationItemContext } from '../layouts';
import ActiveMainPageRegistrationContext from '../application-container/private/active-main-page/ActiveMainPageRegistrationContext';

import PageContext from './private/PageContext';
import PageHeader from './private/_PageHeader';
import PageActions from './PageActions';
import PageMenu from './PageMenu';

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
  label: PropTypes.string.isRequired,
  /**
   * An object containing generic data describing the content of the Page. The metaData will be accessible
   * by components who are notified of Page presentation changes.
   */
  metaData: PropTypes.object,
  /**
   * A PageActions instance defining the Actions to present within the Page's header. Only the PageActions
   * component can be provided.
   */
  actions: PropTypes.element,
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
   * The components to render within the context of the Page.
   */
  children: PropTypes.node,
};

const Page = ({
  pageKey,
  label,
  metaData,
  actions,
  menu,
  toolbar,
  onRequestClose,
  requestClosePromptIsDisabled,
  preferHeaderIsHidden,
  children,
}) => {
  if (actions && actions.type !== PageActions) {
    throw new Error(`[terra-application] Page ${label} provided with invalid actions prop. Only PageActions is supported.`);
  }

  if (menu && menu.type !== PageMenu) {
    throw new Error(`[terra-application] Page ${label} provided with invalid menu prop. Only PageMenu is supported.`);
  }

  const applicationIntl = React.useContext(ApplicationIntlContext);
  const navigationItem = React.useContext(NavigationItemContext);
  const activeMainPageRegistration = React.useContext(ActiveMainPageRegistrationContext);

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
    throw new Error(`[terra-application] Page ${label} was rendered outside of a PageContainer.`);
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
  const pageLabelId = `page-label-${nodeIdRef.current}`;

  const portalNode = pageContext.nodeManager.getNode({
    nodeId: nodeIdRef.current,
    ancestorNodeId: pageContext.parentNodeId,
    setPageActive: setIsActive,
  });

  React.useLayoutEffect(() => {
    if (isActive && pageContext.pageContainerHasMounted && pageContext.pageContainer) {
      /**
       * Update the aria attributes on the root PageContainer element that is described by the current
       * active Page.
       */
      pageContext.pageContainer.setAttribute('aria-labelledby', pageLabelId);
    }
  }, [isActive, pageContext.pageContainerHasMounted, pageContext.pageContainer, pageLabelId]);

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
      const unregisterPage = activeMainPageRegistration.registerActiveMainPage(pageKey, label, metaData, navigationItem.navigationKeys);

      return unregisterPage;
    }

    return undefined;
  }, [isActive, pageContext.isMainPage, navigationItem.isActive, navigationItem.navigationKeys, pageKey, label, metaData, activeMainPageRegistration]);

  if (!portalNode) {
    throw new Error(`[terra-application] Page ${label} could not be assigned portal element due to multiple Page renders at the same presentation layer.`);
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
   * The label prop is excluded here, as it is required for proper ARIA descriptions and does not necessarily require header presence.
   */
  const headerShouldBeRendered = !preferHeaderIsHidden || actions || menu || onRequestClose || pageContext.containerStartActions || pageContext.containerEndActions;

  return (
    ReactDOM.createPortal((
      <div className={cx('page')}>
        <div className={cx('header')}>
          {headerShouldBeRendered && (
            <PageHeader
              onBack={onRequestClose && safelyRequestClose}
              label={label}
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
                          id={pageLabelId}
                          text={label}
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
