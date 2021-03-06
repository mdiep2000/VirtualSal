import React from "react";
import ReactDOM from "react-dom";
import "./Frontend/index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import VirtualSal from "./Frontend/Components/VirtualSal.jsx";
ReactDOM.render(
  <React.StrictMode>
    <VirtualSal />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
