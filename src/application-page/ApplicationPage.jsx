import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import uuidv4 from 'uuid/v4';
import EventEmitter from 'eventemitter3';

import ApplicationPageContext from './ApplicationPageContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import Modal from '../modal/Modal';

import PageHeader from './_PageHeader';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  pageTitle, pageActions, onBack, children, disableNavigationPromptsOnBack,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pageContext = React.useContext(ApplicationPageContext);

  const navigationPromptCheckpointRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());
  const pageEventEmitter = React.useRef(new EventEmitter());

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
      <Modal title={pageTitle} actions={pageActions} onRequestClose={onBack} disableNavigationPromptsOnBack size="large">
        {children}
      </Modal>
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
      onBack();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onBack();
    });
  }

  return (
    ReactDOM.createPortal((
      <ContentContainer
        fill
        header={<PageHeader onBack={onBack && goBack} title={pageTitle} actions={pageActions} onSelectAction={onSelectAction} />}
      >
        <ApplicationPageContext.Provider value={contextValue}>
          <NavigationPromptCheckpoint
            ref={navigationPromptCheckpointRef}
          >
            <ApplicationErrorBoundary>
              <ApplicationLoadingOverlayProvider>
                {children}
              </ApplicationLoadingOverlayProvider>
            </ApplicationErrorBoundary>
          </NavigationPromptCheckpoint>
        </ApplicationPageContext.Provider>
      </ContentContainer>
    ), portalNode)
  );
};

export default ApplicationPage;
