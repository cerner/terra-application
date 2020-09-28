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
import SkipToLink from '../application-container/SkipToLink';
import NavigationContext from '../navigation/NavigationContext';
import PageContainer from '../application-page/PageContainer';
import PageActionsContext from '../application-page/PageActionsContext';
import EventEmitter from '../utils/event-emitter';

import ResizeHandle from './workspace/ResizeHandle';
import MockWorkspace from './workspace/MockWorkspace';
import CollapsingNavigationMenu from './side-nav/CollapsingNavigationMenu';

import styles from './SecondaryNavigationLayout.module.scss';

const cx = classNames.bind(styles);

const sideNavOverlayBreakpoints = ['tiny', 'small', 'medium'];

const propTypes = {};

function mapChildItem(item) {
  return {
    text: item.text,
    name: item.text,
    path: item.key,
    childItems: item.childItems ? item.childItems.map(mapChildItem) : undefined,
  };
}

const DefaultSideNavPanel = ({
  activeNavigationKey, onSelectNavigationItem, items, onDismiss,
}) => (
  <ContentContainer
    header={<ActionHeader title="Side Nav" onBack={onDismiss} />}
    fill
  >
    <CollapsingNavigationMenu
      selectedPath={activeNavigationKey}
      onSelect={(key) => { onSelectNavigationItem(key); }}
      menuItems={[{
        childItems: items.map(mapChildItem),
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

const SecondaryNavigationLayout = ({
  sidebar, activeNavigationKey, children, onSelectNavigationItem, enableWorkspace, renderPage,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const navigationContextValue = React.useContext(NavigationContext);

  const pageContainerRef = React.useRef();
  const sideNavBodyRef = React.useRef();
  const pageBodyRef = React.useRef();
  const sideNavPanelRef = React.useRef();
  const workspacePanelRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActiveNavigationKeyRef = React.useRef();
  const workspaceResizeBoundsRef = React.useRef();
  const resizeOverlayRef = React.useRef();
  const sideNavOverlayRef = React.useRef();
  const workspaceOverlayRef = React.useRef();
  const lastActiveSizeRef = React.useRef();

  const userSelectedTypeRef = React.useRef();
  const userSelectedScaleRef = React.useRef(0);
  const [workspaceSize, setWorkspaceSize] = React.useState(initialSizeForBreakpoint(activeBreakpoint));

  const [sideNavOverlayIsVisible, setSideNavOverlayIsVisible] = React.useState(false);

  let hasSidebar = false;
  if (React.Children.toArray(children).filter((child) => (child.type === NavigationItem || child.type === NavigationGroup)).length > 0) {
    hasSidebar = true;
  }

  const hasOverlaySidebar = sideNavOverlayBreakpoints.indexOf(activeBreakpoint) !== -1;
  const sideNavIsVisible = hasSidebar && (sideNavOverlayIsVisible || sideNavOverlayBreakpoints.indexOf(activeBreakpoint) === -1);

  const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(enableWorkspace && !hasOverlayWorkspace);

  const pageActionsContextValue = React.useMemo(() => ({
    startActions: hasSidebar && hasOverlaySidebar ? (
      <Button
        icon={<IconLeftPane />}
        text="Toggle Side Nav" // TODO INTL
        onClick={() => { setSideNavOverlayIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
    endActions: enableWorkspace ? (
      <Button
        className={cx({ 'active-button': workspaceIsVisible })}
        icon={workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />}
        text="Toggle Workspace" // TODO INTL
        onClick={() => { setWorkspaceIsVisible(state => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
  }), [enableWorkspace, workspaceIsVisible, hasSidebar, hasOverlaySidebar]);

  // const secondaryNavigationLayoutContextValue = React.useMemo(() => ({
  //   workspaceIsVisible,
  //   toggleWorkspace: () => { setWorkspaceIsVisible(state => !state); },
  //   sideNavIsVisible: hasSidebar ? (sideNavOverlayIsVisible && hasOverlaySidebar) : true,
  //   toggleSideNav: hasSidebar && hasOverlaySidebar ? () => { setSideNavOverlayIsVisible(state => !state); } : undefined,
  // }), [workspaceIsVisible, hasSidebar, hasOverlaySidebar, sideNavOverlayIsVisible]);

  React.useEffect(() => {
    function dismissOverlaySidebars() {
      if (hasOverlaySidebar) {
        setSideNavOverlayIsVisible(false);
      }

      if (hasOverlayWorkspace) {
        setWorkspaceIsVisible(false);
      }
    }

    EventEmitter.on('terra-application.dismiss-transient-layers', dismissOverlaySidebars);

    return () => {
      EventEmitter.off('terra-application.dismiss-transient-layers', dismissOverlaySidebars);
    };
  }, [hasOverlaySidebar, hasOverlayWorkspace]);

  React.useLayoutEffect(() => {
    const pageNodeForActivePage = pageContainerPortalsRef.current[activeNavigationKey];

    if (!pageBodyRef.current) {
      return;
    }

    if (pageBodyRef.current.contains(pageNodeForActivePage?.element)) {
      return;
    }

    if (lastActiveNavigationKeyRef.current) {
      pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].scrollOffset = pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element.querySelector('[data-page-overflow-container]')?.scrollTop || 0;
      pageBodyRef.current.removeChild(pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element);
    }

    if (pageNodeForActivePage?.element) {
      pageBodyRef.current.appendChild(pageNodeForActivePage.element);

      const pageMainElement = pageNodeForActivePage.element.querySelector('[data-page-overflow-container]');
      if (pageMainElement) {
        pageMainElement.scrollTop = pageNodeForActivePage.scrollOffset || 0;
      }

      lastActiveNavigationKeyRef.current = activeNavigationKey;

      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else {
      lastActiveNavigationKeyRef.current = undefined;
    }
  }, [activeNavigationKey]);

  // TODO Fix this to handle navigation groups
  // React.useEffect(() => {
  //   const pageKeys = React.Children.map(children, (child) => (child.props.pageKey));

  //   // Cleanup nodes for removed children
  //   const danglingPageKeys = Object.keys(pageContainerPortalsRef.current).filter((pageKey) => !pageKeys.includes(pageKey));
  //   danglingPageKeys.forEach((pageKey) => {
  //     delete pageContainerPortalsRef.current[pageKey];
  //   });
  // }, [children]);

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

    setSideNavOverlayIsVisible(false);
  }, [workspaceSize, activeBreakpoint]);

  React.useEffect(() => {
    if (sideNavOverlayIsVisible) {
      sideNavPanelRef.current.focus();
    }
  }, [sideNavOverlayIsVisible]);

  const workspaceOverlayIsOpen = workspaceIsVisible && hasOverlayWorkspace;
  React.useEffect(() => {
    if (workspaceOverlayIsOpen) {
      workspacePanelRef.current.focus();
    }
  }, [workspaceOverlayIsOpen]);

  function activatePage(pageKey) {
    setSideNavOverlayIsVisible(false);

    if (pageKey === activeNavigationKey) {
      return;
    }

    onSelectNavigationItem(pageKey);
  }

  function renderChildPages(childComponents) {
    function renderChildPage(page) {
      let portalElement = pageContainerPortalsRef.current[page.props.navigationKey]?.element;
      if (!portalElement) {
        portalElement = document.createElement('div');
        portalElement.style.position = 'relative';
        portalElement.style.height = '100%';
        portalElement.style.width = '100%';
        portalElement.id = `side-nav-${page.props.navigationKey}`;
        pageContainerPortalsRef.current[page.props.navigationKey] = {
          element: portalElement,
        };
      }

      return (
        <NavigationContext.Provider value={{ isActive: navigationContextValue.isActive && page.props.navigationKey === activeNavigationKey, navigationIdentifier: page.props.navigationKey }}>
          {React.cloneElement(page, {
            isActive: page.props.navigationKey === activeNavigationKey, portalElement, enableWorkspace,
          })}
        </NavigationContext.Provider>
      );
    }

    if (renderPage) {
      return (
        <PageContainer>
          {renderPage()}
        </PageContainer>
      );
    }

    return React.Children.map(childComponents, (child) => {
      if (child.type === NavigationItem) {
        return renderChildPage(child);
      }

      if (child.type === NavigationGroup) {
        return renderChildPages(child.props.children);
      }

      return child;
    });
  }

  function buildSideNavItems(childComponents) {
    return React.Children.map(childComponents, (child) => {
      if (child.type === NavigationItem) {
        return { key: child.props.navigationKey, text: child.props.text };
      }

      if (child.type === NavigationGroup) {
        return { key: child.props.text, text: child.props.text, childItems: buildSideNavItems(child.props.children) };
      }

      return null;
    });
  }

  function deferAction(callback) {
    setTimeout(callback, 0);
  }

  return (
    <>
      {hasSidebar && (
        <SkipToLink
          description="Skip to Side Navigation"
          callback={() => {
            if (hasOverlayWorkspace) {
              setWorkspaceIsVisible(false);
            }

            if (hasOverlaySidebar) {
              setSideNavOverlayIsVisible(true);
            }

            deferAction(() => {
              sideNavPanelRef.current.focus();
            });
          }}
        />
      )}
      {enableWorkspace && (
        <SkipToLink
          description="Skip to Workspace"
          callback={() => {
            if (hasOverlaySidebar) {
              setSideNavOverlayIsVisible(false);
            }

            setWorkspaceIsVisible(true);

            deferAction(() => {
              workspacePanelRef.current.focus();
            });
          }}
        />
      )}
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
              onDismiss={sideNavOverlayIsVisible ? () => {
                setSideNavOverlayIsVisible(false);

                deferAction(() => {
                  document.querySelector('main')?.focus();
                });
              } : undefined}
              activeNavigationKey={activeNavigationKey}
              onSelectNavigationItem={activatePage}
              items={buildSideNavItems(children)}
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
            <PageActionsContext.Provider value={pageActionsContextValue}>
              {renderChildPages(children)}
            </PageActionsContext.Provider>
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
                  onDismiss={hasOverlayWorkspace ? () => {
                    setWorkspaceIsVisible(false);

                    deferAction(() => {
                      document.querySelector('main')?.focus(); // TODO talk about movinig focus in these scenarios (plus the size dropdown stuff)
                    });
                  } : null}
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
    </>
  );
};

SecondaryNavigationLayout.propTypes = propTypes;

const NavigationItem = ({
  isActive, children, render, renderPage, portalElement,
}) => {
  let pageContent;

  if (renderPage) {
    pageContent = (
      <PageContainer>
        {renderPage()}
      </PageContainer>
    );
  } else if (render) {
    pageContent = render({ isActive });
  } else {
    pageContent = children;
  }

  return ReactDOM.createPortal(pageContent, portalElement);
};

const NavigationGroup = ({
  description, children,
}) => null;

export default SecondaryNavigationLayout;
export { NavigationGroup, NavigationItem };
