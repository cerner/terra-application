import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-4";

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
