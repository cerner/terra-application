import React from "react";

import { WorkspaceContent } from "../../../workspace";

import MockContent from "./MockContent";

const Tab5 = () => {
  return (
    <WorkspaceContent label="Languages">
      <MockContent tab="languages" />
    </WorkspaceContent>
  );
};

Tab5.titleKey = "derp";

export default Tab5;
