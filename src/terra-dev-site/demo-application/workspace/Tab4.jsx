import React from 'react';
import { WorkspaceContent, WorkspaceContentStatusOverlay } from '../../../workspace';

const Tab4 = () => (
  <WorkspaceContent
    statusOverlay={<WorkspaceContentStatusOverlay />}
  />
);

Tab4.titleKey = 'derp';

export default Tab4;
