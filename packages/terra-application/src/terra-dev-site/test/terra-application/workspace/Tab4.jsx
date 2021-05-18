import React from 'react';
import { WorkspaceContent, WorkspaceContentStatusOverlay, WorkspaceContentStatusOverlayButton } from '../../../../workspace';

const Tab4 = () => (
  <WorkspaceContent
    statusOverlay={(
      <WorkspaceContentStatusOverlay variant="no-data" message="This is a message.">
        <WorkspaceContentStatusOverlayButton text="Action 1" />
        <WorkspaceContentStatusOverlayButton text="Action 2" />
      </WorkspaceContentStatusOverlay>
    )}
  />
);

Tab4.titleKey = 'derp';

export default Tab4;
