import React from "react";

const Comment = (props) => {
  console.log(props);
  return (
    <div className="comment" style={{ border: "1px solid grey" }}>
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at {props.time}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
