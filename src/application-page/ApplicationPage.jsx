import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { KEY_TAB } from 'keycode-js';

import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import PagePortalContext from './private/PagePortalContext';
import MainContainer from './container/MainContainer';
import PageHeader from './private/_PageHeader';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  title, actions, menu, toolbar, onRequestClose, children, disableNavigationPromptsOnBack, pageKey, onVisibilityChange,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pagePortalContext = React.useContext(PagePortalContext);

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

  const nodeManager = pagePortalContext?.nodeManager;
  const contextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    ancestorTitle: title,
    backLinks: pagePortalContext?.backLinks ? [...pagePortalContext.backLinks, { title: pagePortalContext.ancestorTitle, onRequestClose: goBack }] : [],
    nodeManager: pagePortalContext?.nodeManager,
    isMain: pagePortalContext.isMain,
  }), [title, pagePortalContext, goBack]);

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

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, pagePortalContext.ancestorPage, setIsVisible);
  }

  if (!nodeManager) {
    return null;
  }

  const RootElement = pagePortalContext.isMain ? MainContainer : 'div';

  const pageTitleId = `application-page-title-${pageIdRef.current}`;

  return (
    ReactDOM.createPortal((
      <RootElement
        className={cx('page')}
        aria-labelledby={pageTitleId}
        tabIndex="0"
        onMouseDown={() => { setShowOverflowFocus(false); }}
        onKeyDown={(event) => {
          if (event.nativeEvent.keyCode === KEY_TAB) {
            setShowOverflowFocus(true);
          }
        }}
        isVisible={isVisible}
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
          <PagePortalContext.Provider value={contextValue}>
            <NavigationPromptCheckpoint
              ref={navigationPromptCheckpointRef}
            >
              <NotificationBannerProvider>
                <ApplicationErrorBoundary>
                  <ApplicationLoadingOverlayProvider>
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
                  </ApplicationLoadingOverlayProvider>
                </ApplicationErrorBoundary>
              </NotificationBannerProvider>
            </NavigationPromptCheckpoint>
          </PagePortalContext.Provider>
        </div>
      </RootElement>
    ), portalNode)
  );
};

export default ApplicationPage;
