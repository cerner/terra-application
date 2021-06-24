import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-1";

import MockContent from "./../MockContent";

const Tab5 = () => {
  return (
    <WorkspaceContent label="Lemons">
      <div aria-live="polite" style={{ color: "#fff" }}>
        Lemons selected
      </div>
      <MockContent fruit="lemons" />
    </WorkspaceContent>
  );
};

Tab5.titleKey = "derp";

export default Tab5;
