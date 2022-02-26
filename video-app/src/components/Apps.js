import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { VideoApp, ImgApp, Navbar, youtube, unsplash } from "./index";

export default class Apps extends Component {  
  state = { videos: [], selectedVideo: null, images: [] }

  componentDidMount(){
    this.onVideoTermSubmit('stories');
  }

  onVideoTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params: { q: term }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video})
  }

  onImageTermSubmit = async (term) => {
    const response = await unsplash
      .get("/search/photos", { params: { query: term } })
      this.setState({images: response.data.results})
  }

  render() {
    return (
      <main className='ui container' style={{paddingBottom:'20px'}}>
          <Navbar 
            onVideoTermSubmit={this.onVideoTermSubmit} 
            onImageTermSubmit={this.onImageTermSubmit}
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