import React from "react";

import SearchAppBar from "./component/material/Navbar";
import LayoutComponent from "./component/material/Layout";
import OutlinedTextFields from "./component/material/Form";

import "./App.css";
import TStates from "./States/StatesExample";

function App() {
  return (
    <div align="center">
      <h1> THIS IS MY FIRST PROJECT</h1>

      <SearchAppBar />
      <LayoutComponent />
      <h1> THIS IS MATERIAL FORM EXAMPLE </h1>
      <OutlinedTextFields />
      <TStates />
    </div>
  );
}

export default App;
