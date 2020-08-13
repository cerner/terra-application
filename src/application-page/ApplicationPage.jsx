import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { KEY_TAB } from 'keycode-js';

import ApplicationPageContext from './ApplicationPageContext';
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
  const pageContext = React.useContext(ApplicationPageContext);

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

  const nodeManager = pageContext?.nodeManager;
  const contextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    ancestorTitle: title,
    backLinks: pageContext?.backLinks ? [...pageContext.backLinks, { title: pageContext.ancestorTitle, onRequestClose: goBack }] : [],
    nodeManager: pageContext?.nodeManager,
  }), [title, pageContext, goBack]);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, pageContext.ancestorPage);
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
          <ApplicationPageContext.Provider value={contextValue}>
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
          </ApplicationPageContext.Provider>
        </div>
      </main>
    ), portalNode)
  );
};

export default ApplicationPage;
