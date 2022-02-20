import React from "react";

const Placeholder = (props) => {
  return <div className="ui placeholder segment" style={{ margin:"20px 0"}}>{props.children}</div>;
};

export default Placeholder;
