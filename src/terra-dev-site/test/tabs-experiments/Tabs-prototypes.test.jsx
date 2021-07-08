import React from "react";
import ActiveMainPageContext from "../../../application-container/private/active-main-page/ActiveMainPageContext";
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
