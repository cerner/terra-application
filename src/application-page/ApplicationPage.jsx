import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { KEY_TAB } from 'keycode-js';

import { ApplicationIntlContext } from '../application-intl';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';

import PagePortalContext from './private/PagePortalContext';
import PageHeader from './private/_PageHeader';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  title, actions, menu, toolbar, onRequestClose, children, disableNavigationPromptsOnBack, pageKey, onVisibilityChange,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const ancestorPagePortalContext = React.useContext(PagePortalContext);

  const navigationPromptCheckpointRef = React.useRef();
  const pageIdRef = React.useRef(pageKey || uuidv4());

  const [showOverflowFocus, setShowOverflowFocus] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  const goBack = useCallback(() => {
    if (disableNavigationPromptsOnBack) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }, [disableNavigationPromptsOnBack, applicationIntl, onRequestClose]);

  const nodeManager = ancestorPagePortalContext?.nodeManager;
  const pagePortalContextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    ancestorTitle: title,
    backLinks: ancestorPagePortalContext?.backLinks ? [...ancestorPagePortalContext.backLinks, { title: ancestorPagePortalContext.ancestorTitle, onRequestClose: goBack }] : [],
    nodeManager: ancestorPagePortalContext?.nodeManager,
    isMain: ancestorPagePortalContext.isMain,
  }), [title, ancestorPagePortalContext, goBack]);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  React.useLayoutEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(isVisible);
    }
  }, [isVisible, onVisibilityChange]);

  const pageTitleId = `application-page-title-${pageIdRef.current}`;

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, ancestorPagePortalContext.ancestorPage, setIsVisible, pageTitleId);
  }

  if (!nodeManager || !portalNode) {
    throw new Error(`[ApplicationPage] $${title} could not be rendered`);
  }

  return (
    ReactDOM.createPortal((
      <div
        className={cx('page')}
        // aria-labelledby={pageTitleId}
        onMouseDown={() => { setShowOverflowFocus(false); }}
        onKeyDown={(event) => {
          if (event.nativeEvent.keyCode === KEY_TAB) {
            setShowOverflowFocus(true);
          }
        }}
      >
        <div className={cx('header')}>
          <PageHeader
            onBack={onRequestClose && goBack}
            title={title}
            actions={actions}
            menu={menu}
          />
          {toolbar}
          <NotificationBanners />
        </div>
        <div className={cx('content')}>
          <PagePortalContext.Provider value={pagePortalContextValue}>
            <NavigationPromptCheckpoint
              ref={navigationPromptCheckpointRef}
            >
              <NotificationBannerProvider>
                <ApplicationLoadingOverlayProvider>
                  <ApplicationStatusOverlayProvider>
                    <div
                      data-page-overflow-container
                      tabIndex="0"
                      className={cx('overflow-content', 'page-background', { 'show-focus': showOverflowFocus })}
                    >
                      <div className={cx('width-normalizer')}>
                        <VisuallyHiddenText
                          id={pageTitleId}
                          aria-hidden
                          text={title}
                        />
                        {children}
                      </div>
                    </div>
                  </ApplicationStatusOverlayProvider>
                </ApplicationLoadingOverlayProvider>
              </NotificationBannerProvider>
            </NavigationPromptCheckpoint>
          </PagePortalContext.Provider>
        </div>
      </div>
    ), portalNode)
  );
};

export default ApplicationPage;
