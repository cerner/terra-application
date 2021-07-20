import React from "react";

import { WorkspaceContent } from "../../../../workspace-2c";

import MockContent from "../MockContent";

const Tab2 = () => {
  return (
    <WorkspaceContent label="Countries">
      <MockContent tab="countries" />
    </WorkspaceContent>
  );
};

Tab2.titleKey = "derp";

export default Tab2;
