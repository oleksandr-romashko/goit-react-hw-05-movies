import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_ROUTING_BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
