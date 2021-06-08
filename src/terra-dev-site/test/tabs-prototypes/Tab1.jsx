import React from "react";

import { WorkspaceContent } from "../../../workspace";

import MockContent from "./MockContent";

const Tab1 = () => {
  return (
    <WorkspaceContent label="Apples" more>
      <MockContent fruit="apples" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = "derp";

export default Tab1;