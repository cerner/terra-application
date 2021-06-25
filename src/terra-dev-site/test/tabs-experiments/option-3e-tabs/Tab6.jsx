import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab6 = () => {
  return (
    <WorkspaceContent label="Kiwis">
      {/* <div aria-live="polite" style={{ color: "#fff" }}>
        Kiwis selected
      </div> */}
      <MockContent fruit="kiwis" />
    </WorkspaceContent>
  );
};

Tab6.titleKey = "derp";

export default Tab6;
