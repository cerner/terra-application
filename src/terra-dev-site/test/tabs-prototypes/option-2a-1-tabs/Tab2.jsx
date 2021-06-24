import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-1";

import MockContent from "./../MockContent";

const Tab2 = () => {
  return (
    <WorkspaceContent label="Oranges">
      <div aria-live="polite" style={{ color: "#fff" }}>
        Oranges selected
      </div>
      <MockContent fruit="oranges" />
    </WorkspaceContent>
  );
};

Tab2.titleKey = "derp";

export default Tab2;
