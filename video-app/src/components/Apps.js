import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import VideoApp from './videos/VideoApp';
import ImgApp from './images/ImgApp';
import Navbar from './Navbar';
import youtube from '../Api/youtube';
import unsplash from "../Api/unsplash";

export default class Apps extends Component {  
  state = { videos: [], selectedVideo: null, images: [] }

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

  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get("/search/photos", { params: { query: term } })
      this.setState({images: response.data.results})
  }

  render() {
    return (
      <main className='ui container'>
          <Navbar 
            onTermSubmit={this.onTermSubmit} 
            onSearchSubmit={this.onSearchSubmit}
          />
          <Routes>
            <Route exact path="/" element={<VideoApp 
              onVideoSelect={this.onVideoSelect}
              selectedVideo={this.state.selectedVideo}
              videos={this.state.videos}
            />} />
            <Route path="/images" element={<ImgApp 
              images={this.state.images}
            />} />
          </Routes>
      </main>
    );
  }
}