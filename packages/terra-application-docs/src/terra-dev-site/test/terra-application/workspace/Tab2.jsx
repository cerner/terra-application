import React from 'react';
import { WorkspaceContent } from '@cerner/terra-application/lib/workspace';

import MockContent from './MockContent';

const Tab2 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? <WorkspaceContent.ActivityOverlay variant="loading" /> : undefined}
      statusOverlay={showStatusOverlay ? <WorkspaceContent.StatusOverlay variant="not-authorized" /> : undefined}
    >
      <MockContent title="Tab 2" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab2.titleKey = 'derp';

export default Tab2;
