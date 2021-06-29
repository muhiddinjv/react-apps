import React from "react";

class Appone extends React.Component {
  constructor(props) {
    super(props);
    //This is the ONLY time we do direct assignment to this.state
    this.state = { lat: null, errorMsg: "" };
  }

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

    return (
      <div style={{ border: "1px solid grey" }}>
        <ol>
          <li>Loading... </li>
          <li>JS file loaded by browser</li>
          <li>Instance of App component is created</li>
          <li>App component 'constructor' function gets called</li>
          <li>
            State object is created and assigned to the 'this.state' property
          </li>
          <li>We call geolocation service</li>
          <li>React calls the components render method</li>
          <li>App returns JSS, gets rendered to page as HTML</li>
          <li>... wait ...</li>
          <li>We get result of geolocation!</li>
          <li>We update our state object with a call 'this.setState'</li>
          <li>React sees that we updated the state of a component</li>
          <li>React calls our 'render' method a second time</li>
          <li>Render method returns some (uploaded) JSX</li>
          <li>React takes that JSX and updates content onscreen</li>
        </ol>
      </div>
    );
  }
}

export default Appone;
