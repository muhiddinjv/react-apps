import React, { useState } from "react";
import Placeholder from "./Placeholder";
import Clock from "../lifecycle-1/Clock";

const Header = (props) => {
  const [title, setTitle] = useState("");

  const style = { backgroundColor: "grey", color: "white" };
  const btnTxt = { text: "click me" };

  const popup = () => {
    return title === ""
      ? alert("enter some text")
      : alert("Hello " + title + "!");
  };
  return (
    <div>
      <Placeholder>
        <div style={{textAlign:"center"}}>
        <Clock/>
          <label className="label" htmlFor="name">
            Enter name:{" "}
          </label>
          <input
            id="name"
            type="text"
            placeholder="type name here"
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={popup} style={style}>
            {btnTxt.text}
            {/* do not use {btnTxt} bc jsx cannot print objects */}
            {/* use {btnTxt.text} so that jsx can understand it */}
          </button>
        </div>
      </Placeholder>
    </div>
  );
};

export default Header;
