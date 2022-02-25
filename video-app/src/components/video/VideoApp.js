import React, { Component } from 'react';
// import { Routes, Route } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../../Api/youtube'

//<NavLink className="link" to="/">women</NavLink>


export default class VidApp extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount(){
    this.onTermSubmit('stories');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params: { q: term }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    console.log('From App: ', video);
    this.setState({selectedVideo: video})
  }
  render() {
    return (
      <div>
          <SearchBar onTermSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>  
              </div>
            </div>
          </div>
      </div>
    )
  }
}
