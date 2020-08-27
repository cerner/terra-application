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

const DefaultSideNavPanel = ({ activePageKey, onRequestActivatePage, items }) => (
  <ContentContainer
    header={<ActionHeader title="Side Nav" />}
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
      px: undefined,
      type: undefined,
    };
  }

  if (breakpoint === 'medium') {
    return {
      px: undefined,
      type: 'split',
    };
  }

  return {
    px: 320,
    type: undefined,
  };
};

const NavigationPageContainer = ({
  sidebar, activePageKey, children, onRequestActivatePage, enableWorkspace,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const pageContainerRef = React.useRef();
  const sideNavBodyRef = React.useRef();
  const sideNavPanelRef = React.useRef();
  const workspacePanelRef = React.useRef();
  const pageContainerPortalsRef = React.useRef({});
  const lastActivePageKeyRef = React.useRef();
  const workspaceResizeBoundsRef = React.useRef();
  const resizeOverlayRef = React.useRef();

  const userSelectedTypeRef = React.useRef();
  const userSelectedPxRef = React.useRef(320);
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
    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || activeBreakpoint === 'medium') {
      return undefined;
    }

    if (!workspaceSize.px) {
      return undefined;
    }

    function resizeWorkspaceToFitWindow() {
      workspaceResizeBoundsRef.current = {
        maxWidth: pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320,
        minWidth: 320,
        currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
      };

      const newWidth = userSelectedPxRef.current || workspaceResizeBoundsRef.current.currentWidth;

      if (newWidth >= workspaceResizeBoundsRef.current.maxWidth) {
        setWorkspaceSize({
          px: workspaceResizeBoundsRef.current.maxWidth,
          type: undefined,
        });
      } else if (newWidth < workspaceResizeBoundsRef.current.minWidth) {
        setWorkspaceSize({
          px: workspaceResizeBoundsRef.current.minWidth,
          type: undefined,
        });
      } else {
        setWorkspaceSize({
          px: newWidth,
          type: undefined,
        });
      }
    }

    window.addEventListener('resize', resizeWorkspaceToFitWindow);

    return () => {
      window.removeEventListener('resize', resizeWorkspaceToFitWindow);
    };
  }, [activeBreakpoint, workspaceSize.px]);

  const lastActiveSizeRef = React.useRef();
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
        px: undefined,
        type: undefined,
      });
    } else if (activeBreakpoint === 'medium') {
      if (workspaceSize.size === undefined || workspaceSize.size === 'small' || workspaceSize.size === 'medium') {
        setWorkspaceSize({
          px: undefined,
          type: userSelectedTypeRef.current || 'split',
        });
      } else if (workspaceSize.size === 'large') {
        setWorkspaceSize({
          px: undefined,
          type: userSelectedTypeRef.current || 'overlay',
        });
      }
    } else if (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') {
      if (workspaceSize.type === 'split') {
        setWorkspaceSize({
          px: userSelectedPxRef.current,
          type: undefined,
        });
      } else if (workspaceSize.type === 'overlay') {
        setWorkspaceSize({
          px: userSelectedPxRef.current,
          type: undefined,
        });
      }
    }
  }, [workspaceSize, activeBreakpoint]);

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
          position: 'absolute', left: '0', right: '0', top: '0', bottom: '0', zIndex: '1', display: 'none',
        }}
      />
      <div
        ref={sideNavPanelRef}
        className={cx('side-nav-sidebar', { visible: hasSidebar && sideNavIsVisible, overlay: hasOverlaySidebar })}
      >
        {sidebar || (hasSidebar && (
          <DefaultSideNavPanel
            activePageKey={activePageKey}
            onRequestActivatePage={activatePage}
            items={React.Children.map(children, (child) => ({ key: child.props.pageKey, text: child.props.description }))}
          />
        ))}
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
          className={cx('workspace', { visible: workspaceIsVisible, overlay: activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay' })}
          style={workspaceSize.px ? { width: `${workspaceSize.px}px` } : null}
          ref={workspacePanelRef}
        >
          <div
            style={{
              height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
            }}
          >
            <MockWorkspace
              workspaceSize={workspaceSize.size || workspaceSize.type}
              workspaceCustomSize={workspaceSize.px}
              onUpdateSize={(size) => {
                userSelectedTypeRef.current = undefined;

                if (size === 'small') {
                  userSelectedPxRef.current = 320;
                  setWorkspaceSize({
                    px: userSelectedPxRef.current,
                    type: undefined,
                  });
                } else if (size === 'medium') {
                  userSelectedPxRef.current = Math.max(Math.floor((pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320 - 320) / 2) + 320, 320);

                  setWorkspaceSize({
                    px: userSelectedPxRef.current,
                    type: undefined,
                  });
                } else if (size === 'large') {
                  userSelectedPxRef.current = Math.max(pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320, 320);
                  setWorkspaceSize({
                    px: userSelectedPxRef.current,
                    type: undefined,
                  });
                } else if (size === 'split') {
                  userSelectedTypeRef.current = 'split';
                  setWorkspaceSize({
                    px: undefined,
                    type: 'split',
                  });
                } else if (size === 'overlay') {
                  userSelectedTypeRef.current = 'overlay';
                  setWorkspaceSize({
                    px: undefined,
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
              onResizeStart={() => {
                resizeOverlayRef.current.style.display = 'block';
                resizeOverlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

                workspaceResizeBoundsRef.current = {
                  maxWidth: pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320,
                  minWidth: 320,
                  currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
                };
              }}
              onResizeStop={(position) => {
                resizeOverlayRef.current.style.display = 'none';
                resizeOverlayRef.current.style.backgroundColor = 'initial';

                const newWidth = position * -1 + workspaceResizeBoundsRef.current.currentWidth;

                userSelectedTypeRef.current = undefined;

                if (newWidth >= workspaceResizeBoundsRef.current.maxWidth) {
                  userSelectedPxRef.current = workspaceResizeBoundsRef.current.maxWidth;

                  setWorkspaceSize({
                    px: workspaceResizeBoundsRef.current.maxWidth,
                    type: undefined,
                  });
                } else if (newWidth <= workspaceResizeBoundsRef.current.minWidth) {
                  userSelectedPxRef.current = workspaceResizeBoundsRef.current.minWidth;

                  setWorkspaceSize({
                    px: workspaceResizeBoundsRef.current.minWidth,
                    type: undefined,
                  });
                } else {
                  userSelectedPxRef.current = newWidth;

                  setWorkspaceSize({
                    px: newWidth,
                    type: undefined,
                  });
                }
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
