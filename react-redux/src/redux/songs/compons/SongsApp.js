import React, { Component } from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';

export default class SongsApp extends Component {
  render() {
    return (
      <div>
        <SongList />
      </div>
    )
  }
}
