import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube'

export default class VideoApp extends Component {
  state = { videos: [] }
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search',{
      params: { q: term }
    })
    this.setState({videos: response.data.items})
    console.log('response: ',this.state.videos);
  }
  render() {
    return (
      <div className='ui container'>
          <SearchBar onTermSubmit={this.onTermSubmit}/>
          <VideoList videos={this.state.videos}/>

      </div>
    )
  }
}
