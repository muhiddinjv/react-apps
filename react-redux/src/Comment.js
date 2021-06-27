import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      avatar: "img/avatar1.png",
      author: "Kalla bo'sh",
      date: new Date().toLocaleTimeString(),
      day: new Date().toLocaleDateString(),
      text: "Mak mak makaron?",
    };
  }
  
  render() {
    return (
      <div
        className="ui container comments"
        style={{ textAlign: "left", border: "1px solid blue" }}
      >
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.state.avatar} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.state.author}
            </a>
            <div className="metadata">
              <span className="date">{this.state.day} at {this.state.date}</span>
            </div>
            <div className="text">{this.state.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
