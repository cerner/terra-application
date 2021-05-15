import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import { KEY_ESCAPE } from 'keycode-js';
// import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
// import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';
// import IconLeftPane from 'terra-icon/lib/icon/IconLeftPane';

// import { ActiveBreakpointContext } from '../../breakpoints';
// import SkipToButton from '../../application-container/private/skip-to/SkipToButton';
// import MainPageContainer from '../../page/MainPageContainer';
// import LayoutActionsContext from '../shared/LayoutActionsContext';
// import { useDismissTransientPresentationsEffect } from '../../utils/transient-presentations';
// import { deferExecution } from '../../utils/lifecycle-utils';
// import usePortalManager from '../../shared/usePortalManager';
// import ResizeHandle from './workspace/ResizeHandle';

import styles from './PrimaryNavigationWorkspace.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  sidebar: PropTypes.element,
  activeNavigationKey: PropTypes.string,
  children: PropTypes.node,
  onSelectNavigationItem: PropTypes.func,
  renderPage: PropTypes.func,
  renderLayout: PropTypes.func,
  renderNavigationFallback: PropTypes.func,
  workspace: PropTypes.element,
};

// const initialSizeForBreakpoint = (breakpoint) => {
//   if (breakpoint === 'tiny' || breakpoint === 'small') {
//     return {
//       scale: undefined,
//       type: undefined,
//     };
//   }

//   if (breakpoint === 'medium') {
//     return {
//       scale: undefined,
//       type: 'split',
//     };
//   }

//   return {
//     scale: 0,
//     type: undefined,
//   };
// };

// const getSizeOptionsForBreakpoint = breakpoint => {
//   let menuOptions;
//   if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
//     menuOptions = [
//       { key: 'small', text: 'Small' },
//       { key: 'medium', text: 'Medium' },
//       { key: 'large', text: 'Large' },
//     ];
//   } else if (breakpoint === 'medium') {
//     menuOptions = [
//       { key: 'split', text: 'Split' },
//       { key: 'overlay', text: 'Overlay' },
//     ];
//   }
//   return menuOptions;
// };

// const validateInitialWorkspaceSizeForBreakpoint = (breakpoint) => {
//   if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
//     return true;
//   }

//   return false;
// };

const SecondaryNavigationLayout = ({
  id,
  label,
  sidebar,
  activeNavigationKey,
  children,
  onSelectNavigationItem,
  // enableWorkspace,
  renderPage,
  renderLayout,
  renderNavigationFallback,
  workspace,
}) => {
  // const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  // const parentLayoutActions = React.useContext(LayoutActionsContext);

  // const pageContainerRef = React.useRef();
  // const sideNavBodyRef = React.useRef();
  // const workspacePanelRef = React.useRef();
  // const workspaceResizeBoundsRef = React.useRef();
  // const resizeOverlayRef = React.useRef();
  // const workspaceOverlayRef = React.useRef();
  // const lastActiveSizeRef = React.useRef();
  // const userSelectedTypeRef = React.useRef();
  // const userSelectedScaleRef = React.useRef(0);

  // const [contentElementRef, pageContainerPortalsRef] = usePortalManager(activeNavigationKey, () => {
  //   deferExecution(() => {
  //     document.body.focus();
  //   });
  // });

  // let initialWorkspaceSize;
  // if (validateInitialWorkspaceSizeForBreakpoint(activeBreakpoint)) {
  //   initialWorkspaceSize = (workspace && workspace.props.initialSize) || initialSizeForBreakpoint(activeBreakpoint);
  // } else {
  //   initialWorkspaceSize = initialSizeForBreakpoint(activeBreakpoint);
  // }
  // const [workspaceSize, setWorkspaceSize] = React.useState(initialWorkspaceSize);
  // const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  // const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(!hasOverlayWorkspace && workspace && workspace.props.initialIsOpen);

  // const layoutActionsContextValue = React.useMemo(() => {
  //   let newStartActions = parentLayoutActions.startActions;
  //   let newEndActions = parentLayoutActions.endActions;

  //   if (workspace) {
  //     newEndActions = [...newEndActions, {
  //       key: 'secondary-navigation-layout-toggle-workspace-panel',
  //       label: `Toggle Workspace Panel ${workspaceIsVisible ? 'Closed' : 'Open'}`, // TODO intl and verify a11y
  //       icon: workspaceIsVisible ? IconPanelRight : IconPanelLeft,
  //       onSelect: () => {
  //         setWorkspaceIsVisible(state => !state);
  //       },
  //       isActive: workspaceIsVisible,
  //     }];
  //   }

  //   return ({
  //     startActions: newStartActions,
  //     endActions: newEndActions,
  //   });
  // }, [parentLayoutActions.startActions, parentLayoutActions.endActions, workspace, workspaceIsVisible, hasSidebar, hasOverlaySidebar, sideNavOverlayIsVisible]);

  // useDismissTransientPresentationsEffect(() => {
  //   if (hasOverlaySidebar) {
  //     setSideNavOverlayIsVisible(false);
  //   }

  //   if (hasOverlayWorkspace) {
  //     setWorkspaceIsVisible(false);
  //   }
  // });

  // React.useEffect(() => {
  //   if (!lastActiveSizeRef.current) {
  //     lastActiveSizeRef.current = activeBreakpoint;
  //     return;
  //   }

  //   if (lastActiveSizeRef.current === activeBreakpoint) {
  //     return;
  //   }

  //   lastActiveSizeRef.current = activeBreakpoint;

  //   if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
  //     setWorkspaceSize({
  //       scale: undefined,
  //       type: undefined,
  //     });
  //   } else if (activeBreakpoint === 'medium') {
  //     const scale = userSelectedScaleRef.current || workspaceSize.scale;

  //     if (scale === undefined || scale <= 0.5) {
  //       setWorkspaceSize({
  //         scale: undefined,
  //         type: 'split',
  //       });
  //     } else if (scale > 0.5) {
  //       setWorkspaceSize({
  //         scale: undefined,
  //         type: 'overlay',
  //       });
  //     }
  //   } else if (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') {
  //     setWorkspaceSize({
  //       scale: userSelectedScaleRef.current || 0,
  //       type: undefined,
  //     });
  //   }
  // }, [workspaceSize, activeBreakpoint]);

  // const lastWorkspaceOpenState = React.useRef(workspaceIsVisible);
  // React.useEffect(() => {
  //   if (workspaceIsVisible && !lastWorkspaceOpenState.current) {
  //     deferExecution(() => { workspacePanelRef.current.focus(); });
  //   } else if (!workspaceIsVisible && lastWorkspaceOpenState.current) {
  //     deferExecution(() => {
  //       // TODO flex this based on whether we're overlay or not
  //       // if overlay, focus on toggle button(?)
  //       // if not overlay, focus stays on button (no action here)
  //       const mainElement = document.querySelector('main');
  //       if (mainElement) {
  //         mainElement.focus();
  //       }
  //     });
  //   }

  //   lastWorkspaceOpenState.current = workspaceIsVisible;
  // }, [workspaceIsVisible]);

  // React.useEffect(() => {
  //   if (!workspaceIsVisible || !hasOverlayWorkspace) {
  //     return undefined;
  //   }

  //   function handleKeydown(e) {
  //     if (e.keyCode === KEY_ESCAPE) {
  //       if (e.target === pageContainerRef.current || pageContainerRef.current.contains(e.target)) {
  //         setWorkspaceIsVisible(false);
  //       }
  //     }
  //   }

  //   document.addEventListener('keydown', handleKeydown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeydown);
  //   };
  // }, [workspaceIsVisible, hasOverlayWorkspace]);

  // let content;
  // if (renderPage) {
  //   content = (
  //     <MainPageContainer>
  //       {renderPage()}
  //     </MainPageContainer>
  //   );
  // } else if (renderLayout) {
  //   content = renderLayout();
  // } else if (navigationItems.length) {
  //   content = (
  //     <>
  //       {renderNavigationItems()}
  //       {!hasActiveNavigationItem && renderNavigationFallback ? renderNavigationFallback() : undefined}
  //     </>
  //   );
  // } else {
  //   content = children;
  // }

  // // TODO: comeback to this
  // const mapSize = {
  //   0: 'small',
  //   0.5: 'medium',
  //   1: 'large',
  // };

  return (
    <>
     {/* {workspace && (
        <SkipToButton
          description="Workspace"
          onSelect={() => {
            if (!workspaceIsVisible) {
              setWorkspaceIsVisible(true);
            } else {
              deferExecution(() => {
                workspacePanelRef.current.focus();
              });
            }
          }}
        />
      )} */}
      <div
        className={cx('side-nav-container', { 'workspace-visible': workspaceIsVisible, [`workspace-${workspaceSize.size}`]: workspaceSize.size && !workspaceSize.px, [`workspace-${workspaceSize.type}`]: workspaceSize.type && !workspaceSize.px })}
        ref={pageContainerRef}
      >
        <div
          ref={resizeOverlayRef}
          className={cx('resize-overlay')}
        />
        <div ref={sideNavBodyRef} className={cx('side-nav-body')}>
          {/* <div
            ref={contentElementRef}
            className={cx('page-body')}
            style={workspaceSize.scale !== undefined && workspaceIsVisible ? { flexGrow: `${1 - workspaceSize.scale}`, msFlexPositive: `${1 - workspaceSize.scale}` } : null}
            inert={sideNavOverlayIsVisible || (hasOverlayWorkspace && workspaceIsVisible) ? 'true' : null}
          >
            <LayoutActionsContext.Provider value={layoutActionsContextValue}>
              {content}
            </LayoutActionsContext.Provider>
          </div> */}
          {workspace && (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') ? (
              <div className={cx('resize-handle-frame')}>
                 {/* <ResizeHandle
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
                /> */}
              </div>
            ) : null}
          {/* {workspace && (
            <div
              ref={workspacePanelRef}
              className={cx('workspace', { visible: workspaceIsVisible, overlay: activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay' })}
              style={workspaceSize.scale !== undefined ? { flexGrow: `${workspaceSize.scale}` } : null}
              inert={sideNavOverlayIsVisible ? 'true' : null}
              tabIndex="-1"
              aria-labelledby={`${id}-workspace-container`}
            >
                <div
                  style={{
                    height: '100%', overflow: 'hidden', width: '100%', position: 'relative', zIndex: '-1', borderRadius: '5px',
                  }}
                >
                  {React.cloneElement(workspace, {
                    id: `${id}-workspace`,
                    isOpen: workspaceIsVisible,
                    onRequestClose: () => {
                      setWorkspaceIsVisible(false);
                    },
                    isPresentedAsOverlay: hasOverlayWorkspace,
                    sizeScalar: workspaceSize.scale,
                    activeSize: (() => {
                      if (workspaceSize.scale === 0) {
                        return 'small';
                      } if (workspaceSize.scale === 0.5) {
                        return 'medium';
                      } if (workspaceSize.scale === 1) {
                        return 'large';
                      } if (workspaceSize.type === 'split') {
                        return 'split';
                      } if (workspaceSize.type === 'overlay') {
                        return 'overlay';
                      }

                      return undefined;
                    })(),
                    sizeOptions: getSizeOptionsForBreakpoint(activeBreakpoint),
                    onRequestSizeChange: (size) => {
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
                    },
                  })}
                </div>
            </div>
          )} */}
          {workspaceIsVisible && hasOverlayWorkspace ? (
            <div 
              ref={workspaceOverlayRef}
              className={cx('workspace-overlay')}
              onClick={() => { setWorkspaceIsVisible(false); }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

SecondaryNavigationLayout.propTypes = propTypes;

export default SecondaryNavigationLayout;
