import React from 'react';
import {
  WorkspaceContent,
} from '@cerner/terra-application/lib/workspace';

const Tab6 = () => (
  <WorkspaceContent
    activityOverlay={<WorkspaceContent.ActivityOverlay variant="loading" />}
    label="Tab 6 with Jam and Bread"
  />
);

Tab6.titleKey = 'derp';

export default Tab6;
