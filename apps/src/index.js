import React from "react";
import ReactDOM from "react-dom";
import Apps from "./components/Apps";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
