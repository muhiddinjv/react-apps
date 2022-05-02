import React, { Component } from "react";
import PostList from "./components/PostList";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk;'

const store = createStore(reducers, applyMiddleware(thunk));

export default class PostApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="ui container">
          <PostList />
        </div>
      </Provider>
    );
  }
}
