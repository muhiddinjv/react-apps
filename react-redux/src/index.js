import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import Header from "./Header";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header time={getTime()} />
      <div
        className="ui container comments"
        style={{ textAlign: "left"}}
      >
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
          author="Alex"
          img="img/avatar1.png"
          text="wow awesome!"
          time="10:00 PM"
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
