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

const workspaceOverlayBreakpoints = ['tiny', 'small'];
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

  const [workspaceSize, setWorkspaceSize] = React.useState('small');
  const [workspaceCustomSize, setWorkspaceCustomSize] = React.useState();

  const [sideNavOverlayIsVisible, setSideNavOverlayIsVisible] = React.useState(false);
  const hasSidebar = React.Children.count(children) > 1;
  const hasOverlaySidebar = sideNavOverlayBreakpoints.indexOf(activeBreakpoint) !== -1;
  const sideNavIsVisible = hasSidebar && (sideNavOverlayIsVisible || sideNavOverlayBreakpoints.indexOf(activeBreakpoint) === -1);

  const hasOverlayWorkspace = workspaceOverlayBreakpoints.indexOf(activeBreakpoint) >= 0 || (activeBreakpoint === 'medium' && (workspaceSize === 'medium' || workspaceSize === 'large'));
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
    function resizeWorkspaceToFitWindow() {
      workspaceResizeBoundsRef.current = {
        maxWidth: pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320,
        minWidth: 320,
        currentWidth: workspaceCustomSize || workspacePanelRef.current.getBoundingClientRect().width,
      };

      const newWidth = workspaceResizeBoundsRef.current.currentWidth;

      if (newWidth >= workspaceResizeBoundsRef.current.maxWidth) {
        setWorkspaceSize('large');
        setWorkspaceCustomSize(workspaceResizeBoundsRef.current.maxWidth);
      } else if (newWidth <= 100) {
        setWorkspaceIsVisible(false);
      } else if (newWidth <= workspaceResizeBoundsRef.current.minWidth) {
        setWorkspaceSize('small');
        setWorkspaceCustomSize(workspaceResizeBoundsRef.current.minWidth);
      } else {
        setWorkspaceSize(undefined);
        setWorkspaceCustomSize(newWidth);
      }
    }

    window.addEventListener('resize', resizeWorkspaceToFitWindow);

    return () => {
      window.removeEventListener('resize', resizeWorkspaceToFitWindow);
    };
  });

  function activatePage(pageKey) {
    setSideNavOverlayIsVisible(false);

    if (pageKey === activePageKey) {
      return;
    }

    onRequestActivatePage(pageKey);
  }

  return (
    <div
      className={cx('side-nav-container', { 'workspace-visible': workspaceIsVisible, [`workspace-${workspaceSize}`]: enableWorkspace })}
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
          className={cx('workspace', { visible: workspaceIsVisible, overlay: hasOverlayWorkspace })}
          style={workspaceCustomSize && !workspaceSize ? { width: `${workspaceCustomSize}px` } : null}
          ref={workspacePanelRef}
        >
          <div
            style={{
              height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
            }}
          >
            <MockWorkspace workspaceSize={workspaceSize} workspaceCustomSize={workspaceCustomSize} onUpdateSize={(size) => { setWorkspaceSize(size); setWorkspaceCustomSize(undefined); }} onDismiss={() => { setWorkspaceIsVisible(false); }} />
          </div>
          {workspaceOverlayBreakpoints.indexOf(activeBreakpoint) === -1 && activeBreakpoint !== 'medium' ? (
            <ResizeHandle
              onResizeStart={() => {
                resizeOverlayRef.current.style.display = 'block';
                resizeOverlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

                workspaceResizeBoundsRef.current = {
                  maxWidth: pageContainerRef.current.getBoundingClientRect().width - sideNavPanelRef.current.getBoundingClientRect().width - 320,
                  minWidth: 320,
                  currentWidth: workspaceCustomSize || workspacePanelRef.current.getBoundingClientRect().width,
                };
              }}
              onResizeStop={(position) => {
                resizeOverlayRef.current.style.display = 'none';
                resizeOverlayRef.current.style.backgroundColor = 'initial';

                const newWidth = position * -1 + workspaceResizeBoundsRef.current.currentWidth;

                if (newWidth >= workspaceResizeBoundsRef.current.maxWidth) {
                  setWorkspaceSize('large');
                  setWorkspaceCustomSize(workspaceResizeBoundsRef.current.maxWidth);
                } else if (newWidth <= 100) {
                  setWorkspaceIsVisible(false);
                } else if (newWidth <= workspaceResizeBoundsRef.current.minWidth) {
                  setWorkspaceSize('small');
                  setWorkspaceCustomSize(workspaceResizeBoundsRef.current.minWidth);
                } else {
                  setWorkspaceSize(undefined);
                  setWorkspaceCustomSize(newWidth);
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
