import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import VideoSearch from "./videos/VideoSearch";
import SearchBar from "./SearchBar";

export default class Navbar extends Component {
  state = {searchBar: <SearchBar onTermSubmit={this.props.onTermSubmit} />}
  onNavbarClick = term => {
    console.log(term);
    if (term === 'videos'){
      this.setState({searchBar: <SearchBar onTermSubmit={this.props.onTermSubmit} term={term} />})
    } else {
      this.setState({searchBar: <SearchBar onSearchSubmit={this.props.onSearchSubmit} term={term} />}) 
    }
  };

  render() {
    return (
      <nav className="ui pointing menu">
        <NavLink className="item" to="/" onClick={()=>this.onNavbarClick('videos')}>
          videos
        </NavLink>
        <NavLink className="item" to="/images" onClick={()=>this.onNavbarClick('images')}>
          images
        </NavLink>
        <div className="right menu">{this.state.searchBar}</div>
      </nav>
    );
  }
}
