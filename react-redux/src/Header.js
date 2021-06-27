import React from "react";

const Header = (props) => {
  const style = { backgroundColor: "grey", color: "white" };
  const btnTxt = { text: "click me" };
  // const arr = ['hi','there'];

  const popup = (e) => {
    alert("The time is " + props.time);
  };
  return (
    <div>
      <h3>Current Time: {props.time}</h3>

      <label className="label" htmlFor="name">
        Enter name:{" "}
      </label>

      <input id="name" type="text" />

      <button onClick={popup} style={style}>
        {btnTxt.text}
        {/* do not use {btnTxt} bc jsx cannot print objects */}
        {/* use {btnTxt.text} so that jsx can understand it */}
      </button>
    </div>
  );
};

export default Header;