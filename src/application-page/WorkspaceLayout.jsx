import React from 'react';
import classNames from 'classnames/bind';

import styles from './WorkspaceLayout.module.scss';

const cx = classNames.bind(styles);

const WorkspaceLayout = ({
  workspace, children,
}) => (
  <div
    className={cx('workspace-layout')}
  >
    <div className={cx('workspace-body')}>
      {children}
    </div>
    <div className={cx('workspace-container')}>
      {workspace}
    </div>
  </div>
);

export default WorkspaceLayout;
