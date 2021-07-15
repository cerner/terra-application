import React from "react";

const sizeMap = {
  small: "320px",
  medium: "500px",
  large: "1000px",
};

const WorkspaceTest = () => (
  <div>
    <div style={{ background: "linear-gradient(45deg,#275696,#3a63c8)", minHeight: "20vh", padding: "2rem", color: "white", textAlign: "center"}}>
    <h1>Tabs Prototypes</h1>
  </div>
    <div style={{ background: "#f6faff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>

    <div style={{
      background: "white", borderRadius: "1rem", padding: "1rem 4rem", boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)", marginBottom: "2rem"
    }}>
      <h2>Tabs Option 1</h2>
      <a>Open prototype</a>
    </div>
    <div style={{
      background: "white", borderRadius: "1rem", padding: "1rem 4rem", boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)", marginBottom: "2rem"
    }}>
      <h2>Tabs Option 2</h2>
      <a>Open prototype</a>
    </div>
    <div style={{
      background: "white", borderRadius: "1rem", padding: "1rem 4rem", boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)", marginBottom: "2rem"
    }}>
      <h2>Tabs Option 3</h2>
      <a>Open prototype</a>
    </div>
  </div>
  </div>
);

export default WorkspaceTest;
