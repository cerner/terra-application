import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab2 = () => {
  return (
    <WorkspaceContent label="Oranges">
      {/* <div aria-live="polite" style={{ color: "#fff" }}>
        Oranges selected
      </div> */}
      <MockContent fruit="oranges" />
    </WorkspaceContent>
  );
};

Tab2.titleKey = "derp";

export default Tab2;
