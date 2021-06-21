import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab3 = () => {
  return (
    <WorkspaceContent label="Strawberries">
      <MockContent fruit="strawberries" />
    </WorkspaceContent>
  );
};

Tab3.titleKey = "derp";

export default Tab3;
