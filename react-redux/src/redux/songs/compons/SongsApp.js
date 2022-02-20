import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Placeholder from "../../../A-compos/Placeholder";


export default class SongsApp extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
        <Placeholder>
            <SongList />
        </Placeholder>
          </div>
          <div className="column eight wide">
        <Placeholder>
            <SongDetail/>
        </Placeholder>
          
          </div>
        </div>

      </div>
    )
  }
}
