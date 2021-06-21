import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab5 = () => {
  return (
    <WorkspaceContent label="Lemons">
      <MockContent fruit="lemons" />
    </WorkspaceContent>
  );
};

Tab5.titleKey = "derp";

export default Tab5;
