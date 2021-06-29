import React from "react";

class Appone extends React.Component {
  //This is the ONLY time we do direct assignment to this.state
  state = { lat: null, errorMsg: "" };
  // init state w/o constructor method

  componentDidMount() {
    //if put in render, it'd double fetch location
    window.navigator.geolocation.getCurrentPosition(
      // called setState to update state object
      (position) => this.setState({ lat: position.coords.latitude }),
      //NEVER DO A DIRECT ASSIGNMENT TO STATE OBJECT
      //   this.state.lat = position.coords.latitude;
      (err) => this.setState({ errorMsg: err.message })
      // ALWAYS use SETSTATE instead
    );
  }

  render() {
    // React says "You MUST define render"
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <div>Error: {this.state.lat}</div>;
    }
    return <div>Loading... "Appone" </div>
  }
}

export default Appone;
