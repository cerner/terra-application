import React from "react";
import Workspace, { WorkspaceItem } from "../../../workspace-2a-1";
import ActiveMainPageContext from "../../../application-container/private/active-main-page/ActiveMainPageContext";
import Tab1 from "./option-2a-1-tabs/Tab1";
import Tab2 from "./option-2a-1-tabs/Tab2";
import Tab3 from "./option-2a-1-tabs/Tab3";
import Tab4 from "./option-2a-1-tabs/Tab4";
import Tab5 from "./option-2a-1-tabs/Tab5";
import Tab6 from "./option-2a-1-tabs/Tab6";
import IframesContainer from "../../../iframes/IframesContainer";

const sizeMap = {
  small: "320px",
  medium: "500px",
  large: "1000px",
};

const WorkspaceTest = () => {
  const activeMainPageRef = React.useRef({
    pageKey: "page-1",
    pageLabel: "Test Page",
    pageMetaData: {
      data: "data here",
    },
  });

  return (
    <ActiveMainPageContext.Provider value={activeMainPageRef.current}>
      <div>
        <IframesContainer></IframesContainer>
      </div>
    </ActiveMainPageContext.Provider>
  );
};

export default WorkspaceTest;
