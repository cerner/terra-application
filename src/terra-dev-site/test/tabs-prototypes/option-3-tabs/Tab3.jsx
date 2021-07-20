import React from "react";

import { WorkspaceContent } from "../../../../workspace-3";

import MockContent from "./../MockContent";

const Tab3 = () => {
  return (
    <WorkspaceContent label="Cities">
      <MockContent tab="cities" />
    </WorkspaceContent>
  );
};

Tab3.titleKey = "derp";

export default Tab3;
