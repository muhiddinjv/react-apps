import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import Header from "./Header";
import Approval from "./Approval";
import Message from "./Message";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header time={getTime()} />

      <div className="ui container comments" style={{ textAlign: "left" }}>
        <Approval>
          <h4>Warning!</h4><p>Are you sure?</p>
          <Message
            header="This is the header"
            text="this is the text of the 
            Message component. Its beautiful isn't it?"
          />
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
