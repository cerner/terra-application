import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab1 = () => {
  return (
    <WorkspaceContent label="Apples">
      <MockContent fruit="apples" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = "derp";

export default Tab1;
