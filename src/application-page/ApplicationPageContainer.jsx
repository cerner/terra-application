import React from 'react';
import classNames from 'classnames/bind';

import ApplicationPageContext from './ApplicationPageContext';
import ResizeHandle from './workspace/ResizeHandle';

import styles from './ApplicationPageContainer.module.scss';
import MockWorkspace from './workspace/MockWorkspace';

const cx = classNames.bind(styles);

class PageLayoutNodeManager {
  constructor(containerRef) {
    this._containerRef = containerRef;
    this._nodeMap = {};
  }

  hideAncestors(key) {
    if (!this._containerRef.current) {
      return;
    }

    const nodeData = this._nodeMap[key];

    if (!nodeData) {
      return;
    }

    if (this._containerRef.current.contains(nodeData.element)) {
      nodeData.lastScrollPosition = nodeData.element.querySelector('#application-page-main').scrollTop;
      this._containerRef.current.removeChild(nodeData.element);
    }

    if (nodeData.ancestor) {
      this.hideAncestors(nodeData.ancestor);
    }
  }

  getNode(pageKey, ancestorPageKey) {
    if (!this._containerRef.current) {
      return;
    }

    const existingNode = this._nodeMap[pageKey];

    if (existingNode) {
      return existingNode.element;
    }

    if (this._nodeMap[ancestorPageKey]?.child) {
      // duplicate page request
      return undefined;
    }

    const newPortalElement = document.createElement('div');
    newPortalElement.style.position = 'relative';
    newPortalElement.style.height = '100%';
    newPortalElement.style.width = '100%';

    this._nodeMap[pageKey] = {
      ancestor: ancestorPageKey,
      element: newPortalElement,
      child: undefined,
    };

    if (this._nodeMap[ancestorPageKey]) {
      this._nodeMap[ancestorPageKey].child = pageKey;
    }

    this._containerRef.current.appendChild(newPortalElement);
    this.hideAncestors(ancestorPageKey);

    setTimeout(() => {
      document.body.focus();
    }, 0);

    return newPortalElement;
  }

  releaseNode(pageKey) {
    if (!this._containerRef.current) {
      return;
    }

    const page = this._nodeMap[pageKey];

    if (!page) {
      return;
    }

    if (this._containerRef.current.contains(page.element)) {
      this._containerRef.current.removeChild(page.element);
    }

    if (this._nodeMap[page.ancestor]) {
      this._nodeMap[page.ancestor].child = undefined;
      this._containerRef.current.appendChild(this._nodeMap[page.ancestor].element);
      this._nodeMap[page.ancestor].element.querySelector('#application-page-main').scrollTop = this._nodeMap[page.ancestor].lastScrollPosition;
    }

    setTimeout(() => {
      document.body.focus();
    }, 0);

    this._nodeMap[pageKey] = undefined;
  }
}

const ApplicationPageContainer = ({
  children, enableWorkspace,
}) => {
  const [workspaceSize, setWorkspaceSize] = React.useState(200);

  const pageLayoutContainerRef = React.useRef();

  const [isInitialized, setIsInitialized] = React.useState();

  const contextValue = React.useMemo(() => ({
    nodeManager: new PageLayoutNodeManager(pageLayoutContainerRef),
  }), []);

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <div className={cx('container')}>
      <div
        ref={pageLayoutContainerRef}
        className={cx('body')}
      >
        <ApplicationPageContext.Provider value={contextValue}>
          {isInitialized && children}
        </ApplicationPageContext.Provider>
      </div>
      {enableWorkspace && (
      <div className={cx('workspace')} style={{ width: `${workspaceSize}px` }}>
        <div
          style={{
            height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
          }}
        >
          <MockWorkspace />
        </div>
        <ResizeHandle
          onResizeStop={(position) => {
            setWorkspaceSize((currentSize) => {
              let newSize = currentSize + -1 * position;

              if (newSize < 50) {
                newSize = 50;
              } else if (newSize > 500) {
                newSize = 500;
              }

              return newSize;
            });
          }}
        />
      </div>
      )}
    </div>
  );
};

export default ApplicationPageContainer;
export { PageLayoutNodeManager };
