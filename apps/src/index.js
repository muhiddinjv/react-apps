import React from "react";
import ReactDOM from "react-dom";
import Apps from "./components/Apps";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore} from 'redux'
import reducers from "./redux/reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
