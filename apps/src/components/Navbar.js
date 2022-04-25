import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default class Navbar extends Component {
  state = {searchBar: <SearchBar onVideoTermSubmit={this.props.onVideoTermSubmit} />}

  onNavbarClick = term => {
    if (term === 'videos'){
      this.setState({searchBar: <SearchBar 
        onVideoTermSubmit={this.props.onVideoTermSubmit} 
        term={term} 
      />})
    } else {
      this.setState({searchBar: <SearchBar 
        onImageTermSubmit={this.props.onImageTermSubmit} 
        term={term} 
      />}) 
    }
  };

  render() {
    return ( // try adding "fixed" to nav className
        <nav className="ui pointing menu" style={{marginTop:'10px'}}>
        <NavLink className="item" to="/" onClick={()=>this.onNavbarClick('videos')}>
          videos
        </NavLink>
        <NavLink className="item" to="/images" onClick={()=>this.onNavbarClick('images')}>
          images
        </NavLink>
        <NavLink className="item" to="/posts">
          posts
        </NavLink>
        <div className="right menu">{this.state.searchBar}</div>
      </nav>
    );
  }
}
