import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import VideoApp from './video/VideoApp'
import Navbar from './Navbar'
import youtube from '../Api/youtube'

export default class Apps extends Component {  
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
      <main className='ui container'>
          <Navbar onTermSubmit={this.onTermSubmit}/>
          <Routes>
            <Route exact path="/" element={<VideoApp 
              onVideoSelect={this.onVideoSelect}
              selectedVideo={this.state.selectedVideo}
              videos={this.state.videos}
            />} />
            {/* <Route path="/image" element={<ImgApp />} /> */}
          </Routes>
      </main>
    );
  }
}