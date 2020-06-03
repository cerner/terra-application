import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import uuidv4 from 'uuid/v4';

import ApplicationPageContext from './ApplicationPageContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';

import PageLayoutHeader from './PageLayoutHeader';

import styles from './PageLayout.module.scss';

const cx = classNames.bind(styles);

class PageLayoutNodeManager {
  constructor(containerRef) {
    this._containerRef = containerRef;
    this._nodeMap = {};
  }

  getNode(pageKey, ancestorPageKey) {
    const existingNode = this._nodeMap[pageKey];

    if (existingNode) {
      return existingNode.element;
    }

    if (this._nodeMap[ancestorPageKey]?.child) {
      // duplicate page request
      return undefined;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.zIndex = 1;
    newPortalElement.style.position = 'absolute';
    newPortalElement.style.top = 0;
    newPortalElement.style.bottom = 0;
    newPortalElement.style.left = 0;
    newPortalElement.style.right = 0;
    newPortalElement.style.backgroundColor = 'white';

    this._nodeMap[pageKey] = {
      ancestor: ancestorPageKey,
      element: newPortalElement,
      child: undefined,
    };

    if (this._nodeMap[ancestorPageKey]) {
      this._nodeMap[ancestorPageKey].child = pageKey;
    }

    this._containerRef.current.appendChild(newPortalElement);

    return newPortalElement;
  }

  releaseNode(pageKey) {
    const page = this._nodeMap[pageKey];

    if (this._containerRef.current.contains(page.element)) {
      this._containerRef.current.removeChild(page.element);
    }

    if (this._nodeMap[page.ancestor]) {
      this._nodeMap[page.ancestor].child = undefined;
    }

    this._nodeMap[pageKey] = undefined;
  }
}

const PageLayout = ({
  pageTitle, onBack, onFail, children,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const pageContext = React.useContext(ApplicationPageContext);

  const pageLayoutContainerRef = React.useRef();
  const navigationPromptCheckpointRef = React.useRef();
  const pageIdRef = React.useRef(uuidv4());

  const [isInitialized, setIsInitialized] = React.useState();

  function goBack() {
    navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      onBack();
    });
  }

  const contextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    nodeManager: pageContext?.nodeManager || new PageLayoutNodeManager(pageLayoutContainerRef),
  }), [pageContext]);

  function renderPageContent() {
    const portalNode = contextValue.nodeManager.getNode(pageIdRef.current);

    return (
      ReactDOM.createPortal((
        <ContentContainer
          fill
          header={<PageLayoutHeader onBack={onBack && goBack} title={pageTitle} />}
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
  }

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  React.useLayoutEffect(() => () => {
    contextValue.nodeManager.releaseNode(pageIdRef.current);
  }, [contextValue]);

  if (pageContext) {
    return renderPageContent();
  }

  return (
    <div
      ref={pageLayoutContainerRef}
      style={{
        height: '100%', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: 'white',
      }}
    >
      {isInitialized && renderPageContent()}
    </div>
  );
};

export default PageLayout;
