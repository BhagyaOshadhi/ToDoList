import React from "react";
import ReactHooksToDoApp from "./ReactHooks";
import HookstateToDoApp from "./Hookstate";

//JSX.Element: TS custom definition
function App(): JSX.Element {
  return (
    <>
      <h1>To Do List</h1>
      <ReactHooksToDoApp />
      <HookstateToDoApp />
    </>
  );
}
export default App;
