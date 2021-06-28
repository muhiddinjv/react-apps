import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import Header from "./Header";
import Approval from "./Approval";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header time={getTime()} />

      <div className="ui container comments" style={{ textAlign: "left" }}>
        <Approval>
          Are you sure?
        </Approval>
        <Approval>
          <Comment
            author="John"
            img="img/avatar2.png"
            text="I love it!"
            time="3:00 PM"
          />
        </Approval>
        <Approval>
          <Comment
            author="Rambo"
            img="img/avatar3.png"
            text="Killer app!"
            time={getTime()}
          />
        </Approval>
        <Approval>
          <Comment
            author="Lola"
            img="img/avatar5.png"
            text="How did u do it?"
            time={getTime()}
          />
        </Approval>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
