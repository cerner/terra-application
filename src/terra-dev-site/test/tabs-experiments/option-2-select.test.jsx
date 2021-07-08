import React from "react";
import Workspace, { WorkspaceItem } from "../../../workspace-2c-select";
import ActiveMainPageContext from "../../../application-container/private/active-main-page/ActiveMainPageContext";
import Tab1 from "./option-2-select-tabs/Tab1";
import Tab2 from "./option-2-select-tabs/Tab2";
import Tab3 from "./option-2-select-tabs/Tab3";
import Tab4 from "./option-2-select-tabs/Tab4";
import Tab5 from "./option-2-select-tabs/Tab5";
import Tab6 from "./option-2-select-tabs/Tab6";

const sizeMap = {
  small: "320px",
  medium: "450px",
  large: "1000px",
};

const WorkspaceTest = () => {
  const [activeItemKey, setActiveItemKey] = React.useState("tab-1");
  const [workspaceSize, setWorkspaceSize] = React.useState("large");
  const activeMainPageRef = React.useRef({
    pageKey: "page-1",
    pageLabel: "Test Page",
    pageMetaData: {
      data: "data here",
    },
  });

  const onRequestSizeChange = (size) => {
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log("onRequestClose"); // eslint-disable-line no-console
  };

  return (
    <ActiveMainPageContext.Provider value={activeMainPageRef.current}>
      <div
        style={{ height: "100%", width: sizeMap[workspaceSize] }} // eslint-disable-line react/forbid-dom-props
      >
        <Workspace
          id="overlay-test-id"
          dismissButtonIsVisible
          isPresentedAsOverlay
          activeItemKey={activeItemKey}
          onRequestActivate={(key) => setActiveItemKey(key)}
          activeSize={workspaceSize}
          sizeOptions={[
            {
              key: "small",
              text: "Small",
            },
            {
              key: "medium",
              text: "Medium",
            },
            {
              key: "large",
              text: "Large",
            },
          ]}
          onRequestSizeChange={onRequestSizeChange}
          onRequestDismiss={onRequestClose}
        >
          <WorkspaceItem
            itemKey="tab-1"
            label="Apples"
            render={() => <Tab1 />}
          />
          <WorkspaceItem
            itemKey="tab-2"
            label="Oranges"
            render={() => <Tab2 />}
          />
          <WorkspaceItem
            itemKey="tab-3"
            label="Strawberries"
            render={() => <Tab3 />}
          />
          <WorkspaceItem
            itemKey="tab-4"
            label="Pineapples"
            render={() => <Tab4 />}
          />
          <WorkspaceItem
            itemKey="tab-5"
            label="Lemons"
            render={() => <Tab5 />}
          />
          <WorkspaceItem
            itemKey="tab-6"
            label="Kiwis"
            render={() => <Tab6 />}
          />
        </Workspace>
      </div>
    </ActiveMainPageContext.Provider>
  );
};

export default WorkspaceTest;
