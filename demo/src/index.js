import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css";
import App from "./App/App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <div >
    <h1>Formularios de test</h1>
    
    <App/>

  </div>
);
