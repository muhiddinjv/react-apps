import React, { Component } from "react";
import PostList from "./components/PostList";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class PostApp extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="ui container">
          <PostList />
        </div>
      </Provider>
    );
  }
}
