import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import uuidv4 from 'uuid/v4';
import EventEmitter from 'eventemitter3';

import VisuallyHiddenText from 'terra-visually-hidden-text';
import ApplicationPageContext from './ApplicationPageContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import ApplicationModal from '../application-modal/ApplicationModal';
import { useNotificationBanners } from '../application-notification/NotificationBannerProvider';
import BannerRegistrationContext from '../application-notification/private/BannerRegistrationContext';

import PageHeader from './_PageHeader';

import styles from './ApplicationPage.module.scss';
import HeaderContainer from '../header-container/_HeaderContainer';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  title, actions, onRequestClose, children, disableNavigationPromptsOnBack,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pageContext = React.useContext(ApplicationPageContext);

  const navigationPromptCheckpointRef = React.useRef();
  const mainElementRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());
  const pageEventEmitter = React.useRef(new EventEmitter());

  const { bannerProviderValue, banners } = useNotificationBanners();

  const contextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    nodeManager: pageContext?.nodeManager,
    registerActionHandler: (actionKey, handler) => {
      pageEventEmitter.current.on(actionKey, handler);
    },
    removeActionHandler: (actionKey, handler) => {
      pageEventEmitter.current.off(actionKey, handler);
    },
  }), [pageContext]);

  React.useLayoutEffect(() => () => {
    if (contextValue.nodeManager) {
      contextValue.nodeManager.releaseNode(pageIdRef.current);
    }
  }, [contextValue]);

  let portalNode;
  if (contextValue.nodeManager) {
    portalNode = contextValue.nodeManager.getNode(pageIdRef.current, pageContext.ancestorPage);
  }

  // React.useLayoutEffect(() => {
  //   if (!portalNode && onFail) {
  //     onFail();
  //   }
  // }, [portalNode, onFail]);

  if (!portalNode) {
    return (
      <ApplicationModal
        title={title}
        actions={actions}
        onRequestClose={onRequestClose}
        size="large"
        modalClassName={cx('modal-page-container')}
      >
        {children}
      </ApplicationModal>
    );
  }

  function onSelectAction(action) {
    if (action.onSelect) {
      action.onSelect();
    }

    pageEventEmitter.current.emit(action.key, action);
  }

  function goBack() {
    if (disableNavigationPromptsOnBack) {
      onRequestClose();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onRequestClose();
    });
  }

  return (
    ReactDOM.createPortal((
      <HeaderContainer
        header={(
          <>
            <PageHeader onBack={onRequestClose && goBack} title={title} actions={actions} onSelectAction={onSelectAction} />
            {banners}
          </>
        )}
      >
        <ApplicationPageContext.Provider value={contextValue}>
          <NavigationPromptCheckpoint
            ref={navigationPromptCheckpointRef}
          >
            <BannerRegistrationContext.Provider value={bannerProviderValue}>
              <ApplicationErrorBoundary>
                <ApplicationLoadingOverlayProvider>
                  <main
                    id="application-page-main"
                    ref={mainElementRef}
                    tabIndex="-1"
                    role="main"
                    className={cx('main-container', 'page-background')}
                    aria-labelledby="application-page-title"
                  >
                    <VisuallyHiddenText
                      id="application-page-title"
                      aria-hidden
                      text={title}
                    />
                    {children}
                  </main>
                </ApplicationLoadingOverlayProvider>
              </ApplicationErrorBoundary>
            </BannerRegistrationContext.Provider>
          </NavigationPromptCheckpoint>
        </ApplicationPageContext.Provider>
      </HeaderContainer>
    ), portalNode)
  );
};

export default ApplicationPage;
