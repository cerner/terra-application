import React from 'react';
import classNames from 'classnames/bind';
import { KEY_ESCAPE } from 'keycode-js';
import ContentContainer from 'terra-content-container';
import Button, { ButtonVariants } from 'terra-button';
import ActionHeader from 'terra-action-header';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
import IconLeftPane from 'terra-icon/lib/icon/IconLeftPane';

import { ActiveBreakpointContext } from '../../breakpoints';
import SkipToButton from '../../application-container/private/skip-to/SkipToButton';
import { PageContainer } from '../../page';
import PageContainerActionsContext from '../../page/PageContainerActionsContext';
import { getPersistentScrollMap, applyScrollData } from '../../utils/scroll-persistence/scroll-persistence';
import { useDismissTransientPresentationsCallback } from '../../utils/transient-presentation';

import NavigationItem from '../shared/NavigationItem';
import SecondaryNavigationGroup from './SecondaryNavigationGroup';
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
  sidebar,
  activeNavigationKey,
  children,
  onSelectNavigationItem,
  enableWorkspace,
  renderPage,
  renderLayout,
  renderNavigationFallback,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const pageContainerRef = React.useRef();
  const sideNavBodyRef = React.useRef();
  const contentElementRef = React.useRef();
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

  function getNavigationItems(childComponents) {
    return React.Children.toArray(childComponents).reduce((accumulator, child) => {
      const items = [...accumulator];

      if (child.type === NavigationItem) {
        items.push(child);
      } else if (child.type === SecondaryNavigationGroup) {
        const groupItems = getNavigationItems(child.props.children);
        if (groupItems) {
          items.push(...groupItems);
        }
      }

      return items;
    }, []);
  }

  const navigationItems = getNavigationItems(children);
  const hasActiveNavigationItem = !!navigationItems.find(item => item.props.navigationKey === activeNavigationKey);

  const hasSidebar = !!navigationItems.length;
  const hasOverlaySidebar = sideNavOverlayBreakpoints.indexOf(activeBreakpoint) !== -1;
  const sideNavIsVisible = hasSidebar && (sideNavOverlayIsVisible || sideNavOverlayBreakpoints.indexOf(activeBreakpoint) === -1);

  const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(enableWorkspace && !hasOverlayWorkspace);

  const pageContainerActionsContextValue = React.useMemo(() => ({
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
        onClick={() => {
          setWorkspaceIsVisible(state => !state);
        }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
  }), [enableWorkspace, workspaceIsVisible, hasSidebar, hasOverlaySidebar]);

  useDismissTransientPresentationsCallback(() => {
    if (hasOverlaySidebar) {
      setSideNavOverlayIsVisible(false);
    }

    if (hasOverlayWorkspace) {
      setWorkspaceIsVisible(false);
    }
  });

  React.useLayoutEffect(() => {
    if (!contentElementRef.current) {
      return;
    }

    const pageNodeForActivePage = pageContainerPortalsRef.current[activeNavigationKey];

    if (contentElementRef.current.contains(pageNodeForActivePage?.element) && contentElementRef.current.getAttribute('data-active-nav-key') === activeNavigationKey) {
      return;
    }

    if (lastActiveNavigationKeyRef.current) {
      const elementToRemove = pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element;

      pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].scrollData = getPersistentScrollMap(elementToRemove);

      const hasUnsafeElements = elementToRemove.querySelectorAll('iframe');
      if (hasUnsafeElements.length) {
        elementToRemove.style.display = 'none';
        elementToRemove.inert = true;
      } else {
        contentElementRef.current.removeChild(pageContainerPortalsRef.current[lastActiveNavigationKeyRef.current].element);
      }
    }

    if (pageNodeForActivePage?.element) {
      if (contentElementRef.current.contains(pageNodeForActivePage?.element)) {
        pageNodeForActivePage.element.style.removeProperty('display');
        pageNodeForActivePage.element.inert = false;
      } else {
        contentElementRef.current.appendChild(pageNodeForActivePage.element);
      }

      if (pageNodeForActivePage.scrollData) {
        applyScrollData(pageNodeForActivePage.scrollData, pageNodeForActivePage.element);
      }

      contentElementRef.current.setAttribute('data-active-nav-key', activeNavigationKey);

      lastActiveNavigationKeyRef.current = activeNavigationKey;

      setTimeout(() => {
        document.body.focus();
      }, 0);
    } else {
      contentElementRef.current.setAttribute('data-active-nav-key', activeNavigationKey);
      lastActiveNavigationKeyRef.current = undefined;
    }
  }, [activeNavigationKey]);

  React.useEffect(() => {
    const navigationItemKeys = navigationItems.map(item => item.props.navigationKey);
    // Cleanup nodes for removed children
    const danglingPortalKeys = Object.keys(pageContainerPortalsRef.current).filter((itemKey) => !navigationItemKeys.includes(itemKey));
    danglingPortalKeys.forEach((pageKey) => {
      delete pageContainerPortalsRef.current[pageKey];
    });
  }, [navigationItems]);

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

  const lastWorkspaceOpenState = React.useRef(workspaceIsVisible);
  React.useEffect(() => {
    if (workspaceIsVisible && !lastWorkspaceOpenState.current) {
      workspacePanelRef.current.focus();
    }

    lastWorkspaceOpenState.current = workspaceIsVisible;
  }, [workspaceIsVisible]);

  React.useEffect(() => {
    if (!workspaceIsVisible || !hasOverlayWorkspace) {
      return undefined;
    }

    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE) {
        if (e.target === pageContainerRef.current || pageContainerRef.current.contains(e.target)) {
          setWorkspaceIsVisible(false);
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [workspaceIsVisible, hasOverlayWorkspace]);

  React.useEffect(() => {
    if (!sideNavOverlayIsVisible) {
      return undefined;
    }

    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE) {
        if (e.target === pageContainerRef.current || pageContainerRef.current.contains(e.target)) {
          setSideNavOverlayIsVisible(false);
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [sideNavOverlayIsVisible, setSideNavOverlayIsVisible]);

  function activatePage(pageKey) {
    setSideNavOverlayIsVisible(false);

    if (pageKey === activeNavigationKey) {
      return;
    }

    onSelectNavigationItem(pageKey);
  }

  function renderNavigationItems() {
    return navigationItems.map((item) => {
      let portalElement = pageContainerPortalsRef.current[item.props.navigationKey]?.element;
      if (!portalElement) {
        portalElement = document.createElement('div');
        portalElement.style.position = 'relative';
        portalElement.style.height = '100%';
        portalElement.style.width = '100%';
        portalElement.id = `side-nav-${item.props.navigationKey}`;
        pageContainerPortalsRef.current[item.props.navigationKey] = {
          element: portalElement,
        };
      }

      /**
       * The cloned element is wrapped in a keyed fragment to ensure the render order of
       * the mapped items.
       */
      return (
        <React.Fragment key={item.props.navigationKey}>
          {React.cloneElement(item, {
            isActive: item.props.navigationKey === activeNavigationKey, portalElement,
          })}
        </React.Fragment>
      );
    });
  }

  function buildSideNavItems(childComponents) {
    return React.Children.map(childComponents, (child) => {
      if (child.type === NavigationItem) {
        return { key: child.props.navigationKey, text: child.props.text };
      }

      if (child.type === SecondaryNavigationGroup) {
        return { key: child.props.text, text: child.props.text, childItems: buildSideNavItems(child.props.children) };
      }

      return null;
    });
  }

  function deferAction(callback) {
    setTimeout(callback, 0);
  }

  let content;
  if (renderPage) {
    content = (
      <PageContainer isMain>
        {renderPage()}
      </PageContainer>
    );
  } else if (renderLayout) {
    content = renderLayout();
  } else if (navigationItems.length) {
    content = (
      <>
        {renderNavigationItems()}
        {!hasActiveNavigationItem && renderNavigationFallback ? renderNavigationFallback() : undefined}
      </>
    );
  } else {
    content = children;
  }

  return (
    <>
      {hasSidebar && (
        <SkipToButton
          description="Side Navigation"
          onSelect={() => {
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
        <SkipToButton
          description="Workspace"
          onSelect={() => {
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
            ref={contentElementRef}
            className={cx('page-body')}
            style={workspaceSize.scale !== undefined && workspaceIsVisible ? { flexGrow: `${1 - workspaceSize.scale}` } : null} // TODO add IE flex styles
            inert={sideNavOverlayIsVisible || (hasOverlayWorkspace && workspaceIsVisible) ? 'true' : null}
          >
            <PageContainerActionsContext.Provider value={pageContainerActionsContextValue}>
              {content}
            </PageContainerActionsContext.Provider>
          </div>
          {enableWorkspace && (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous')
            ? (
              <div style={{
                flex: '0 0 0', position: 'relative', height: '100%', width: '0px', zIndex: '3',
              }}
              >
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
              </div>
            ) : null}
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
                  height: '100%', overflow: 'hidden', width: '100%', position: 'relative', zIndex: '-1',
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
                      document.querySelector('main')?.focus(); // TODO talk about moving focus in these scenarios (plus the size dropdown stuff)
                    });
                  } : null}
                />
              </div>
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

export default SecondaryNavigationLayout;
