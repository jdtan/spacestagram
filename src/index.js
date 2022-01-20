import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DataStore from "./context/Store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DataStore>
      <App />
    </DataStore>
  </React.StrictMode>,
  document.getElementById("root")
);
