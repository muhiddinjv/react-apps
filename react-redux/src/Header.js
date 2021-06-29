import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { val: "" };
  }

  render() {
    const style = { backgroundColor: "grey", color: "white" };
    const btnTxt = { text: "click me" };
    const popup = () => {
      alert("The time is " + this.props.time);
    };
    return (
      <div>
        <h3>Current Time: {this.props.time}</h3>
        <label className="label" htmlFor="name">
          Enter name:{" "}
        </label>
        <input id="name" type="text" className="ui input" placeholder="type name here" />
        <button onClick={popup} style={style}>
          {btnTxt.text}
          {/* do not use {btnTxt} bc jsx cannot print objects */}
          {/* use {btnTxt.text} so that jsx can understand it */}
        </button>
      </div>
    );
  }
}

export default Header;
