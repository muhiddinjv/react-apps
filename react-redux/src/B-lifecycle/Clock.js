import React, {Component} from "react";

class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };
  componentDidMount() {
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000);
  }
  
  render() {
    return (
      <h3 className="time">
        Current Time: {this.state.time}
      </h3>
    );
  }
}

export default Clock;
