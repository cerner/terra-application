import React from 'react';
import { WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay } from '../../../workspace';

import MockContent from './MockContent';

const Tab1 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Tab 1 Toolbar</p>}
      activityOverlay={isLoading ? <WorkspaceContentActivityOverlay variant="loading" /> : undefined}
      statusOverlay={showStatusOverlay ? <WorkspaceContentStatusOverlay variant="not-authorized" /> : undefined}
    >
      <MockContent title="Tab 1" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
