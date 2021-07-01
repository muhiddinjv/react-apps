import React from "react";

const Loading = () => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loading;
