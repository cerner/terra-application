import React from "react";

import { WorkspaceContent } from "../../../../workspace-3";

import MockContent from "./../MockContent";

const Tab6 = () => {
  return (
    <WorkspaceContent label="Currencies">
      <MockContent tab="currencies" />
    </WorkspaceContent>
  );
};

Tab6.titleKey = "derp";

export default Tab6;
