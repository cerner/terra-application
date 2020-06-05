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

import PageLayoutHeader from './PageLayoutHeader';

import styles from './PageLayout.module.scss';

const cx = classNames.bind(styles);

const PageLayout = ({
  pageTitle, pageActions, onBack, onFail, children,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pageContext = React.useContext(ApplicationPageContext);

  const navigationPromptCheckpointRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());
  const pageEventEmitter = React.useRef(new EventEmitter());

  function goBack() {
    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onBack();
    });
  }

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
    contextValue.nodeManager.releaseNode(pageIdRef.current);
  }, [contextValue]);

  const portalNode = contextValue.nodeManager.getNode(pageIdRef.current, pageContext.ancestorPage);

  React.useLayoutEffect(() => {
    if (!portalNode && onFail) {
      onFail();
    }
  }, [portalNode, onFail]);

  if (!portalNode) {
    return null;
  }

  function onSelectAction(action) {
    if (action.onSelect) {
      action.onSelect();
    }

    pageEventEmitter.current.emit(action.key, action);
  }

  return (
    ReactDOM.createPortal((
      <ContentContainer
        fill
        header={<PageLayoutHeader onBack={onBack && goBack} title={pageTitle} actions={pageActions} onSelectAction={onSelectAction} />}
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

export default PageLayout;
