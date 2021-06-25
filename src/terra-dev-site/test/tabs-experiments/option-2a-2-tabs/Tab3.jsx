import React from "react";

import { WorkspaceContent } from "../../../../workspace-2a-2";

import MockContent from "./../MockContent";

const Tab3 = () => {
  return (
    <WorkspaceContent label="Strawberries">
      <div aria-live="polite" style={{ color: "#fff" }}>
        Strawberries selected
      </div>
      <MockContent fruit="strawberries" />
    </WorkspaceContent>
  );
};

Tab3.titleKey = "derp";

export default Tab3;
