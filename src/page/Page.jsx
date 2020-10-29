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

import PageContext from './private/PageContext';
import PageHeader from './private/_PageHeader';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string description of the Page to present to the user.
   */
  title: PropTypes.string.isRequired,
  /**
   * An array of objects defining the Page actions to present to the user.
   */
  actions: PropTypes.arrayOf(PropTypes.shape({

  })),
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
};

const Page = ({
  title,
  actions,
  menu,
  toolbar,
  onRequestClose,
  children,
  requestClosePromptIsDisabled,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);

  /**
   * The PageContext value is either provided by a parent PageContainer or
   * a parent Page.
   */
  const pageContext = React.useContext(PageContext);

  /**
   * An unique identifier is generated for each Page to ensure it can be
   * safely registered with the PageContainerPortalManager.
   */
  const pageIdRef = React.useRef(uuidv4());

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
    parentPageKey: pageIdRef.current,
  }), [pageContext]);

  /**
   * The Page must release the element into which it is portaled when it is unmounted
   * to prevent memory leaks.
   */
  React.useLayoutEffect(() => () => {
    pageContext.nodeManager.releaseNode(pageIdRef.current);
  }, [pageContext.nodeManager]);

  /**
   * A unique id to generated for Page's rendered hidden text. This id is used by the
   * nodeManager to ensure the container element is properly described by the presented Page.
   */
  const pageTitleId = `page-title-${pageIdRef.current}`;

  const portalNode = pageContext.nodeManager.getNode(pageIdRef.current, pageContext.parentPageKey, pageTitleId);

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

  return (
    ReactDOM.createPortal((
      <div className={cx('page')}>
        <div className={cx('header')}>
          <PageHeader
            onBack={onRequestClose && safelyRequestClose}
            title={title}
            actions={actions}
            menu={menu}
            hasLoadingOverlay={loadingOverlayIsActive}
          />
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
                      data-page-overflow-container
                      tabIndex="0"
                      className={cx('overflow-content', 'page-background')}
                    >
                      <div className={cx('width-normalizer')}>
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
