import React from 'react';
import { WorkspaceContent } from '../../../workspace';

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

export default Tab4;
