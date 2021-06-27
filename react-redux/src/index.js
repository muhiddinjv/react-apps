import React from "react";
import reactDom from "react-dom";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "img here",
      title: "Alex",
      post: "Great blog post!",
      time: this.getTime(),
    };
  }
  getTime = () => {
    return new Date().toLocaleTimeString();
  };
  render() {
    return (
      <div
        className="ui container comments"
        style={{ textAlign: "left", border: "1px solid blue" }}
      >
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src="../img/avatar1.png" />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice blog post!</div>
          </div>
        </div>
      </div>
    );
  }
}

reactDom.render(<Users/>, document.querySelector('#root'));
