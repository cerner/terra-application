import React from 'react';
import {
  WorkspaceContent, WorkspaceContentActivityOverlay,
} from 'terra-application/lib/workspace';

const Tab6 = () => (
  <WorkspaceContent
    activityOverlay={<WorkspaceContentActivityOverlay variant="loading" />}
    label="Tab 6 with Jam and Bread"
  />
);

Tab6.titleKey = 'derp';

export default Tab6;
