import React from "react";

const Loading = (props) => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Loading.defaultProps = { message: "loading..." };

export default Loading;
