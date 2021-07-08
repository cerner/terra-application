import React, { useState } from "react";
import ButtonGroup from "terra-button-group";

const mainStylesContainer = {
  backgroundColor: "#eeeeef",
  padding: "4rem",
};

const headerStyles = {
  marginBottom: "3rem",
};

export default function IframesContainer() {
  const [selectedKeyOpt, setSelectKeyOpt] = useState(["single-select1"]);
  const handleSelection = (event, selectedKey) => {
    event.preventDefault();
    setSelectKeyOpt([selectedKey]);
    console.log("Pollo: ", event, selectedKey);
  };

  const option1 =
    '<iframe src="http://0.0.0.0:8080/raw/tests/terra-application/tabs-prototypes/option-1" width="1000" height="800" scrolling="no" title="Tabs Option 1"></iframe>';
  const option2 =
    '<iframe src="http://0.0.0.0:8080/raw/tests/terra-application/tabs-prototypes/option-2-a" width="1000" height="800"scrolling="no" title="Tabs Option 2"></iframe>';
  const option3 =
    '<iframe src="http://0.0.0.0:8080/raw/tests/terra-application/tabs-prototypes/option-3" width="1000" height="800"scrolling="no" title="Tabs Option 3"></iframe>';
  return (
    <div style={mainStylesContainer}>
      <header style={headerStyles}>
        <ButtonGroup
          id="controlled-button-group"
          onChange={handleSelection}
          selectedKeys={selectedKeyOpt}
        >
          <ButtonGroup.Button text="Tabs Option 1" key="single-select1" />
          <ButtonGroup.Button text="Tabs Option 2" key="single-select2" />
          <ButtonGroup.Button text="Tabs Option 3" key="single-select3" />
        </ButtonGroup>
      </header>
      <main>
        {selectedKeyOpt[0] === "single-select1" && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: option1 }} />
          </div>
        )}
        {selectedKeyOpt[0] === "single-select2" && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: option2 }} />
          </div>
        )}
        {selectedKeyOpt[0] === "single-select3" && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: option3 }} />
          </div>
        )}
      </main>
    </div>
  );
}
