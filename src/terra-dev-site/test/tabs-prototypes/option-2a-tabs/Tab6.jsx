import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a";

import MockContent from "./../MockContent";

const Tab6 = () => {
  return (
    <WorkspaceContent label="Kiwis">
      <MockContent fruit="kiwis" />
    </WorkspaceContent>
  );
};

Tab6.titleKey = "derp";

export default Tab6;
