import React from 'react';
import classNames from 'classnames/bind';

import BasePageContainer from './_BasePageContainer';
import ResizeHandle from './workspace/ResizeHandle';
import MockWorkspace from './workspace/MockWorkspace';

import styles from './ApplicationPageContainer.module.scss';

const cx = classNames.bind(styles);

const ApplicationPageContainer = ({
  children, enableWorkspace,
}) => {
  const [workspaceSize, setWorkspaceSize] = React.useState(200);

  return (
    <div className={cx('container')}>
      <div className={cx('body')}>
        <BasePageContainer>
          {children}
        </BasePageContainer>
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
