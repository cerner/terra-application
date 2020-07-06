import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';

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
// import { BreadcrumbsPageHeader as PageHeader } from './_PageHeader';

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

  return (
    ReactDOM.createPortal((
      <HeaderContainer
        header={(
          <>
            <PageHeader onBack={onRequestClose && goBack} title={title} actions={actions} backLinks={contextValue.backLinks} onSelectAction={onSelectAction} />
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
