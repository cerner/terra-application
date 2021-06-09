import React from 'react';
import { WorkspaceContent } from '@cerner/terra-application/lib/workspace';

const Tab4 = () => (
  <WorkspaceContent
    statusOverlay={(
      <WorkspaceContent.StatusOverlay variant="no-data" message="This is a message.">
        <WorkspaceContent.StatusOverlay.Button text="Action 1" />
        <WorkspaceContent.StatusOverlay.Button text="Action 2" />
      </WorkspaceContent.StatusOverlay>
    )}
  />
);

Tab4.titleKey = 'derp';

export default Tab4;
