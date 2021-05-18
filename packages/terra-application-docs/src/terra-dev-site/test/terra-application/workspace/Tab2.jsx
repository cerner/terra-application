import React from 'react';
import { WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay } from '@cerner/terra-application/lib/workspace';

import MockContent from './MockContent';

const Tab2 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? <WorkspaceContentActivityOverlay variant="loading" /> : undefined}
      statusOverlay={showStatusOverlay ? <WorkspaceContentStatusOverlay variant="not-authorized" /> : undefined}
    >
      <MockContent title="Tab 2" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab2.titleKey = 'derp';

export default Tab2;
