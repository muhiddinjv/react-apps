import React, { Component } from 'react';
import SongsApp from './songs/compos/SongsApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './songs/reducers';

export default class SongsIndex extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SongsApp />
      </Provider>
    )
  }
}
