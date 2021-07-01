import React from "react";

const Loading = (props) => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.text}</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loading;
