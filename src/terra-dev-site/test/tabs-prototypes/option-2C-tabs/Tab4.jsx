import React from "react";

import { WorkspaceContent } from "../../../../workspace-2c";

import MockContent from "../MockContent";

const Tab4 = () => {
  return (
    <WorkspaceContent label="Landmarks">
      <MockContent tab="landmarks" />
    </WorkspaceContent>
  );
};

Tab4.titleKey = "derp";

export default Tab4;
