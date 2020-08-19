import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';
import Button, { ButtonVariants } from 'terra-button';
import ActionHeader from 'terra-action-header';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
import IconLeftPane from 'terra-icon/lib/icon/IconLeftPane';

import { ActiveBreakpointContext } from '../breakpoints';

import BasePageContainer from './_BasePageContainer';
import PageContainerContext from './PageContainerContext';
import ResizeHandle from './workspace/ResizeHandle';
import MockWorkspace from './workspace/MockWorkspace';

import styles from './NavigationPageContainer.module.scss';

const cx = classNames.bind(styles);

const flatLayoutBreakpoints = ['medium', 'large', 'huge', 'enormous'];

const propTypes = {};

const DefaultSideNavPanel = ({ activePageKey, onRequestActivatePage, items }) => (
  <ContentContainer
    header={<ActionHeader title="Side Nav" />}
    fill
  >
    <List dividerStyle="standard" role="listbox" aria-label="It's Side Navigation">
      {items.map((item) => (
        <ListItem
          key={item.key}
          isSelectable
          isSelected={activePageKey === item.key}
          onSelect={() => {
            onRequestActivatePage(item.key);
          }}
        >
          <div style={{ padding: '1rem' }}>{item.text}</div>
        </ListItem>
      ))}
    </List>
  </ContentContainer>
);

const NavigationPageContainer = ({
  sidebar, activePageKey, children, onRequestActivatePage, enableWorkspace,
}) => {
  const hasSidebar = React.Children.count(children) > 1;

  const [workspaceSize, setWorkspaceSize] = React.useState('small');
  const [showGridlines, setShowGridlines] = React.useState(false);

  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const isOverlayLayout = !flatLayoutBreakpoints.includes(activeBreakpoint) || (activeBreakpoint === 'medium' && (workspaceSize === 'large' || workspaceSize === 'medium'));

  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(!isOverlayLayout);
  const [sideNavIsVisible, setSideNavIsVisible] = React.useState(!isOverlayLayout);

  const sideNavBodyRef = React.useRef();
  const sideNavPanelRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActivePageKeyRef = React.useRef();

  const pageContainerContextValue = React.useMemo(() => ({
    rightActionComponent: enableWorkspace ? (
      <Button
        icon={workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />}
        text="Toggle Workspace"
        onClick={() => { setWorkspaceIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
    leftActionComponent: hasSidebar ? (
      <Button
        icon={<IconLeftPane />}
        text="Toggle Side Nav"
        onClick={() => { setSideNavIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : null,
  }), [enableWorkspace, workspaceIsVisible, hasSidebar]);

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activePageKey];

    if (!sideNavBodyRef.current) {
      return;
    }

    if (sideNavBodyRef.current.contains(pageNodeForActivePage?.element)) {
      return;
    }

    if (lastActivePageKeyRef.current) {
      pageContainerPortalsRef.current[lastActivePageKeyRef.current].scrollOffset = pageContainerPortalsRef.current[lastActivePageKeyRef.current].element.querySelector('#application-page-main')?.scrollTop || 0;
      sideNavBodyRef.current.removeChild(pageContainerPortalsRef.current[lastActivePageKeyRef.current].element);
    }

    if (pageNodeForActivePage?.element) {
      sideNavBodyRef.current.appendChild(pageNodeForActivePage.element);

      const pageMainElement = pageNodeForActivePage.element.querySelector('#application-page-main');
      if (pageMainElement) {
        pageMainElement.scrollTop = pageNodeForActivePage.scrollOffset || 0;
      }

      lastActivePageKeyRef.current = activePageKey;

      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else {
      lastActivePageKeyRef.current = undefined;
    }
  }, [activePageKey]);

  React.useEffect(() => {
    if (activePageKey) {
      return;
    }

    const pageKeys = React.Children.map(children, (child) => (child.props.pageKey));

    // Cleanup nodes for removed children
    const danglingPageKeys = Object.keys(pageContainerPortalsRef.current).filter((pageKey) => !pageKeys.includes(pageKey));
    danglingPageKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });

    onRequestActivatePage(pageKeys[0]);
  }, [activePageKey, activeBreakpoint, children, onRequestActivatePage]);

  React.useEffect(() => {
    if (flatLayoutBreakpoints.includes(activeBreakpoint)) {
      return undefined;
    }

    const closeOpenOverlays = () => {
      setSideNavIsVisible(false);
      setWorkspaceIsVisible(false);
    };

    window.addEventListener('resize', closeOpenOverlays);

    return () => {
      window.removeEventListener('resize', closeOpenOverlays);
    };
  }, [activeBreakpoint]);

  function activatePage(pageKey) {
    if (isOverlayLayout) {
      setSideNavIsVisible(false);
    }

    if (pageKey === activePageKey) {
      return;
    }

    onRequestActivatePage(pageKey);
  }

  return (
    <div
      className={cx('side-nav-container', { 'workspace-visible': workspaceIsVisible, [`workspace-${workspaceSize}`]: enableWorkspace })}
    >
      <div
        ref={sideNavPanelRef}
        className={cx('side-nav-sidebar', { visible: sideNavIsVisible && hasSidebar, overlay: isOverlayLayout })}
      >
        {sidebar || (
          <DefaultSideNavPanel
            activePageKey={activePageKey}
            onRequestActivatePage={activatePage}
            items={React.Children.map(children, (child) => ({ key: child.props.pageKey, text: child.props.description }))}
          />
        )}
      </div>
      <div ref={sideNavBodyRef} className={cx('side-nav-body')}>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          {React.Children.map(children, (child) => {
            let portalElement = pageContainerPortalsRef.current[child.props.pageKey]?.element;
            if (!portalElement) {
              portalElement = document.createElement('div');
              portalElement.style.position = 'relative';
              portalElement.style.height = '100%';
              portalElement.style.width = '100%';
              portalElement.id = `side-nav-${child.props.pageKey}`;
              pageContainerPortalsRef.current[child.props.pageKey] = {
                element: portalElement,
              };
            }

            return (
              React.cloneElement(child, {
                isActive: child.props.pageKey === activePageKey, portalElement, enableWorkspace,
              })
            );
          })}

        </PageContainerContext.Provider>
      </div>
      {enableWorkspace && (
        <div
          className={cx('workspace', { visible: workspaceIsVisible, overlay: isOverlayLayout })}
        >
          <div
            style={{
              height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
            }}
          >
            <MockWorkspace workspaceSize={workspaceSize} onUpdateSize={(size) => { setWorkspaceSize(size); }} onDismiss={() => { setWorkspaceIsVisible(false); }} />
          </div>
          {!isOverlayLayout ? (
            <ResizeHandle
              onResizeStart={() => { setShowGridlines(true); }}
              onResizeMove={(resizeElement) => {
              }}
              onResizeStop={(position) => {
                setShowGridlines(false);
              }}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

NavigationPageContainer.propTypes = propTypes;

const NavigationPage = ({
  isActive, children, render, portalElement, preload,
}) => {
  const hasActivatedRef = React.useRef(isActive || preload);

  React.useEffect(() => {
    if (isActive || preload) {
      hasActivatedRef.current = true;
    }
  }, [isActive, preload]);

  if (!isActive && !preload && !hasActivatedRef.current) {
    return null;
  }

  let pageContent;

  if (render) {
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  return ReactDOM.createPortal((
    <BasePageContainer>
      {pageContent}
    </BasePageContainer>
  ), portalElement);
};

export default NavigationPageContainer;
export { NavigationPage };
