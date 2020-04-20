import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const store = configureStore();
window.store = store;
axios.defaults.baseURL = "https://co-ping.herokuapp.com";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (window.Cypress) {
  window.store = store;
}

serviceWorker.unregister();
