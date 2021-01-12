import React from 'react';
import { WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay } from '../../../workspace';

import MockContent from './MockContent';

const Tab2 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      toolBar={<p style={{ backgroundColor: 'yellow', padding: '0.5rem', margin: '0' }}>Tab 2 Toolbar</p>}
      activityOverlay={isLoading && <WorkspaceContentActivityOverlay variant="loading" />}
      statusOverlay={showStatusOverlay && <WorkspaceContentStatusOverlay />}
    >
      <MockContent title="Tab 2" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab2.titleKey = 'derp';

export default Tab2;
