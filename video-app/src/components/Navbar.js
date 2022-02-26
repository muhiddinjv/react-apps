import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import VideoSearch from './video/VideoSearch'
// import { Routes, Route } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="ui pointing menu">
          <NavLink className="item" to="/">
            videos
          </NavLink>
          <NavLink className="active item" to="/">
            images
          </NavLink>          
          <div className="right menu">
            <VideoSearch onTermSubmit={this.props.onTermSubmit}/>
          </div>
        </div>
      </nav>
    );
  }
}
