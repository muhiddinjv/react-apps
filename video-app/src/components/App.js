import React, { Component } from 'react';
import SearchBar from './SearchBar'

export default class VideoApp extends Component {
  render() {
    return (
      <div className='ui container'>
          <SearchBar />
      </div>
    )
  }
}
