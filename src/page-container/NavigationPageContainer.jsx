import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
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
import CollapsingNavigationMenu from './side-nav/CollapsingNavigationMenu';

import styles from './NavigationPageContainer.module.scss';

const cx = classNames.bind(styles);

const sideNavOverlayBreakpoints = ['tiny', 'small', 'medium'];

const propTypes = {};

const DefaultSideNavPanel = ({
  activePageKey, onRequestActivatePage, items, onDismiss,
}) => (
  <ContentContainer
    header={<ActionHeader title="Side Nav" onBack={onDismiss} />}
    fill
  >
    <CollapsingNavigationMenu
      selectedPath={activePageKey}
      onSelect={(key) => { onRequestActivatePage(key); }}
      menuItems={[{
        childItems: items.map((item) => ({
          text: item.text,
          name: item.text,
          path: item.key,
        })),
      }]}
    />
  </ContentContainer>
);

const initialSizeForBreakpoint = (breakpoint) => {
  if (breakpoint === 'tiny' || breakpoint === 'small') {
    return {
      scale: undefined,
      type: undefined,
    };
  }

  if (breakpoint === 'medium') {
    return {
      scale: undefined,
      type: 'split',
    };
  }

  return {
    scale: 0,
    type: undefined,
  };
};

const NavigationPageContainer = ({
  sidebar, activePageKey, children, onRequestActivatePage, enableWorkspace,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const pageContainerRef = React.useRef();
  const sideNavBodyRef = React.useRef();
  const pageBodyRef = React.useRef();
  const sideNavPanelRef = React.useRef();
  const workspacePanelRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActivePageKeyRef = React.useRef();
  const workspaceResizeBoundsRef = React.useRef();
  const resizeOverlayRef = React.useRef();
  const sideNavOverlayRef = React.useRef();
  const workspaceOverlayRef = React.useRef();
  const lastActiveSizeRef = React.useRef();

  const userSelectedTypeRef = React.useRef();
  const userSelectedScaleRef = React.useRef(0);
  const [workspaceSize, setWorkspaceSize] = React.useState(initialSizeForBreakpoint(activeBreakpoint));

  const [sideNavOverlayIsVisible, setSideNavOverlayIsVisible] = React.useState(false);
  const hasSidebar = React.Children.count(children) > 1;
  const hasOverlaySidebar = sideNavOverlayBreakpoints.indexOf(activeBreakpoint) !== -1;
  const sideNavIsVisible = hasSidebar && (sideNavOverlayIsVisible || sideNavOverlayBreakpoints.indexOf(activeBreakpoint) === -1);

  const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(enableWorkspace && !hasOverlayWorkspace);

  const pageContainerContextValue = React.useMemo(() => ({
    rightActionComponent: enableWorkspace ? (
      <Button
        icon={workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />}
        text="Toggle Workspace"
        onClick={() => { setWorkspaceIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
    leftActionComponent: hasSidebar && hasOverlaySidebar ? (
      <Button
        icon={<IconLeftPane />}
        text="Toggle Side Nav"
        onClick={() => { setSideNavOverlayIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : null,
  }), [enableWorkspace, workspaceIsVisible, hasSidebar, hasOverlaySidebar]);

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activePageKey];

    if (!pageBodyRef.current) {
      return;
    }

    if (pageBodyRef.current.contains(pageNodeForActivePage?.element)) {
      return;
    }

    if (lastActivePageKeyRef.current) {
      pageContainerPortalsRef.current[lastActivePageKeyRef.current].scrollOffset = pageContainerPortalsRef.current[lastActivePageKeyRef.current].element.querySelector('#application-page-main')?.scrollTop || 0;
      pageBodyRef.current.removeChild(pageContainerPortalsRef.current[lastActivePageKeyRef.current].element);
    }

    if (pageNodeForActivePage?.element) {
      pageBodyRef.current.appendChild(pageNodeForActivePage.element);

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
    const pageKeys = React.Children.map(children, (child) => (child.props.pageKey));

    // Cleanup nodes for removed children
    const danglingPageKeys = Object.keys(pageContainerPortalsRef.current).filter((pageKey) => !pageKeys.includes(pageKey));
    danglingPageKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });
  }, [children]);

  React.useEffect(() => {
    if (!lastActiveSizeRef.current) {
      lastActiveSizeRef.current = activeBreakpoint;
      return;
    }

    if (lastActiveSizeRef.current === activeBreakpoint) {
      return;
    }

    lastActiveSizeRef.current = activeBreakpoint;

    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
      setWorkspaceSize({
        scale: undefined,
        type: undefined,
      });
    } else if (activeBreakpoint === 'medium') {
      const scale = userSelectedScaleRef.current || workspaceSize.scale;

      if (scale === undefined || scale <= 0.5) {
        setWorkspaceSize({
          scale: undefined,
          type: 'split',
        });
      } else if (scale > 0.5) {
        setWorkspaceSize({
          scale: undefined,
          type: 'overlay',
        });
      }
    } else if (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') {
      setWorkspaceSize({
        scale: userSelectedScaleRef.current || 0,
        type: undefined,
      });
    }
  }, [workspaceSize, activeBreakpoint]);

  React.useEffect(() => {
    if (sideNavOverlayIsVisible) {
      sideNavPanelRef.current.focus();
    }
  }, [sideNavOverlayIsVisible]);

  const workspaceOverlayIsOpen = workspaceIsVisible && hasOverlayWorkspace;
  React.useEffect(() => {
    if (workspaceOverlayIsOpen) {
      console.log('hi mom');
      workspacePanelRef.current.focus();
    }
  }, [workspaceOverlayIsOpen]);

  function activatePage(pageKey) {
    setSideNavOverlayIsVisible(false);

    if (pageKey === activePageKey) {
      return;
    }

    onRequestActivatePage(pageKey);
  }

  return (
    <div
      className={cx('side-nav-container', { 'workspace-visible': workspaceIsVisible, [`workspace-${workspaceSize.size}`]: workspaceSize.size && !workspaceSize.px, [`workspace-${workspaceSize.type}`]: workspaceSize.type && !workspaceSize.px })}
      ref={pageContainerRef}
    >
      <div
        ref={resizeOverlayRef}
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          zIndex: '3', // 3 is very important for safari
          display: 'none',
          cursor: 'col-resize',
        }}
      />
      <div
        ref={sideNavPanelRef}
        className={cx('side-nav-sidebar', { visible: hasSidebar && sideNavIsVisible, overlay: hasOverlaySidebar })}
        tabIndex="-1"
      >
        {sidebar || (hasSidebar && (
          <DefaultSideNavPanel
            onDismiss={sideNavOverlayIsVisible ? () => { setSideNavOverlayIsVisible(false); } : undefined}
            activePageKey={activePageKey}
            onRequestActivatePage={activatePage}
            items={React.Children.map(children, (child) => ({ key: child.props.pageKey, text: child.props.description }))}
          />
        ))}
      </div>
      <div ref={sideNavBodyRef} className={cx('side-nav-body')}>
        <div
          ref={pageBodyRef}
          className={cx('page-body')}
          style={workspaceSize.scale !== undefined && workspaceIsVisible ? { flexGrow: `${1 - workspaceSize.scale}` } : null} // TODO add IE flex styles
          inert={sideNavOverlayIsVisible || (hasOverlayWorkspace && workspaceIsVisible) ? 'true' : null}
        >
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
            ref={workspacePanelRef}
            className={cx('workspace', { visible: workspaceIsVisible, overlay: activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay' })}
            style={workspaceSize.scale !== undefined ? { flexGrow: `${workspaceSize.scale}` } : null}
            inert={sideNavOverlayIsVisible ? 'true' : null}
            tabIndex="-1"
          >
            <div
              style={{
                height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
              }}
            >
              <MockWorkspace
                workspaceSize={workspaceSize.type}
                workspaceCustomSize={workspaceSize.scale}
                onUpdateSize={(size) => {
                  userSelectedTypeRef.current = undefined;

                  if (size === 'small') {
                    userSelectedScaleRef.current = 0;
                    setWorkspaceSize({
                      scale: 0,
                      type: undefined,
                    });
                  } else if (size === 'medium') {
                    userSelectedScaleRef.current = 0.5;

                    setWorkspaceSize({
                      scale: 0.5,
                      type: undefined,
                    });
                  } else if (size === 'large') {
                    userSelectedScaleRef.current = 1.0;

                    setWorkspaceSize({
                      scale: 1.0,
                      type: undefined,
                    });
                  } else if (size === 'split') {
                    userSelectedTypeRef.current = 'split';

                    setWorkspaceSize({
                      scale: undefined,
                      type: 'split',
                    });
                  } else if (size === 'overlay') {
                    userSelectedTypeRef.current = 'overlay';

                    setWorkspaceSize({
                      scale: undefined,
                      type: 'overlay',
                    });
                  }
                }}
                onDismiss={() => {
                  setWorkspaceIsVisible(false);
                }}
              />
            </div>
            {activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous' ? (
              <ResizeHandle
                onResizeStart={(registerBounds) => {
                  resizeOverlayRef.current.style.display = 'block';
                  resizeOverlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

                  workspaceResizeBoundsRef.current = {
                    range: sideNavBodyRef.current.getBoundingClientRect().width - 320 - 320,
                    currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
                  };

                  registerBounds({
                    range: sideNavBodyRef.current.getBoundingClientRect().width - 320 - 320,
                    currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
                  });
                }}
                onResizeStop={(position) => {
                  resizeOverlayRef.current.style.display = 'none';
                  resizeOverlayRef.current.style.backgroundColor = 'initial';

                  const newWidth = position * -1 + workspaceResizeBoundsRef.current.currentWidth;
                  const scale = (newWidth - 320) / workspaceResizeBoundsRef.current.range;

                  userSelectedTypeRef.current = undefined;

                  if (scale >= 1) {
                    userSelectedScaleRef.current = 1.0;

                    setWorkspaceSize({
                      scale: 1.0,
                      type: undefined,
                    });
                  } else if (scale < 0) {
                    userSelectedScaleRef.current = 0;

                    setWorkspaceSize({
                      scale: 0,
                      type: undefined,
                    });
                  } else {
                    userSelectedScaleRef.current = scale;

                    setWorkspaceSize({
                      scale,
                      type: undefined,
                    });
                  }
                }}
              />
            ) : null}
          </div>
        )}
        {workspaceIsVisible && hasOverlayWorkspace ? (
          <div
            ref={workspaceOverlayRef}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              zIndex: '1',
              display: 'block',
            }}
            onClick={() => { setWorkspaceIsVisible(false); }}
          />
        ) : null}
        {sideNavOverlayIsVisible ? (
          <div
            ref={sideNavOverlayRef}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              zIndex: '5',
              display: 'block',
            }}
            onClick={() => { setSideNavOverlayIsVisible(false); }}
          />
        ) : null}
      </div>
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
