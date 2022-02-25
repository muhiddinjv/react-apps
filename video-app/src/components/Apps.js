import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import VideoApp from './video/VideoApp'
import Navbar from './Navbar'

export default class Apps extends Component {  
  render() {
    return (
      <main className='ui container'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<VideoApp/>} />
            {/* <Route path="/image" element={<ImgApp />} /> */}
          </Routes>
      </main>
    );
  }
}