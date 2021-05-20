import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_ESCAPE } from 'keycode-js';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';

import { ActiveBreakpointContext } from '../../breakpoints';
import SkipToLink from '../../application-container/private/skip-to-links/SkipToLink';
import LayoutActionsContext from '../../shared/LayoutActionsContext';
import { useDismissTransientPresentationsEffect } from '../../utils/transient-presentations';
import { deferExecution } from '../../utils/defer-execution';
import ResizeHandle from './ResizeHandle';

import styles from './WorkspaceLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child content to be rendered in the main content region of the workspace layout.
   */
  children: PropTypes.node,
  /**
   * Unique id of the parent layout.
   */
  parentId: PropTypes.string.isRequired,
  /**
   * Element adhering to the Workspace API.
   */
  workspace: PropTypes.element,
};

const MINIMUM_WORKSPACE_WIDTH = 320;
const MINIMUM_CONTENT_WIDTH = 320;

const initialSizeForBreakpoint = breakpoint => {
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

const getSizeOptionsForBreakpoint = breakpoint => {
  let menuOptions;
  if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
    menuOptions = [
      { key: 'small', text: 'Small' },
      { key: 'medium', text: 'Medium' },
      { key: 'large', text: 'Large' },
    ];
  } else if (breakpoint === 'medium') {
    menuOptions = [
      { key: 'split', text: 'Split' },
      { key: 'overlay', text: 'Overlay' },
    ];
  }
  return menuOptions;
};

const getActiveSizeForWorkspaceSize = workspaceSize => {
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
};

// TODO: determine if this should be specific or generalized to use elsewhere in the file
const validateInitialWorkspaceSizeForBreakpoint = (breakpoint) => {
  if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
    return true;
  }

  return false;
};

const WorkspaceLayout = ({
  children,
  parentId,
  workspace,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const parentLayoutActions = React.useContext(LayoutActionsContext);

  const pageContainerRef = React.useRef();
  const layoutBodyRef = React.useRef();
  const workspacePanelRef = React.useRef();
  const workspaceResizeBoundsRef = React.useRef();
  const resizeOverlayRef = React.useRef();
  const workspaceOverlayRef = React.useRef();
  const lastActiveSizeRef = React.useRef();
  const userSelectedTypeRef = React.useRef();
  const userSelectedScaleRef = React.useRef(0);

  let initialWorkspaceSize;
  if (validateInitialWorkspaceSizeForBreakpoint(activeBreakpoint)) {
    initialWorkspaceSize = (workspace && workspace.props.initialSize) || initialSizeForBreakpoint(activeBreakpoint);
  } else {
    initialWorkspaceSize = initialSizeForBreakpoint(activeBreakpoint);
  }

  const [workspaceSize, setWorkspaceSize] = React.useState(initialWorkspaceSize);
  const hasOverlayWorkspace = activeBreakpoint === 'tiny' || activeBreakpoint === 'small' || workspaceSize.type === 'overlay';
  const isLargeFormFactor = activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous';
  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(!hasOverlayWorkspace && workspace && workspace.props.initialIsOpen);

  const layoutActionsContextValue = React.useMemo(() => {
    let newActions = parentLayoutActions.actions || [];

    let actionLabel;
    if (workspaceIsVisible) {
      actionLabel = applicationIntl.formatMessage({ id: 'terraApplication.workspaceLayout.toggle.hide' });
    } else {
      actionLabel = applicationIntl.formatMessage({ id: 'terraApplication.workspaceLayout.toggle.show' });
    }

    if (workspace) {
      newActions = [...newActions, {
        key: 'workspace-layout-toggle-workspace-panel',
        label: actionLabel,
        icon: workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />,
        onSelect: () => {
          setWorkspaceIsVisible(state => !state);
        },
      }];
    }
  
    return ({
      actions: newActions,
    });
  }, [parentLayoutActions.actions, workspace, workspaceIsVisible]);

  useDismissTransientPresentationsEffect(() => {
    if (hasOverlayWorkspace) {
      setWorkspaceIsVisible(false);
    }
  });

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

  const lastWorkspaceOpenState = React.useRef(workspaceIsVisible);
  React.useEffect(() => {
    if (workspaceIsVisible && !lastWorkspaceOpenState.current) {
      deferExecution(() => { workspacePanelRef.current.focus(); });
    } else if (!workspaceIsVisible && lastWorkspaceOpenState.current) {
      deferExecution(() => {
        // TODO: evaluate flexing focus element based on overlay state or previous active element
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.focus();
        }
      });
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

  const handleOnRequestSizeChange = size => {
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
  };

  const clonePropsOntoWorkspace = () => {
    return (
      React.cloneElement(workspace, {
        id: `${parentId}-workspace-container`,
        isOpen: workspaceIsVisible,
        onRequestClose: () => {
          setWorkspaceIsVisible(false);
        },
        isPresentedAsOverlay: hasOverlayWorkspace,
        sizeScalar: workspaceSize.scale,
        activeSize: getActiveSizeForWorkspaceSize(workspaceSize),
        sizeOptions: getSizeOptionsForBreakpoint(activeBreakpoint),
        onRequestSizeChange: handleOnRequestSizeChange,
      })
    );
  };

  const renderWorkspaceSkipToLink = () => {
    if (!workspace) {
      return undefined;
    }

    return (
      <SkipToLink
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
    );
  };

  const renderResizeHandle = () => {
    if (!isLargeFormFactor) {
      return undefined;
    }

    return (
      <div className={cx('resize-handle-frame')}>
        <ResizeHandle
          onResizeStart={(registerBounds) => {
            resizeOverlayRef.current.style.display = 'block';
            resizeOverlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

            workspaceResizeBoundsRef.current = {
              range: layoutBodyRef.current.getBoundingClientRect().width - MINIMUM_CONTENT_WIDTH - MINIMUM_WORKSPACE_WIDTH,
              currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
            };

            registerBounds({
              range: layoutBodyRef.current.getBoundingClientRect().width - MINIMUM_CONTENT_WIDTH - MINIMUM_WORKSPACE_WIDTH,
              currentWidth: workspacePanelRef.current.getBoundingClientRect().width,
            });
          }}
          onResizeStop={(position) => {
            resizeOverlayRef.current.style.display = 'none';
            resizeOverlayRef.current.style.backgroundColor = 'initial';

            const newWidth = position * -1 + workspaceResizeBoundsRef.current.currentWidth;
            const scale = (newWidth - MINIMUM_WORKSPACE_WIDTH) / workspaceResizeBoundsRef.current.range;

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
    );
  };

  const renderWorkspaceOverlay = () => {
    if (!workspaceIsVisible || !hasOverlayWorkspace) {
      return undefined;
    }

    return (
      <div 
        ref={workspaceOverlayRef}
        className={cx('workspace-overlay')}
        onClick={() => { setWorkspaceIsVisible(false); }}
      />
    );
  };

  const renderContent = () => {
    return (
      <div
        className={cx('page-body')}
        style={workspaceSize.scale !== undefined && workspaceIsVisible ? { flexGrow: `${1 - workspaceSize.scale}`, msFlexPositive: `${1 - workspaceSize.scale}` } : null}
        inert={hasOverlayWorkspace && workspaceIsVisible ? 'true' : null}
      >
        <LayoutActionsContext.Provider value={layoutActionsContextValue}>
          {children}
        </LayoutActionsContext.Provider>
      </div>
    );
  }

  const renderWorkspace = () => {
    if (!workspace) {
      return undefined;
    }

    return (
      <>
        {renderResizeHandle()}
        <div
          ref={workspacePanelRef}
          className={cx('workspace', { visible: workspaceIsVisible, overlay: hasOverlayWorkspace })}
          style={workspaceSize.scale !== undefined ? { flexGrow: `${workspaceSize.scale}` } : null}
          tabIndex="-1"
          aria-labelledby={`${parentId}-workspace-container`}
        >
          <div
            className={cx('workspace-inner')}
          >
            {clonePropsOntoWorkspace()}
          </div>
        </div>
        {renderWorkspaceOverlay()}
      </>
    );
  };

  return (
    <>
     {renderWorkspaceSkipToLink()}
      <div
        className={cx('layout-container', { 'workspace-visible': workspaceIsVisible, [`workspace-${workspaceSize.size}`]: workspaceSize.size && !workspaceSize.px, [`workspace-${workspaceSize.type}`]: workspaceSize.type && !workspaceSize.px })}
        ref={pageContainerRef}
      >
        <div
          ref={resizeOverlayRef}
          className={cx('resize-overlay')}
        />
        <div ref={layoutBodyRef} className={cx('layout-body')}>
          {renderContent()}
          {renderWorkspace()}
        </div>
      </div>
    </>
  );
};

WorkspaceLayout.propTypes = propTypes;

export default WorkspaceLayout;
