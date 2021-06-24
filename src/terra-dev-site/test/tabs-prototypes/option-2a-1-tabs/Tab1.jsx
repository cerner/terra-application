import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-1";

import MockContent from "./../MockContent";

const Tab1 = () => {
  return (
    <WorkspaceContent label="Apples">
      <div aria-live="polite" style={{ color: "#fff" }}>
        Apples selected
      </div>
      <MockContent fruit="apples" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = "derp";

export default Tab1;
