import React from 'react';
import classNames from 'classnames/bind';
import { WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay } from '../../../workspace';

import MockContent from './MockContent';

import styles from './TestStyles.module.scss';

const cx = classNames.bind(styles);

const Tab3 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      toolbar={<p className={cx('tab-3-toolbar')}>Tab 3 Toolbar</p>}
      activityOverlay={isLoading ? <WorkspaceContentActivityOverlay variant="loading" /> : undefined}
      statusOverlay={showStatusOverlay ? <WorkspaceContentStatusOverlay variant="not-authorized" /> : undefined}
    >
      <MockContent title="Tab 3" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab3.titleKey = 'derp';

export default Tab3;
