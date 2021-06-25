import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-3";

import MockContent from "./../MockContent";

const Tab2 = () => {
  return (
    <WorkspaceContent label="Oranges">
      <MockContent fruit="oranges" />
    </WorkspaceContent>
  );
};

Tab2.titleKey = "derp";

export default Tab2;
