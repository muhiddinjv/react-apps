import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'

export default class VideoApp extends Component {
  onTermSubmit = async (term) => {
    console.log(term);
    const response = youtube.get('/search',{
      params: {
        q: term
      }
    })
    console.log('response: ',response);
  }
  render() {
    return (
      <div className='ui container'>
          <SearchBar onTermSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}
