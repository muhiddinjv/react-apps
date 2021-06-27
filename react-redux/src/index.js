import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  const style = { backgroundColor: "grey", color: "white" };
  const btnTxt = { text: "click me" };
  // const arr = ['hi','there'];

  const popup = (e) => {
    alert("The time is " + getTime());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Current Time: {getTime()}</h3>

      <label className="label" htmlFor="name">
        Enter name:{" "}
      </label>

      <input id="name" type="text" />

      <button onClick={popup} style={style}>
        {btnTxt.text}
        {/* do not use {btnTxt} bc jsx cannot print objects */}
        {/* use {btnTxt.text} so that jsx can understand it */}
      </button>
      <div
        className="ui container comments"
        style={{ textAlign: "left"}}
      >
        <Comment
          author="Alex"
          img="img/avatar1.png"
          text="wow awesome!"
          time="10:00 PM"
        />
        <Comment
          author="John"
          img="img/avatar2.png"
          text="I love it!"
          time="3:00 PM"
        />
        <Comment
          author="Rambo"
          img="img/avatar3.png"
          text="Killer app!"
          time={getTime()}
        />
        <Comment
          author="Lola"
          img="img/avatar5.png"
          text="How did u do it?"
          time={getTime()}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
