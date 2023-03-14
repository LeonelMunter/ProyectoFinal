import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);
