import React from "react";

import { WorkspaceContent } from "../../../../workspace-3e";

import MockContent from "../MockContent";

const Tab4 = () => {
  return (
    <WorkspaceContent label="Pineapples">
      {/* <div aria-live="polite" style={{ color: "#fff" }}>
        Pineapples selected
      </div> */}
      <MockContent fruit="pineapples" />
    </WorkspaceContent>
  );
};

Tab4.titleKey = "derp";

export default Tab4;
