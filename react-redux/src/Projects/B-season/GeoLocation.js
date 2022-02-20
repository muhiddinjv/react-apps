import React, {Component} from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class AGeoLocation extends Component {
  //This is the ONLY time we do direct assignment to this.state
  state = { lat: null, errorMsg: "" };
  // init state w/o constructor method

  componentDidMount() {
    //if put in render, it'd double fetch location
    window.navigator.geolocation.getCurrentPosition(
      // called setState to update state object
      (position) => this.setState({ lat: position.coords.latitude }),
      //NEVER DO A DIRECT ASSIGNMENT TO STATE OBJECT
      //WRONG: this.state.lat = position.coords.latitude;
      (err) => this.setState({ errorMsg: err.message })
      // ALWAYS use "setState" instead
    );
  }

  
  renderContent() {// always put conditions in a helper method 
  //like this to wrap everything that comes out of the component
  //with some common element

    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    // console.log(this.state.lat);
    return <Loader message="Please accept location request!" />;
  }

  render() {
    // To change all the pages (error, loader, content), helper function (renderContent) should be used
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default AGeoLocation;
