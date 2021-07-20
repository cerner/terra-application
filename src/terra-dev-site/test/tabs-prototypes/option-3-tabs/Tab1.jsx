import React from "react";

import { WorkspaceContent } from "../../../../workspace-3";

import MockContent from "./../MockContent";

const Tab1 = () => {
  return (
    <WorkspaceContent label="Continents">
      <MockContent fruit="continents" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = "derp";

export default Tab1;
