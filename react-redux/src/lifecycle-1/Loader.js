import React from "react";

const Loader = (props) => {
  return (
    <div className="ui segment" style={{ height: "100vh" }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Loader.defaultProps = { message: "Loading..." };

export default Loader;
