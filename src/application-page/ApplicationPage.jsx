import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { KEY_TAB } from 'keycode-js';

import PagePortalContext from '../page-container/PagePortalContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { useNotificationBanners } from '../application-notification/NotificationBannerProvider';
import BannerRegistrationContext from '../application-notification/private/BannerRegistrationContext';

import PageHeader from './_PageHeader';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  title, actions, toolbar, onRequestClose, children, disableNavigationPromptsOnBack,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pagePortalContext = React.useContext(PagePortalContext);

  const navigationPromptCheckpointRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());

  const [showOverflowFocus, setShowOverflowFocus] = React.useState(false);

  const { bannerProviderValue, banners } = useNotificationBanners();

  function onSelectAction(action) {
    if (action.onSelect) {
      action.onSelect();
    }
  }

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
  }), [title, pagePortalContext, goBack]);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, pagePortalContext.ancestorPage);
  }

  if (!nodeManager) {
    return null;
  }

  return (
    ReactDOM.createPortal((
      <main
        className={cx('page')}
        aria-labelledby="application-page-title"
        tabIndex="0"
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
            backLinks={contextValue.backLinks}
            onSelectAction={onSelectAction}
            onToggleWorkspace={() => {}}
            onToggleNavigation={() => {}}
          />
          {toolbar}
          {banners}
        </div>
        <div className={cx('content')}>
          <PagePortalContext.Provider value={contextValue}>
            <NavigationPromptCheckpoint
              ref={navigationPromptCheckpointRef}
            >
              <BannerRegistrationContext.Provider value={bannerProviderValue}>
                <ApplicationErrorBoundary>
                  <ApplicationLoadingOverlayProvider>
                    <div
                      id="application-page-main"
                      tabIndex="0"
                      className={cx('overflow-content', 'page-background', { 'show-focus': showOverflowFocus })}
                    >
                      <div className={cx('width-normalizer')}>
                        <VisuallyHiddenText
                          id="application-page-title"
                          aria-hidden
                          text={title}
                        />
                        {children}
                      </div>
                    </div>
                  </ApplicationLoadingOverlayProvider>
                </ApplicationErrorBoundary>
              </BannerRegistrationContext.Provider>
            </NavigationPromptCheckpoint>
          </PagePortalContext.Provider>
        </div>
      </main>
    ), portalNode)
  );
};

export default ApplicationPage;
