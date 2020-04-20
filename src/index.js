import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

const store = configureStore();
window.store = store;
// axios.defaults.baseURL = "https://co-ping.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

if (window.Cypress) {
  window.store = store;
}

serviceWorker.unregister();
