import React from 'react';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';
import IconPanelLeft from 'terra-icon/lib/icon/IconPanelLeft';

import BasePageContainer from './_BasePageContainer';
import PageContainerContext from './PageContainerContext';
import ResizeHandle from './workspace/ResizeHandle';
import MockWorkspace from './workspace/MockWorkspace';
import { ActiveBreakpointContext } from '../breakpoints';

import styles from './ApplicationPageContainer.module.scss';

const cx = classNames.bind(styles);

const flatLayoutBreakpoints = ['medium', 'large', 'huge', 'enormous'];

const ApplicationPageContainer = ({
  children, enableWorkspace,
}) => {
  const [workspaceSize, setWorkspaceSize] = React.useState(350);

  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const isOverlayLayout = !flatLayoutBreakpoints.includes(activeBreakpoint);

  const [workspaceIsVisible, setWorkspaceIsVisible] = React.useState(!isOverlayLayout);

  const pageContainerContextValue = React.useMemo(() => ({
    rightActionComponent: enableWorkspace ? (
      <Button
        icon={workspaceIsVisible ? <IconPanelRight /> : <IconPanelLeft />}
        text="Toggle Workspace"
        onClick={() => { setWorkspaceIsVisible((state) => !state); }}
        variant={ButtonVariants.UTILITY}
      />
    ) : undefined,
  }), [enableWorkspace, workspaceIsVisible]);

  React.useEffect(() => {
    if (flatLayoutBreakpoints.includes(activeBreakpoint)) {
      return undefined;
    }

    const closeOpenOverlays = () => {
      setWorkspaceIsVisible(false);
    };

    window.addEventListener('resize', closeOpenOverlays);

    return () => {
      window.removeEventListener('resize', closeOpenOverlays);
    };
  }, [activeBreakpoint]);

  return (
    <div className={cx('container')}>
      <div className={cx('body')}>
        <PageContainerContext.Provider value={pageContainerContextValue}>
          <BasePageContainer>
            {children}
          </BasePageContainer>
        </PageContainerContext.Provider>
      </div>
      {enableWorkspace && (
        <div
          className={cx('workspace', { visible: workspaceIsVisible, overlay: isOverlayLayout })}
          style={isOverlayLayout ? null : { width: `${workspaceSize}px` }}
        >
          <div
            style={{
              height: '100%', overflow: 'hidden', width: '100%', position: 'relative',
            }}
          >
            <MockWorkspace onDismiss={() => { setWorkspaceIsVisible(false); }} />
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
