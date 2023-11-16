import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store/store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
    <ToastContainer position="top-center" autoClose={1000} />
  </BrowserRouter>
);
