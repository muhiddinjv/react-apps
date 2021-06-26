import React from "react";
import ReactDOM from "react-dom";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  const style = { backgroundColor: "grey", color: "white" };
  const btnTxt = { text: "click me" };
  // const arr = ['hi','there'];
  const clicked = (e) => {
    alert(e.target);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Current Time: {getTime()}</h3>

      <label className="label" htmlFor="name">
        Enter name:{" "}
      </label>

      <input id="name" type="text" />

      <button onClick={clicked} style={style}>
        {btnTxt.text}
        {/* do not use {btnTxt} bc jsx cannot print objects */}
        {/* use {btnTxt.text} so that jsx can understand it */}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
