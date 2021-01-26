import React from 'react';
import {
  WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay, WorkspaceContentStatusOverlayButton,
} from '../../../workspace';

const Tab6 = () => {
  return (
    <WorkspaceContent
      activityOverlay={<WorkspaceContentActivityOverlay variant="loading" />}
    />
  );
};

Tab6.titleKey = 'derp';

export default Tab6;
